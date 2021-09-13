import React from 'react';
import { Wrap, Main } from '@/pages/css';
import BMiddle from './Bottom/BMiddle';
import BLeft from './Bottom/BLeft';
import LTop from './Top/LTop';
import LBottom from './Top/LBottom';
import BRight from './Bottom/BRight';

const Layout = () => {
  return (
    <Wrap>
      <header>
        <span>云南省大中型水利水电工程搬迁安置数字管理平台</span>
      </header>
      <Main>
        <section className='top'>
          <div className='left'>
            <div className='l_top'>
              <LTop />
            </div>
            <div className='l_bottom'>
              <LBottom />
            </div>
          </div>
          <div className='middle'></div>
          <div className='right'></div>
        </section>
        <section className='bottom'>
          <div className='b_left'>
            <BLeft />
          </div>
          <div className='b_middle'>
            <BMiddle />
          </div>
          <div className='b_right'>
            <BRight />
          </div>
        </section>
      </Main>
    </Wrap>
  );
};

export default Layout;
