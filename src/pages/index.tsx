import React from 'react';
import { Wrap, Main } from '@/pages/css';
import Left from './left/Left';
import Middle from './middle/Middle';
import Right from './right/Right';

const Index = () => {
  return (
    <Wrap>
      <header>
        <span>云南省大中型水利水电工程搬迁安置数字管理平台</span>
      </header>
      <Main>
        <Left />
        <Middle />
        <Right />
      </Main>
    </Wrap>
  );
};

export default Index;
