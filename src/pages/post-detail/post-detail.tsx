import React, {
  useEffect,
  useState
} from 'react';
import { useParams } from 'react-router-dom';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import Footer from 'src/modules/footer/footer';
import fetchData from 'src/modules/utils/fetch-data';

const postObject = {
  attributes: {
    title: '',
    img_picture: ''
  },
  relationships: {
    author: {
      data: {
        attributes: {
          first_name: ''
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
  const params: any = useParams();
  const [post, setPost]: any = useState(postObject);

  useEffect(() => {
    fetchData(`posts?filter[slug]=${params.post}&include=category,author,hashtags`)
      .then((response: any) => {
        if ( response.length === 0 ) {
          console.log('Error, noticia no existe');
        } else {
          setPost(response.data[0]);
          console.log('Noticia:', response.data[0]);
        }
      })
      .catch((error) => {
        console.log('Hubo un error', error);
      });
  }, [fetchData]);

  return (
    <>
      <NavBar />
      <HorizontalSpace size='large' />
      <div className='white-text'>
        {post.attributes.title}
        <img src={post.attributes.img_picture} />
        Author: {post.relationships.author.data.attributes.first_name}
        <br />
        Categoria: {post.relationships.category.data.attributes.title}
      </div>
      <HorizontalSpace size='large' />
      <Footer />
      <SystemCheck />
    </>
  );
};

export default PostDetail;
