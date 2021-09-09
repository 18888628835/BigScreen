import React from 'react';
import { Tabs } from 'antd';
import Title from '@/components/Title';
const { TabPane } = Tabs;

const Top = () => {
  return (
    <div className='top'>
      <Title
        text='规划安置'
        right={
          <ul>
            <li className='active'>全部</li>
            <li>水电</li>
            <li>水利</li>
          </ul>
        }
      />
    </div>
  );
};

export default Top;
