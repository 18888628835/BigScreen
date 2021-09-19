import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import jQuery from 'jquery';
import Item from 'antd/lib/list/Item';
window.$ = jQuery;

export const Middle = () => {
  const createMap = id => {
    const myChart = echarts.init(document.getElementById(id)!);
    const mapData = [
      {
        name: '古水水电站1',
        value: [190, 215],
      },
      {
        name: '红色水电站8',
        value: [366, 260],
      },
      {
        name: '红色水电站9',
        value: [436, 270],
      },
      {
        name: '红色水电站10',
        value: [470, 500],
      },
      {
        name: '红色水电站11',
        value: [520, 310],
      },
    ];

    //$.get()里写你的SVG 文件路径
    $.get('/map.svg', function (svg) {
      //首先向 echarts 注册 SVG 字符串或解析过的 SVG DOM
      echarts.registerMap('map', { svg: svg });
      var option = {
        tooltip: {
          show: true,
          formatter: '{b}',
          backgroundColor: 'rgba(7, 26, 55, 0.8)',
          borderColor: '#3DD7FF',
          borderWidth: 1,
          padding: [3, 5, 3, 5],
          textStyle: {
            color: 'white',
          },
        },
        layoutSize: '100%', //布局尺寸
        layoutCenter: ['50%', '50%'], //布局位置
        //开启地理坐标系组件。地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
        geo: {
          geoIndex: 0,
          map: 'map', //这里写注册过的map 名字
          tooltip: {
            show: false,
          },
          //标注配置
          label: {
            show: false,
            color: 'rgba(61, 215, 255, 0.55)',
          },
          //高亮时效果配置
          emphasis: {
            focus: 'none', //高亮时聚焦自己
            itemStyle: {
              areaColor: '#2080D7',
              borderColor: '#2B91B7', //地图区域的颜色。
              borderWidth: 2,
              opacity: 1,
              shadowColor: 'rgba(74, 188, 251, 0.4)',
              shadowBlur: 3,
              shadowOffsetX: 3,
              shadowOffsetY: 3,
            },
            label: {
              show: false, //文字不要出现
            },
          },
          //统一样式配置
          itemStyle: {
            areaColor: '#1C3079',
            borderColor: '#2ab8ff',
          },
          //单独定制的区块设置
          regions: [
            {
              name: '昭通市',
              itemStyle: {
                areaColor: 'rgba(44, 76, 187, 1)',
              },
            },
            {
              name: '玉溪市',
              itemStyle: {
                areaColor: 'rgba(44, 76, 187, 1)',
              },
            },
            {
              name: '怒江傈傈族自治州',
              itemStyle: {
                areaColor: 'rgba(44, 76, 187, 1)',
              },
            },
            {
              name: '迪庆藏族自治区',
              itemStyle: {
                areaColor: 'rgba(44, 76, 187, 1)',
              },
            },
            {
              name: '楚雄彝族自治州',
              itemStyle: {
                areaColor: 'rgba(16, 34, 84, 1)',
              },
            },
            {
              name: '红河哈尼族彝族自治州',
              itemStyle: {
                areaColor: 'rgba(16, 34, 84, 1)',
              },
            },
            {
              name: '丽江市',
              itemStyle: {
                areaColor: 'rgba(16, 34, 84, 1)',
              },
            },
          ],
        },
        series: [
          {
            //带有涟漪特效动画的散点（气泡）图
            type: 'effectScatter',
            coordinateSystem: 'geo', //该系列使用的坐标系
            tooltip: {
              show: false,
            },
            //涟漪特效相关配置。
            rippleEffect: {
              brushType: 'stroke', //波纹的绘制方式 一笔一笔
              scale: 4,
            },
            showEffectOn: 'render', //绘制完成后显示特效 'emphasis' 高亮（hover）的时候显示特效
            symbol: 'circle', //涟漪特效的标记图形
            symbolSize: [8, 5], //图形尺寸 宽 高
            zlevel: 1, //优先级
            //图形样式
            itemStyle: {
              color: 'yellow',
            },
            //系列中的数据内容数组。数组项通常为具体的数据项。
            data: mapData.map(item => item.value),
          },
          {
            //系列类型 散点（气泡）图。
            type: 'scatter',
            coordinateSystem: 'geo',
            tooltip: {
              show: true,
            },
            symbol: 'pin',
            emphasis: {
              scale: true,
            },
            symbolSize: [30, 33],
            symbolOffset: [0, -5],
            zlevel: 20,
            itemStyle: {
              color: 'red',
            },
            data: mapData,
          },
        ],
      };
      myChart.setOption(option);
    });
    // //获取 svg 底图的坐标
    myChart.getZr().on('click', function (params) {
      var pixelPoint = [params.offsetX, params.offsetY];
      var dataPoint = myChart.convertFromPixel({ geoIndex: 0 }, pixelPoint);
      // 在 SVG 上点击时，坐标会被打印。
      // 这些坐标可以在 `series.data` 里使用。
      console.log(dataPoint);
    });
    myChart.on('click', 'series.scatter', function (params: any) {
      console.log(params);
    });

    window.addEventListener('resize', () => {
      myChart?.resize();
    });

    return myChart;
  };
  useEffect(() => {
    createMap('map');
  }, []);
  return <div id='map'></div>;
};
