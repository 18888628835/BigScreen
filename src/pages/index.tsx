/*
 * @Author: 邱彦兮
 * @Date: 2021-11-10 11:40:31
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-01-21 10:02:22
 * @FilePath: /BigScreen/src/pages/index.tsx
 */
import React, { useEffect, useState } from 'react';
import { Wrap, Main } from './css';
import BMiddle from './Bottom/BMiddle';
import BLeft from './Bottom/BLeft';
import LTop from './Top/LTop';
import LBottom from './Top/LBottom';
import BRight from './Bottom/BRight';
import RTop from './Top/RTop';
import RBottom from './Top/RBottom';
import { Middle } from './Top/Middle';
import { Switch } from 'antd';
import mock from './mock';
const Layout = () => {
  const mapData: { data: MapDataTypes.RootObject } = {
    data: { data: {} },
  } as { data: MapDataTypes.RootObject };
  const [activeIndex, setActiveIndex] = useState(0);
  const [iframeStatus, setIframeStatus] = useState(true);
  const [regionCode, setRegionCode] = useState('');
  const onSwitchChange = checked => {
    setIframeStatus(checked);
    if (checked === false) {
      setRegionCode('');
    }
  };
  return (
    <Wrap>
      <header>
        <span>省情看板</span>
      </header>
      <Main>
        <section className='top'>
          <div className='left'>
            <div className='l_top'>
              {/* 规划安置 */}
              <LTop
                data={mock.planPlacement}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
            <div className='l_bottom'>
              <LBottom data={mock.buildProgress} />
            </div>
          </div>
          <div className='middle'>
            <div className='switch_wrap'>
              <Switch
                checked={iframeStatus}
                checkedChildren='虚拟地图'
                unCheckedChildren='卫星地图'
                onChange={onSwitchChange}
              />
            </div>
            <Middle
              data={mock.hydropowerStations}
              activeIndex={activeIndex}
              iframeStatus={iframeStatus}
              regionCode={regionCode}
              setRegionCode={code => {
                setRegionCode(code);
              }}
              openIframe={() => {
                setIframeStatus(false);
              }}
            />
          </div>

          <div className='right'>
            <div className='r_top'>
              <RTop data={mock.lateSupport} />
            </div>
            <div className='r_bottom'>
              <RBottom data={mock.lateSupportEvaluationVO} />
            </div>
          </div>
        </section>
        <section className='bottom'>
          <div className='b_left'>
            <BLeft data={mock.cityTargetAssess} />
          </div>
          <div className='b_middle'>
            <BMiddle data={mock.fundSupervise} />
          </div>
          <div className='b_right'>
            <BRight data={mock.relocationNews} />
          </div>
        </section>
      </Main>
    </Wrap>
  );
};

export default Layout;
