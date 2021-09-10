import React from 'react';
import Title from '../Title';
import Wrap from './css';

const Container: React.FC<Types.TitleProps> = props => {
  const { text, right } = props;
  return (
    <Wrap className='container'>
      <Title text={text} right={right} />
      <div className='content'>{props.children}</div>
    </Wrap>
  );
};

export default Container;
