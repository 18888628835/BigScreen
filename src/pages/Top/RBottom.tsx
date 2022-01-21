/*
 * @Author: your name
 * @Date: 2021-09-27 09:27:43
 * @LastEditTime: 2021-09-27 16:33:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \njghz\ynym-view\src\pages\bigScreen\province\Top\RBottom.tsx
 */
import Container from '../components/container';
import * as echarts from 'echarts';
import React, { useRef, useEffect, useState } from 'react';
import RBottomRender from './RBottomRender';
type RBottomProps = {
  data: MapDataTypes.LateSupportEvaluationVO[];
};
const RBottom = React.memo<RBottomProps>((props) => {
  const { data } = props;
  const [fundType, setFundType] = useState(1);
  const [isTurnPage, setIsTurnPage] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [dataSourceTurnPage, setDataSourceTurnPage] = useState([]);
  const filterData = (data || []).find((item) => item.fundType === fundType);

  useEffect(() => {
    if (data) {
      let source = (filterData?.lateSupportEvaluation || []).map((item, index) => {
        return { ...item, index };
      });
      let dataSource = source.filter((item, index) => index < 8);
      let dataSourceTurnPage = source.filter((item, index) => index > 7);

      setDataSource(dataSource);
      setDataSourceTurnPage(dataSourceTurnPage);
    }
  }, [data, fundType]);
  useEffect(() => {
    let interval = setInterval(() => {
      setIsTurnPage((prevCount) => {
        return !prevCount;
      });
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Container
      text="后期扶持绩效评价"
      right={
        <ul>
          {['中央基金', '省级基金'].map((item, index) => (
            <li
              key={item}
              className={fundType === index + 1 ? 'active' : ''}
              onClick={() => {
                setFundType((index += 1));
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      }
    >
      <div className="legend">
        <span>排名</span>
        <span>州市</span>
        <span>绩效评价</span>
      </div>
      {isTurnPage ? (
        <RBottomRender fundType={fundType} data={dataSource} />
      ) : (
        <RBottomRender fundType={fundType} data={dataSourceTurnPage} />
      )}
    </Container>
  );
});

export default RBottom;
