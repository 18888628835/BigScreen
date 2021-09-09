import React from 'react';
import Wrap from './css';

const Title: React.FC<Types.TitleProps> = props => {
  const { text, right } = props;
  return (
    <Wrap>
      <div className='title_wrap'>
        <div className='title'>{text}</div>
        <div className='title_right'>{right}</div>
      </div>
    </Wrap>
  );
};

export default Title;
