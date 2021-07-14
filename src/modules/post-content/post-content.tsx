import React from 'react';
import 'src/modules/post-content/post-content.scss';

const PostContent = (props:any): React.ReactElement => {

  return (
    <div className='PostContent container row'>
      <div className='col m1 hide-on-small-only'></div>
      <div
        className='col s12 m10 white-text'
        dangerouslySetInnerHTML={{__html: props.description}}>
      </div>
      <div className='col m1 hide-on-small-only'></div>
    </div>
  );
};

export default PostContent;
