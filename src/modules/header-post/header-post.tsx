import React from 'react';
import 'src/modules/header-post/header-post.scss';
import {
  DateParser,
  HourParser
} from 'src/modules/utils/date-parser';

const HeaderPost = (props: any): React.ReactElement => {
  const date = DateParser(props.date);
  const time = HourParser(props.date);
  const first_name = props.first_name;
  const last_name = props.last_name;

  return (
    <div className='container row PostAuthor '>
      <div className='col m1 hide-on-small-only'></div>
      <div className='col s12 m10'>
        <div className='row'>
          <div className='PostAuthor__category col s12'>{props.category}</div>
          <div className='PostAuthor__title col s12'>{props.title}</div>
        </div>
        <div className='PostAuthor__info row'>
          <div className='col s2 m1'>
            <img src={props.profile_picture} alt='' />
          </div>
          <div className='PostAuthor__author-name col s10 m11 l10'>{`${first_name} ${last_name}`}</div>
          <div className='PostAuthor__date col s9 m10'>{`${date} - ${time}`}</div>
        </div>
      </div>
      <div className='col m1 hide-on-small-only'></div>
    </div>
  );
};

export default HeaderPost;
