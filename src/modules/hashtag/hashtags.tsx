import React, {
  useEffect,
  useState
} from 'react';
import fetchData from 'src/modules/utils/fetch-data';


const apihashtag = {
  data: [{
    id: 0,
    attributes: {
      title: ''
    },
    relationships: {
      hashtags: [{
        data: {
          id: 0,
          attributes: {
            hashtag: ''
          }
        }
      }]
    }
  }],
  included: []
};

const Hashtags = (): React.ReactElement => {
  const [hash, sethashtags]: any = useState(apihashtag);

  useEffect(()=> {
    fetchData('posts/?include=category,hashtags,author')
    .then(( response: any ) => {
      console.log('Conexion correct', response);
      sethashtags(response);
    })
    .catch((error) => {
      console.log('Error conexion', error);
    });
  }, [fetchData]);

  return (
    <>
    {
      hash.data.map((element: any, index: number) => {
        return (
          <div key={index}>
            <span className='green-text'>{element.attributes.title}</span>
          </div>
        );
      })
    }
    </>
  );
};

export default Hashtags;
