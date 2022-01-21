import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Container from '../components/container';
type RTopProps = {
  data: MapDataTypes.LateSupport;
};
const RTop = React.memo<RTopProps>((props) => {
  const { data } = props;
  const chart1 = useRef(null);
  const chart2 = useRef(null);
  const chart3 = useRef(null);

  const createCharts = (chartDom, point, color1, color2) => {
    const option1 = {
      title: [
        {
          text: point + '%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontSize: '20',
            color: '#FFFFFF',
            fontFamily: 'DINAlternate-Bold, DINAlternate',
            fontWeight: '500',
          },
        },
      ],
      backgroundColor: 'rgba(0, 21, 54, 0.9)',
      polar: {
        radius: ['55%', '70%'],
        center: ['50%', '50%'],
      },
      angleAxis: {
        max: 100,
        show: false,
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          name: '',
          type: 'bar',
          roundCap: true,
          barWidth: 20,
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(64, 205, 241, 0.15)',
          },
          data: [point],
          coordinateSystem: 'polar',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: color1,
                },
                {
                  offset: 0.8282,
                  color: color2,
                },
              ]),
            },
          },
        },
      ],
    };
    const myChart = echarts.init(chartDom);
    myChart.setOption(option1);
    window.addEventListener('resize', () => {
      myChart?.resize();
    });
    return myChart;
  };

  useEffect(() => {
    if (props.data) {
      createCharts(chart1.current, data.directFundGiveRate, '#2CD4FF', '#00A7DD');
      createCharts(chart2.current, data.projectFundFinishRate, '#10FAC3', '#00BBB5');
      createCharts(chart3.current, data.projectStartRate, '#2CD4FF', '#00A7DD');
    }
  }, [props.data]);
  return (
    <Container text="后期扶持">
      <div className="right_top_content">
        <div className="content_top">
          <div>
            <span>后期扶持人口</span>
            <div>
              <span>{data?.lateSupportPopulation}</span>万人
            </div>
          </div>
          <div>
            <span>后期扶持项目</span>
            <div>
              <span>{data?.lateSupportProject}</span>个
            </div>
          </div>
          <div>
            <span>年度安排资金</span>
            <div>
              <span>{data?.yearArrangeFund}</span>亿元
            </div>
          </div>
        </div>
        <div className="content_line"></div>
        <div className="content_bottom">
          <div className="circle">
            <span>直补资金发放率</span>
            <div className="chart1" ref={chart1}></div>
          </div>
          <div className="circle">
            <span>项目资金完成率</span>
            <div className="chart2" ref={chart2}></div>
          </div>
          <div className="circle">
            <span>项目开工率</span>
            <div className="chart3" ref={chart3}></div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default RTop;
