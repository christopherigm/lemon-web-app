import React from 'react';
import {
  DateParser,
  HourParser
} from 'src/modules/utils/date-parser';
import { Link } from 'react-router-dom';

const Date = (props: any): React.ReactElement => {
  const date = DateParser(props.date);
  const time = HourParser(props.date);

  return (
    <div>Date: {`${date} - ${time}`}</div>
  );
};

const PostItem = (props: any): React.ReactElement => {
  const slug_category = props.element.relationships.category.data.attributes.slug;
  const slug_post = props.element.attributes.slug;

  return (
    <Link
      to={`/${slug_category}/${slug_post}`}>
      <div className='black-text'>
        <div className='col s12 m6 l3'>
          <div className='card boxshadow'>
            <div className="card-image">
              <img src={props.element.attributes.img_picture} alt='' />
              <span className='card-title'>{props.element.attributes.title}</span>
            </div>
            <div className='card-content'>
              <div>Author: {props.element.relationships.author.data.attributes.first_name}</div>
              <Date date={props.element.attributes.created}/>
            </div>
            <div className='card-action green-text'>Ir a noticia</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
