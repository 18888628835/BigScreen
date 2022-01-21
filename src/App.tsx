/*
 * @Author: 邱彦兮
 * @Date: 2021-09-09 16:51:16
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-01-21 10:16:28
 * @FilePath: /BigScreen/src/App.tsx
 */
import React from 'react';
import DashboardScale from './pages/DashboardScale';
import Layout from './pages/index';
import img from 'public/map/map.png';
import styled from 'styled-components';
const Content = styled.div`
  display: flex;
  height: 100%;
  div {
    flex: 1;
    background-color: red;
    height: 100%;
  }
  .middle {
    flex: 2;
    background-color: black;
  }
`;
function App() {
  return (
    <div className='App'>
      <DashboardScale>
        <Layout />
      </DashboardScale>
    </div>
  );
}

export default App;
