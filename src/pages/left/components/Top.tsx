import React from 'react';
import Container from '@/components/container';
import Vector1 from '@/assets/Vector1.png';
import Vector2 from '@/assets/Vector2.png';
import Vector3 from '@/assets/Vector3.png';

const Top = () => {
  return (
    <Container
      text='规划安置'
      right={
        <ul>
          <li className='active'>全部</li>
          <li>水电</li>
          <li>水利</li>
        </ul>
      }
    >
      <div className='top_content'>
        {[
          {
            img: Vector1,
            text1: '工程项目',
            text2: '已建工程',
            text3: '拟建工程',
            text4: '在建工程',
            number2: '1000',
            number3: '200',
            number4: '800',
            unit2: '座',
            unit3: '座',
            unit4: '座',
          },
          {
            img: Vector2,
            text1: '搬迁人口',
            text2: '规划搬迁安置人口',
            text3: '已搬迁安置人口',
            text4: '搬迁安置完成率 ',
            number2: '4800',
            number3: '3500',
            number4: '77%',
            unit2: '人',
            unit3: '人',
            unit4: '',
          },
          {
            img: Vector3,
            text1: '生产人口',
            text2: '规划生产安置人口',
            text3: '已生产安置人口',
            text4: '生产安置完成率',
            number2: '6000',
            number3: '5000',
            number4: '83%',
            unit2: '人',
            unit3: '人',
            unit4: '座',
          },
        ].map(
          ({
            img,
            text1,
            text2,
            text3,
            text4,
            number2,
            number3,
            number4,
            unit2,
            unit3,
            unit4,
          }) => (
            <div key={text1} className='content_item'>
              <div className='icon_wrap'>
                <div className='top'>
                  <img src={img} />
                </div>
                <span>{text1}</span>
              </div>
              <div className='icon_wrap'>
                <div className='top'>
                  <span>{number2}</span>
                  <span>{unit2}</span>
                </div>
                <span>{text2}</span>
              </div>
              <div className='icon_wrap'>
                <div className='top'>
                  <span>{number3}</span>
                  <span>{unit3}</span>
                </div>
                <span>{text3}</span>
              </div>
              <div className='icon_wrap'>
                <div className='top'>
                  <span className='last'>{number4}</span>
                  <span>{unit4}</span>
                </div>
                <span>{text4}</span>
              </div>
            </div>
          )
        )}
      </div>
    </Container>
  );
};

export default Top;
