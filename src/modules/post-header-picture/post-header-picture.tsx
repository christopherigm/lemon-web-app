import React from 'react';
import 'src/modules/post-header-picture/post-header-picture.scss';

const PostHeaderPicture = (props: any): React.ReactElement => {
  return (
    <div className='parallax-container'>
      <div className='parallax'>
        <img src={props.image} alt=''/>
      </div>
    </div>
  );
};

export default PostHeaderPicture;
