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
      '大理白族自治州',
      '文山壮族苗族自治州',
      '楚雄彝族自治州',
      '红河哈尼族彝族自治州',
      '迪庆藏族自治区',
    ];
    var getValue = [98, 90, 88, 77, 66, 55, 44, 33];
    const option = {
      backgroundColor: 'rgba(0, 21, 54, 0.9)',
      grid: {
        left: '38%',
        right: '5%',
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
      },
      yAxis: [
        {
          type: 'category',
          inverse: true,
          offset: 50,
          position: 'left',
          axisLabel: {
            show: true,
            margin: 120,
            align: 'left',
            textStyle: {
              color: '#66cc00',
              rich: {
                num: {
                  color: '#fff',
                  width: 15,
                  height: 15,
                  fontSize: 12,
                  align: 'center',
                  borderRadius: 100,
                },
                num1: {
                  color: '#fff',
                  backgroundColor: '#EE9A3A',
                  width: 15,
                  height: 15,
                  fontSize: 12,
                  align: 'center',
                  borderRadius: 100,
                },
                num2: {
                  color: '#fff',
                  backgroundColor: '#9696A2',
                  width: 15,
                  height: 15,
                  fontSize: 12,
                  align: 'center',
                  borderRadius: 100,
                },
                num3: {
                  color: '#fff',
                  backgroundColor: '#C5816C',
                  width: 15,
                  height: 15,
                  fontSize: 12,
                  align: 'center',
                  borderRadius: 100,
                },
                title: {
                  color: 'white',
                  padding: 10,
                },
              },
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
                str = '{num|' + num + '} {title|' + value + '}';
              }
              return str;
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
            color: 'hsla(192, 100%, 62%, 1)',
            fontSize: 12,
            distance: 10, // 字与条形图bar 的距离
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
      <div className='legend'>
        <span>排名</span>
        <span>州市</span>
        <span>绩效评价</span>
      </div>
      <div className='right_bottom_content' ref={chart}></div>
    </Container>
  );
};

export default RBottom;
