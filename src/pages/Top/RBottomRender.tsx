import * as echarts from 'echarts';
import React, { useRef, useEffect, useState } from 'react';
type RBottomProps = {
  data: MapDataTypes.LateSupportEvaluationVO[],
  fundType:Number
};
const RBottom: React.FC<RBottomProps> = (props) => {
  const { data,fundType } = props;
  const chart = useRef(null);
  var attackSourcesColor = [
   '#FFAE11',
    '#05D6BA',
    '#05CEEA',
    '#006ACC'
  ];
  const attackSourcesDataFmt = (sData) => {
    var sss = [];
    sData.forEach(function (item, i) {
      let itemStyle = {
        color: item.index > 2 ? attackSourcesColor[3] : attackSourcesColor[i]
      };
      sss.push({
        value: item.value,
        itemStyle: itemStyle
      });
    });
    return sss;
  }
  const createCharts = (data, chartDom) => {
    if (!chartDom) {
      return;
    }
    echarts.dispose(chartDom);

    const option = {
      backgroundColor: 'rgba(0, 21, 54, 0.9)',
      grid: {
        left: -6,
        right: 0,
        bottom: -25,
        top: 0,
        containLabel: true,
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0, 62, 127, 0.9)',
        borderWidth: 0,
        textStyle: {
          color: 'white',
          align: 'left',
        },
        axisPointer: {
          type: 'none',
        },
        formatter: function (params) {
          return params.name + ' : ' + params.data.value;
        },
      },
      xAxis: {
        show: false,
        type: 'value',
        min: (value) => value.min - 30,
      },
      yAxis: [
        {
          type: 'category',
          inverse: true,
          axisLabel: {
            show: true,
            align: 'right',
            textStyle: {
              fontSize: 14,
              color: 'white',
              rich: {
                name: {
                  align: 'left',
                  width: 120,
                  padding:[4,0,0,20]
                },
                index: {
                  color: 'white',
                  fontWeight: 'bold',
                  width: 0,
                  height: 0,
                  borderRadius: 18,
                  align: 'left',
                  backgroundColor: 'transparent',
                  padding: [10, 13, 8, 5]
                },
                index1: {
                  color: 'white',
                  fontWeight: 'bold',
                  width: 0,
                  height: 0,
                  backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#F1C94E',
                    },
                    {
                      offset: 1,
                      color: '#EE9A3A',
                    },
                  ]),
                  borderRadius: 18,
                  align: 'left',
                  textAlign: 'center',
                  padding: [10, 13, 8, 5]
                },
                index2: {
                  color: 'white',
                  fontWeight: 'bold',
                  width: 0,
                  height: 0,
                  backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#D1CFD8',
                    },
                    {
                      offset: 1,
                      color: '#9696A2',
                    },
                  ]),
                  borderRadius: 18,
                  align: 'left',
                  textAlign: 'left',
                  padding: [10, 13, 8, 5]
                },
                index3: {
                  color: '#fff',
                  backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#E6A999',
                    },
                    {
                      offset: 1,
                      color: '#C5816C',
                    },
                  ]),
                 fontSize: 14,
                 align: 'left',
                  textAlign: 'left',
                  borderRadius: 18,
                 width: 0,
                 height: 0,
                padding:[10, 13, 8, 5]
                },
                
              },
            },
            formatter: (name) => {
              // var index = data?.map((item) => item.name).indexOf(name) + 1;
              var index = data?.find(item=>item.name==name)?.index+1
              
              return [
                '{' + (index > 3 ? 'index' : 'index' + index) + '|' + index + '}',
                '{name|' + name + '}',
              ].join('');
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
          data: data?.map((item) => item.name),
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
            distance: 5, // 字与条形图bar 的距离
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
          barWidth: 10,
          // data: data,
          data: attackSourcesDataFmt(data),
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
    if (data) {
      createCharts(data, chart.current);
    } 
  }, [data, fundType]);
 
  return (   
      <div   className="right_bottom_content" ref={chart}></div>
  );
};

export default RBottom;
