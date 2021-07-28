import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesMenu = ( props: any ): React.ReactElement => {
  return (
    <>
      {
        props.items ?
        props.items.map((item: any, index: any) => {
          if ( !item.attributes ) return null;
          return (
            <li key={index}>
              <Link
                className='white-text'
                to={`/${item.attributes.slug}`}>
                {item.attributes.title}
              </Link>
            </li>
          );
        }) : null
      }
    </>
  );
};

export default CategoriesMenu;
