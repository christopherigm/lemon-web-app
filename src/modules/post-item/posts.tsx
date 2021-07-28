import React, {
  useEffect,
  useState
} from 'react';
import fetchData from 'src/modules/utils/fetch-data';
import PostItem from 'src/modules/post-item/post-item';
import 'src/modules/post-item/posts.scss';

const apiItem = {
  data: [{
    id: 0,
    attributes: {
      title: '',
      created: '',
      img_picture: '',
      slug: ''
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
            slug: ''
          }
        }
      }
    }
  }],
  included: []
};


const Posts = (): React.ReactElement => {
  const [items, setItems]: any = useState(apiItem);

  useEffect(() => {
    fetchData('posts/?include=category,hashtags,author')
      .then(( response: any ) => {
        console.log('Conexion correct:', response);
        setItems(response);
      })
      .catch(( error ) => {
        console.log('Error conexion:', error);
      });
  }, [fetchData]);

  return (
    <div className='container'>
      <div className='row col s12 m6 l3'>
        {
          items.data.map((element: any, index: number) => {
          return (
            <PostItem
              key={index}
              element={element}/>
            );
          })
        }
      </div>
    </div>
  );
};

export default Posts;
