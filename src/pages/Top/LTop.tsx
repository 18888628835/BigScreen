import React, { useState, useEffect } from 'react';
import Container from '../components/container';
import Vector1 from '@/assets/province/Vector1.png';
import Vector2 from '@/assets/province/Vector2.png';
import Vector3 from '@/assets/province/Vector3.png';

type LTopProps = {
  data: MapDataTypes.PlanPlacement[];
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
};

const LTop = React.memo<LTopProps>((props) => {
  const { data, setActiveIndex, activeIndex } = props;

  const listData = (data || []).find((item) => item.type === activeIndex);

  return (
    <Container
      text="规划安置"
      right={
        <ul>
          {['全部', '水电', '水利'].map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setActiveIndex(index);
              }}
              className={activeIndex === index ? 'active' : ''}
            >
              {item}
            </li>
          ))}
        </ul>
      }
    >
      <div className="top_content">
        {[
          {
            img: Vector1,
            text1: '工程项目',
            text2: '已建工程',
            text3: '拟建工程',
            text4: '在建工程',
            number2: listData?.hasBuild,
            number3: listData?.planBuild,
            number4: listData?.nowBuild,
            unit2: '座',
            unit3: '座',
            unit4: '座',
          },
          {
            img: Vector2,
            text1: '搬迁人口',
            text2: '规划搬迁安置',
            text3: '已搬迁安置',
            text4: '完成率 ',
            number2: listData?.planRelocationPopulation,
            number3: listData?.hasRelocationPopulation,
            number4: listData?.relocationCompletionRate,
            unit2: '万人',
            unit3: '万人',
            unit4: '%',
          },
          {
            img: Vector3,
            text1: '生产人口',
            text2: '规划生产安置',
            text3: '已生产安置',
            text4: '完成率',
            number2: listData?.plannedProductionPopulation,
            number3: listData?.hasProductionPopulation,
            number4: listData?.productionProductionRate,
            unit2: '万人',
            unit3: '万人',
            unit4: '%',
          },
        ].map(
          ({ img, text1, text2, text3, text4, number2, number3, number4, unit2, unit3, unit4 }) => (
            <div key={text1} className="content_item">
              <div className="corner corner1"></div>
              <div className="corner corner2"></div>
              <div className="icon_wrap">
                <div className="icon_wrap_top">
                  <img src={img} />
                </div>
                <span>{text1}</span>
              </div>
              <div className="line"></div>
              <div className="icon_wrap">
                <div className="icon_wrap_top1">
                  <span>{number2}</span>
                  {unit2}
                </div>
                <span>{text2}</span>
              </div>
              <div className="icon_wrap">
                <div className="icon_wrap_top1">
                  <span>{number3}</span>
                  {unit3}
                </div>
                <span>{text3}</span>
              </div>
              <div className="icon_wrap">
                <div className="icon_wrap_top1">
                  <span className="last">{number4}</span>
                  {unit4}
                </div>
                <span>{text4}</span>
              </div>
            </div>
          ),
        )}
      </div>
    </Container>
  );
});

export default LTop;
