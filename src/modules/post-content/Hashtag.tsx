import React from 'react';
import { Link } from 'react-router-dom';

const Hashtag = (props: any): React.ReactElement => {
  return (
  <>
  {
    props.hashtag ?
    props.hashtag.map((item: any, index: any) =>{
      if ( !item.attributes) return null;
      return (
        <div key={index} className='Hashtag container row'>
            <div className='col m1 hide-on-small-only'></div>
            <div className="col s12 m10">
            <Link
              className='green-text'
              to={item.attributes.hashtag}>
                #{item.attributes.hashtag}
            </Link>
            </div>
            <div className='col m1 hide-on-small-only'></div>
        </div>
      );
    }) : null
  }
  </>
  );
};

export default Hashtag;
