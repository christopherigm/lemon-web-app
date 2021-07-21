import React, {
  useEffect,
  useState
} from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import Footer from 'src/modules/footer/footer';
import fetchData from 'src/modules/utils/fetch-data';
import { Link } from 'react-router-dom';

const postsObject = {
  data: [{
    id: 0,
    attributes: {
      title: '-',
      created: '',
      img_picture: ''
    },
    relationships: {
      category: {
        data: {
          attributes: {
            title: ''
          }
        }
      }
    }
  }]
};

const PostElement = ( props: any ): React.ReactElement => {
  const post = props.post;
  const category = post.relationships.category.data;

  return (
    <Link
      to={`/${category.attributes.slug}/${post.attributes.slug}`}
      className='col s3'
      style={{
        border: '1px solid red'
      }}>
      <span className='white-text'>{post.attributes.title}</span>
      <img src={post.attributes.img_picture} width='60' height='35'/>
      <span className='red-text'>{category.attributes.title}</span>
    </Link>
  );
};

const Home = (): React.ReactElement => {
  const [posts, setPosts]: any = useState(postsObject);

  useEffect(() => {
    fetchData('posts/?include=category,hashtags,author')
      .then(( response: any ) => {
        console.log('Todo salio bien:', response);
        for (let i = 0; i < response.data.length; i++) {
          console.log(
            response.data[i].attributes.title,
            ' - ',
            response.data[i].relationships.category.data.attributes.title
          );
        }
        setPosts(response);
      })
      .catch(( error ) => {
        console.log('Algo salio mal:', error);
      });
  }, [fetchData]);

  return (
    <>
      <NavBar />
      <HorizontalSpace size='large' />

      <div className='row'>
      {
        posts.data.map((post: any, i: number) => {
          return (
            <PostElement key={i} post={post} />
          );
        })
      }
      </div>

      <HorizontalSpace size='large' />
      <Footer />
      <SystemCheck />
    </>
  );
};

export default Home;
