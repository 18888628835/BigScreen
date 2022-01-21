/*
 * @Author: 邱彦兮
 * @Date: 2021-12-18 17:35:49
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-01-21 10:17:47
 * @FilePath: /BigScreen/src/pages/DashboardScale/index.tsx
 */
import React, { useEffect, useState } from 'react';
import Section from './style';
import { DashboardScaleProps } from './types';

function debounce(handler: any, delay: number) {
  let timer: undefined | NodeJS.Timeout;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    const _self = this;
    timer = setTimeout(() => {
      handler.call(_self);
      clearTimeout(timer as NodeJS.Timeout);
      timer = undefined;
    }, delay);
  };
}
const DashboardScale: React.FC<DashboardScaleProps> = props => {
  const { width = 1920, parentId, height = 1080, delay = 300 } = props;
  const [scale, setScale] = useState(1);

  useEffect(() => {
    window.onresize = debounce(() => {
      const containerNode =
        (parentId && document.querySelector(parentId)) ||
        document.documentElement;
      const w = containerNode.clientWidth / width;
      const h = containerNode.clientHeight / height;
      setScale(w < h ? w : h);
    }, delay);
  }, []);
  return (
    <Section scale={scale}>
      <div style={{ width: '100%', height: '100%' }}>{props.children}</div>
    </Section>
  );
};
DashboardScale.defaultProps = {
  width: 1920,
  height: 1080,
  delay: 300,
};
export default DashboardScale;
