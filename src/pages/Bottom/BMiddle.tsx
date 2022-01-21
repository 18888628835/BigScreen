/*
 * @Author: your name
 * @Date: 2021-09-27 09:27:43
 * @LastEditTime: 2021-09-27 09:49:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \njghz\ynym-view\src\pages\bigScreen\province\Bottom\BMiddle.tsx
 */
import Container from '../components/container';
import { ScrollBoard } from '@jiaminghi/data-view-react';
import React from 'react';

type BMiddleProps = {
  data: string[][];
};
const BMiddle = React.memo<BMiddleProps>((props) => {
  const config = {
    header: [
      '项目名称',
      '规划总投资(亿)',
      '累计完成资金(亿)',
      '年度计划资金(亿)',
      '年度拨付资金(亿)',
      '累计资金完成率',
      '年度资金完成率',
    ],
    headerBGC: 'transparent',
    align: ['left', 'center', 'center', 'center', 'center', 'center', 'center'],
    headerHeight: 20,
    evenRowBGC: 'rgba(10, 43, 77, 0.6)',
    oddRowBGC: '#001436',
    data: props.data,
    columnWidth: [100],
  };
  return (
    <Container text="资金监督">
      <div className="bottom_middle_content">
        <ScrollBoard config={config} />
      </div>
    </Container>
  );
});

export default BMiddle;
