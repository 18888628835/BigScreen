import Wrap from '@/css/css_left';
import React from 'react';
import Bottom from './components/Bottom';
import Middle from './components/Middle';
import Top from './components/Top';

const Left = () => {
  return (
    <Wrap>
      <Top />
      <Middle />
      <Bottom />
    </Wrap>
  );
};

export default Left;