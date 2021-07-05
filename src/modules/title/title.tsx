import React from 'react';
import 'src/modules/title/title.scss';

const Title = (props: any): React.ReactElement => {
  return (
    <div className='Title row'>
      <em className='col m2 l1 hide-on-small-only Title__space'></em>
      <div
        className='col s12 m8 l10 Title__text'
        style={{color: `${props.color}`}}>{props.text}</div>
      <em className='col m2 l1 hide-on-small-only Title__space'></em>
    </div>
  );
};

export default Title;
