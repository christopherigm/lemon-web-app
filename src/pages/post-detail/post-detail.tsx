import React, {
  useEffect,
  useState
} from 'react';
import {
  useParams,
  useHistory
} from 'react-router-dom';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import Footer from 'src/modules/footer/footer';
import fetchData from 'src/modules/utils/fetch-data';
import HeaderPost from 'src/modules/header-post/header-post';
import PostContent from 'src/modules/post-content/post-content';
import PostHeaderPicture from 'src/modules/post-header-picture/post-header-picture';
import PostAuthorBiography from 'src/modules/post-author-biography/post-author-biography';
import EnvironmentVariables from 'src/constants/EnvironmentVariables';

const env = EnvironmentVariables.getInstance();
const isProduction = env.production;

const postObject = {
  attributes: {
    title: '',
    img_picture: '',
    created: '',
    description: ''
  },
  relationships: {
    author: {
      data: {
        attributes: {
          first_name: '',
          last_name: '',
          profile: {
            img_picture: '',
            biography: ''
          }
        }
      }
    },
    category: {
      data: {
        attributes: {
          title: ''
        }
      }
    }
  }
};

const PostDetail = (): React.ReactElement => {
  const history = useHistory();
  const params: any = useParams();
  const [post, setPost]: any = useState(postObject);

  useEffect(() => {
    if ( isProduction ) {
      const data: any = document.getElementById('data')?.innerHTML || '{ post: null }';
      const postData = JSON.parse(data);
      if ( !postData || !postData.attributes ) return history.replace('/');
      return setPost(postData);
    }
    fetchData(`posts?filter[slug]=${params.post}&include=category,author,hashtags`)
      .then((response: any) => {
        if ( response.length === 0 ) {
          console.log('Error, noticia no existe');
        } else {
          const postData = response.data[0];
          if ( !postData ) return history.replace('/');
          setPost(postData);
          console.log('Noticia:', postData);
        }
      })
      .catch((error) => {
        console.log('Hubo un error', error);
      });
  }, [fetchData]);

  return (
    <>
      <NavBar />
      {
        post && post.attributes && post.relationships ?
        <>
          <PostHeaderPicture image={post.attributes.img_picture}/>
          <br /><br />
          <div className='white-text'>
            <HeaderPost
              category={post.relationships.category.data.attributes.title}
              title={post.attributes.title}
              profile_picture={post.relationships.author.data.attributes.profile.img_picture}
              first_name={post.relationships.author.data.attributes.first_name}
              last_name={post.relationships.author.data.attributes.last_name}
              date={post.attributes.created}
            />
            <PostContent description={post.attributes.description}/>
            <HorizontalSpace size='medium' />
            <PostAuthorBiography
              profile_picture={post.relationships.author.data.attributes.profile.img_picture}
              first_name={post.relationships.author.data.attributes.first_name}
              last_name={post.relationships.author.data.attributes.last_name}
              biography={post.relationships.author.data.attributes.profile.biography}
            />
          </div>
          <HorizontalSpace size='large' />
        </> : <>
          <HorizontalSpace size='large' />
          <span className='white-text'>Noticia {params.post} no encontrada :(</span>
          <HorizontalSpace size='large' />
        </>
      }
      <Footer />
      <SystemCheck />
    </>
  );
};

export default PostDetail;
