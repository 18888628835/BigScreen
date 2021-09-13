import Container from '@/components/container';
import * as echarts from 'echarts';
import React, { useRef, useEffect } from 'react';

const RBottom = () => {
  const chart = useRef(null);
  const createCharts = chartDom => {
    var getName = [
      '昆明市',
      '玉溪市',
      '曲靖市',
      '昆明市',
      '玉溪市',
      '曲靖市',
      '昆明市',
      '玉溪市',
    ];
    var getValue = [98, 90, 88, 77, 66, 55, 44, 33];
    const option = {
      backgroundColor: '#003366',
      grid: {
        left: '20%',
        right: '8%',
        bottom: '2%',
        top: '2%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
        },
        formatter: function (params) {
          return params[0].name + ' : ' + params[0].value;
        },
      },
      xAxis: {
        show: false,
        type: 'value',
      },
      yAxis: [
        {
          type: 'category',
          inverse: true,
          offset: 70,
          axisLabel: {
            show: true,
            align: 'left',
            textStyle: {
              color: '#66cc00',
            },
            formatter: function (value, index) {
              var num = '';
              var str = '';
              num = index + 1;
              if (index === 0) {
                str = '{num1|' + num + '} {title|' + value + '}';
              } else if (index === 1) {
                str = '{num2|' + num + '} {title|' + value + '}';
              } else if (index === 2) {
                str = '{num3|' + num + '} {title|' + value + '}';
              } else {
                str = ' ' + '{num|' + num + '} {title|' + value + '}';
              }
              return str;
            },
            rich: {
              num: {
                color: '#fff',
                width: 20,
                height: 20,
                fontSize: 12,
                align: 'center',
                borderRadius: 100,
              },
              num1: {
                color: '#fff',
                backgroundColor: '#EE9A3A',
                width: 20,
                height: 20,
                fontSize: 12,
                align: 'center',
                borderRadius: 100,
              },
              num2: {
                color: '#fff',
                backgroundColor: '#9696A2',
                width: 20,
                height: 20,
                fontSize: 12,
                align: 'center',
                borderRadius: 100,
              },
              num3: {
                color: '#fff',
                backgroundColor: '#C5816C',
                width: 20,
                height: 20,
                fontSize: 12,
                align: 'center',
                borderRadius: 100,
              },
              title: {
                color: 'white',
              },
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          data: getName,
        },
      ],
      series: [
        {
          name: '值',
          type: 'bar',
          zlevel: 1,
          label: {
            show: true,
            position: 'right', // 位置
            color: 'white',
            fontSize: 12,
            distance: 10, // 距离
            formatter: '{c}', // 这里是数据展示的时候显示的数据
          },
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: 'hsla(195, 100%, 43%, 1)',
                },
                {
                  offset: 1,
                  color: 'hsla(193, 100%, 59%, 1)',
                },
              ]),
            },
          },
          barWidth: 12,
          data: getValue,
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
    createCharts(chart.current);
  }, []);
  return (
    <Container text='后期扶持绩效评价'>
      <div className='right_bottom_content' ref={chart}></div>
    </Container>
  );
};

export default RBottom;
