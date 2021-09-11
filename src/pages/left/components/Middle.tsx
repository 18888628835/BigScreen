import Container from '@/components/container';
import React, { RefObject, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Middle = () => {
  const chartRef = useRef<any>(null);
  const createCharts = (data, chartDom) => {
    let banqian = [12, 58, 64, 64, 64, 25];
    let anzhi = [39, 78, 64, 100, 24, 35];
    let xData = ['白鹤滩', '托巴', '乌东德', '溪洛渡', '向家坝', '小湾'];
    let barWidth = 14;

    const option = {
      backgroundColor: '#010d3a',
      //提示框
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          let str = `${'搬迁安置协议签订率'}:${
            params[0].value
          }<br/>${'生产安置协议签订率'}:${params[params.length - 1].value}`;
          return str;
        },
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow',
        },
      },
      /**区域位置*/
      grid: {
        left: '10%',
        right: '0%',
        top: '10%',
        bottom: '10%',
      },
      //X轴
      xAxis: {
        data: xData,
        type: 'category',
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,1)',
            shadowColor: 'rgba(255,255,255,1)',
            shadowOffsetX: '20',
          },
          symbol: ['none', 'arrow'],
          symbolOffset: [0, 25],
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          margin: 5,
          fontSize: 10,
        },
      },
      yAxis: {
        show: true,
        splitNumber: 4,
        axisLine: {
          show: true,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#075858',
          },
        },
        axisLabel: {
          color: '#FFFFFF',
          margin: 5,
          fontSize: 10,
          formatter: '{value}%',
        },
      },
      series: [
        {
          name: '男',
          type: 'bar',
          barWidth: barWidth,
          data: banqian,
          barGap: 0,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: '#2D52D7', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#59A6DC', // 100% 处的颜色
                  },
                ],
                false
              ),
            },
          },
        },
        {
          z: 2,
          type: 'bar',
          barGap: 0,
          barWidth: barWidth / 3,
          data: banqian.map(item => item + 4),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 1,
                    color: '#4EA4E0', // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: '#2445B8', // 100% 处的颜色
                  },
                ],
                false
              ),
            },
          },
        },
        {
          z: 3,
          data: banqian,
          type: 'pictorialBar',
          symbolPosition: 'end',
          symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
          symbolSize: [barWidth * 1.3, '7'],
          symbolOffset: ['-10', '-6'],
          itemStyle: {
            borderWidth: 1,
            borderColor: 'rgba(60, 111, 218, 1)',
            color: 'rgba(78, 156, 211, 1)',
          },
        },
        // ---------------------分割线---------------------
        {
          name: '女',
          type: 'bar',
          barWidth: barWidth,
          data: anzhi,
          barGap: 0,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 1,
                    color: '#0DF5D6', // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: '#019ABB', // 100% 处的颜色
                  },
                ],
                false
              ),
            },
          },
        },
        {
          z: 2,
          name: '女',
          type: 'bar',
          barGap: 0,
          barWidth: barWidth / 3,
          data: anzhi.map(item => item + 4),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 1,
                    color: '#0DF5D6', // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: '#019ABB', // 100% 处的颜色
                  },
                ],
                false
              ),
            },
          },
        },
        {
          z: 3,
          data: anzhi,
          type: 'pictorialBar',
          symbolPosition: 'end',
          symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
          symbolSize: [barWidth * 1.3, '7'],
          symbolOffset: ['9', '-6'],
          itemStyle: {
            borderWidth: 1,
            borderColor: '029FBD',
            color: '#0DEED4',
          },
        },
      ],
    };

    const myChart = echarts.init(chartDom);

    myChart.setOption(option);
    window.addEventListener('resize', () => {
      myChart?.resize();
    });
    return myChart;
  };
  useEffect(() => {
    createCharts([], chartRef.current);
  }, []);

  return (
    <Container
      text='建设进度'
      right={
        <ul>
          <li className='active'>协议签订率</li>
          <li>安置完成率</li>
        </ul>
      }
    >
      <div className='middle_content' ref={chartRef}></div>
    </Container>
  );
};

export default Middle;
