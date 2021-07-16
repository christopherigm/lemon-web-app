import React from 'react';
import 'src/modules/post-author-biography/post-author-biography.scss';

const PostAuthorBiography = (props:any): React.ReactElement => {
  const first_name = props.first_name;
  const last_name = props.last_name;
  return (
    <div className='PostBiography container row'>
      <br />
      <div className='col m1 hide-on-small-only'></div>
      <div className='PostBiography__info col s12 m10'>
        <div className='col s12 m3 l2 center'>
          <div className='PostBiography__image'>
          <img src={props.profile_picture} alt='' />
          </div>
          <br />
        </div>
        <div className='col s12 m9 l10'>
          <div className='PostBiography__author-name'>{`${first_name} ${last_name}`}</div>
          <div
            className='PostBiography__biography'
            dangerouslySetInnerHTML={{__html: props.biography}}>
          </div>
        </div>
      </div>
      <div className='col m1 hide-on-small-only'></div>
    </div>
  );
};

export default PostAuthorBiography;
