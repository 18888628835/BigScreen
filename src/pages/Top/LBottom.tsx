import Container from '../components/container';
import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

type LBottomProps = {
  data: MapDataTypes.BuildProgress[];
};
const LBottom = React.memo<LBottomProps>((props) => {
  const chartRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const listData = (props.data || []).find((item) => item.type === activeIndex);
  const createCharts = (xdata, banqianData, shengchanData, chartDom) => {
    if (!chartDom) {
      return;
    }

    const option = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0, 62, 127, 0.9)',
        borderWidth: 0,
        textStyle: {
          color: 'white',
          align: 'left',
        },
        formatter: '{a0}: {c0}%<br />{a1}: {c1}%',
      },
      grid: {
        left: '0',
        right: '0',
        top: '20%',
        bottom: '0',
        containLabel: true,
      },
      legend: {
        data: ['搬迁安置', '生产安置'],
        left: 20,
        itemWidth: 10,
        itemHeight: 5,
        textStyle: {
          color: 'rgba(255, 255, 255, 0.75)',
        },
      },
      xAxis: [
        {
          type: 'category',
          data: xdata,
          axisLine: {
            show: true,
            lineStyle: {
              border: 1,
              color: 'rgba(255, 255, 255, 0.2)',
            },
          },
          axisLabel: {
            fontSize: 12,
            color: 'white',
          },
          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value}%',
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.2)',
            },
          },
          splitLine: {
            interval: '1',
            lineStyle: {
              type: 'dashed',
              color: 'rgba(255, 255, 255, 0.1)',
            },
          },
        },
      ],
      series: [
        {
          name: '搬迁安置',
          type: 'bar',
          data: banqianData,
          barWidth: 14,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#29D1FD',
              },
              {
                offset: 1,
                color: '#018AD7',
              },
            ]),
          },
        },
        {
          name: '生产安置',
          type: 'bar',
          data: shengchanData,
          barWidth: 14,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#FF2F89',
              },
              {
                offset: 1,
                color: '#F79F2D',
              },
            ]),
          },
        },
      ],
    };

    const myChart = echarts.init(chartDom);

    myChart.setOption(option);

    return myChart;
  };
  useEffect(() => {
    const myChart = createCharts(
      listData?.cityName,
      listData?.relocationAgreementRate,
      listData?.productionAgreementRate,
      chartRef.current,
    );
    const resize = () => {
      myChart?.resize();
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((oldState) => {
        return oldState === 2 ? 1 : (oldState += 1);
      });
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);
  return (
    <Container
      text="建设进度"
      right={
        <ul>
          {['协议签订率', '安置完成率'].map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setActiveIndex(index + 1);
              }}
              className={index === activeIndex - 1 ? 'active' : ''}
            >
              {item}
            </li>
          ))}
        </ul>
      }
    >
      <div className="middle_content" ref={chartRef}></div>
    </Container>
  );
});

export default LBottom;
