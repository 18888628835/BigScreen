import React, { useEffect, useState, useRef } from 'react';
import { Descriptions, Carousel, Switch, Button } from 'antd';
import { RightOutlined, CloseOutlined, LeftOutlined } from '@ant-design/icons';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import classNames from 'classnames';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import 'public/map/jquery.js';
import { mapData, legendMap, regionCodeMap, regionData } from './data';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);
//注册map
const registerMap = function (path) {
  return new Promise((resolve, reject) => {
    $.get(path, function (resource) {
      echarts.registerMap(
        'yunnanProvince',
        path === regionMap['云南'] ? { svg: resource } : resource
      );
      resolve(resource);
    });
  });
};
const regionNames = [
  '楚雄彝族自治州',
  '迪庆藏族自治区',
  '怒江傈傈族自治州',
  '保山市',
  '临沧市',
  '德宏傣族景颇族自治州',
  '大理白族自治州',
  '红河哈尼族彝族自治州',
  '昆明市',
  '丽江市',
  '普洱市',
  '曲靖市',
  '文山壮族苗族自治州',
  '玉溪市',
  '西双版纳傣族自治州',
  '昭通市',
];
const regionMap = {
  云南: '/map/new-map.svg',
  楚雄彝族自治州: '/regionMap/cxs.json',
  迪庆藏族自治区: '/regionMap/dqzz.json',
  怒江傈傈族自治州: '/regionMap/njll.json',
  保山市: '/regionMap/bs.json',
  德宏傣族景颇族自治州: '/regionMap/dh.json',
  大理白族自治州: '/regionMap/dl.json',
  红河哈尼族彝族自治州: '/regionMap/hhhn.json',
  昆明市: '/regionMap/km.json',
  临沧市: '/regionMap/lc.json',
  丽江市: '/regionMap/lj.json',
  普洱市: '/regionMap/pe.json',
  曲靖市: '/regionMap/qj.json',
  文山壮族苗族自治州: '/regionMap/wszz.json',
  玉溪市: '/regionMap/yx.json',
  西双版纳傣族自治州: '/regionMap/xsbn.json',
  昭通市: '/regionMap/zt.json',
};
const AllData = {
  云南: mapData,
  楚雄彝族自治州: regionData.chuxiong,
  迪庆藏族自治区: regionData.diqingzhou,
  怒江傈傈族自治州: regionData.nujiang,
  保山市: regionData.baoshanshi,
  临沧市: regionData.lincangshi,
  德宏傣族景颇族自治州: regionData.dehongzhou,
  大理白族自治州: regionData.dalizhou,
  红河哈尼族彝族自治州: regionData.honghe,
  昆明市: regionData.kunming,
  丽江市: regionData.lijiangshi,
  普洱市: regionData.puer,
  曲靖市: regionData.qujing,
  文山壮族苗族自治州: regionData.wenshan,
  玉溪市: regionData.yuxi || [],
  西双版纳傣族自治州: regionData.xishuangbanna,
  昭通市: regionData.zhaotong,
};
/**
 *
 * @param {*} id 元素的id
 * @param {*} data 数据
 * @param {*} labelFlag 文字是否展示开关 云南省不用展示 市县州需要展示
 * @returns
 */
const mapInit = (id, data, labelFlag) => {
  const element = document.getElementById(id);
  if (element == null) {
    return;
  }
  //卸载曾经的echarts
  echarts.dispose(element);
  const myChart = echarts.init(element);

  var option = {
    //图例组件
    legend: {
      show: true,
      left: '5%',
      bottom: '5%',
      orient: 'vertical',
      itemWidth: 20,
      itemHeight: 23,
      inactiveColor: '#7C7C7C',
      textStyle: {
        color: '#3DD7FF',
        fontSize: 12,
        lineHeight: 17,
      },
      data: [
        { name: '拟建状态', icon: legendMap['拟建'] },
        { name: '在建状态', icon: legendMap['在建'] },
        { name: '已建状态', icon: legendMap['已建'] },
      ],
    },
    tooltip: {
      show: true,
      backgroundColor: 'rgba(7, 26, 55, 0.8)',
      borderColor: '#3DD7FF',
      borderWidth: 1,
      padding: [3, 5, 3, 5],
      textStyle: {
        color: 'white',
      },
    },
    // 地理坐标系组件,用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
    geo: [
      {
        show: true,
        map: 'yunnanProvince', //使用 registerMap 注册的地图名称。
        layoutSize: '100%', //布局尺寸
        layoutCenter: ['50%', '50%'], //布局位置
        //高亮状态下的多边形和标签样式。需要 svg源文件的path 加 name
        emphasis: {
          focus: 'none', //高亮时聚焦自己
          itemStyle: {
            areaColor: '#389BB7',
          },
          label: {
            show: labelFlag, //文字不要出现
            color: 'white',
          },
        },
        label: {
          show: labelFlag,
          color: 'white',
        },
        itemStyle: {
          areaColor: '#0D68AA',
          borderWidth: 1,
          borderColor: '#1DC9FF',
          opacity: 1,
        },
        //单独定制的区块设置
        regions: [
          {
            name: '昭通市',
            itemStyle: {
              areaColor: '#2888D9',
            },
          },
          {
            name: '大理白族自治州',
            itemStyle: {
              areaColor: '#217FC4',
            },
          },
          {
            name: '昆明市',
            itemStyle: {
              areaColor: '#0F6BC5',
            },
          },
          {
            name: '普洱市',
            itemStyle: {
              areaColor: '#0F6BC5',
            },
          },
          {
            name: '玉溪市',
            itemStyle: {
              areaColor: '#197AC2',
            },
          },
          {
            name: '怒江傈傈族自治州',
            itemStyle: {
              areaColor: '#0D6CAF',
            },
          },
          {
            name: '迪庆藏族自治区',
            itemStyle: {
              areaColor: '#1976B8',
            },
          },
          {
            name: '楚雄彝族自治州',
            itemStyle: {
              areaColor: '#014A80',
            },
          },
          {
            name: '红河哈尼族彝族自治州',
            itemStyle: {
              areaColor: '#025088',
            },
          },
          {
            name: '文山壮族苗族自治州',
            itemStyle: {
              areaColor: '#1A73B4',
            },
          },
          {
            name: '丽江市',
            itemStyle: {
              areaColor: '#0A6DAF',
            },
          },
        ],
        z: 9,
      },
    ],
    //动效系列配置
    series: [
      //涟漪效果相关配置
      {
        tooltip: {
          show: false, //本系列不要 tooltip
        },
        name: '已建状态',
        type: 'effectScatter',
        z: 99,
        coordinateSystem: 'geo', //该系列使用的坐标系
        showEffectOn: 'render', //绘制完成后显示特效 'emphasis' 高亮（hover）的时候显示特效
        effectType: 'ripple',
        rippleEffect: {
          brushType: 'stroke', //波纹的绘制方式 一笔一笔
          scale: 5,
          number: 2,
        },
        symbol: 'circle',
        symbolSize: [8, 3],
        itemStyle: {
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0,228,242,0.5)',
              },
              {
                offset: 0.8,
                color: 'rgba(0,228,242,0.8)',
              },
              {
                offset: 1,
                color: 'rgba(0,228,242,1)',
              },
            ],
          },
        },
        //系列中的数据内容数组。数组项通常为具体的数据项。
        data: data.filter(item => item.img === legendMap['已建']),
      },
      {
        tooltip: {
          show: false, //本系列不要 tooltip
        },
        name: '拟建状态',
        type: 'effectScatter',
        z: 99,
        coordinateSystem: 'geo', //该系列使用的坐标系
        showEffectOn: 'render', //绘制完成后显示特效 'emphasis' 高亮（hover）的时候显示特效
        effectType: 'ripple',
        rippleEffect: {
          brushType: 'stroke', //波纹的绘制方式 一笔一笔
          scale: 5,
          number: 2,
        },
        symbol: 'circle',
        symbolSize: [8, 3],
        itemStyle: {
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0,228,242,0.5)',
              },
              {
                offset: 0.8,
                color: 'rgba(0,228,242,0.8)',
              },
              {
                offset: 1,
                color: 'rgba(0,228,242,1)',
              },
            ],
          },
        },
        //系列中的数据内容数组。数组项通常为具体的数据项。
        data: data.filter(item => item.img === legendMap['拟建']),
      },
      {
        tooltip: {
          show: false, //本系列不要 tooltip
        },
        name: '在建状态',
        type: 'effectScatter',
        z: 99,
        coordinateSystem: 'geo', //该系列使用的坐标系
        showEffectOn: 'render', //绘制完成后显示特效 'emphasis' 高亮（hover）的时候显示特效
        effectType: 'ripple',
        rippleEffect: {
          brushType: 'stroke', //波纹的绘制方式 一笔一笔
          scale: 5,
          number: 2,
        },
        symbol: 'circle',
        symbolSize: [8, 3],
        itemStyle: {
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0,228,242,0.5)',
              },
              {
                offset: 0.8,
                color: 'rgba(0,228,242,0.8)',
              },
              {
                offset: 1,
                color: 'rgba(0,228,242,1)',
              },
            ],
          },
        },
        //系列中的数据内容数组。数组项通常为具体的数据项。
        data: data.filter(item => item.img === legendMap['在建']),
      },
      //系列类型 散点（气泡）图。
      {
        name: '已建状态',
        type: 'scatter',
        coordinateSystem: 'geo',
        // zlevel: 5,
        opacity: 1,
        tooltip: {
          show: true,
          position: point => [point[0] + 10, point[1] - 30],
          formatter: '{b}',
          backgroundColor: 'rgba(7, 26, 55, 0.8)',
          borderColor: '#3DD7FF',
          borderWidth: 1,
          padding: [3, 5, 3, 5],
          textStyle: {
            color: 'white',
          },
        },
        itemStyle: { color: 'black' },
        symbol: function (_, params) {
          return params.data.img;
        },
        emphasis: {
          scale: true,
        },
        symbolSize: [20, 23],
        symbolOffset: [0, -12],
        data: data.filter(item => item.img === legendMap['已建']),
        z: 999,
      },
      {
        //系列类型 散点（气泡）图。
        name: '拟建状态',
        type: 'scatter',
        coordinateSystem: 'geo',
        // zlevel: 5,
        opacity: 1,
        tooltip: {
          show: true,
          position: point => [point[0] + 10, point[1] - 30],
          formatter: '{b}',
          backgroundColor: 'rgba(7, 26, 55, 0.8)',
          borderColor: '#3DD7FF',
          borderWidth: 1,
          padding: [3, 5, 3, 5],
          textStyle: {
            color: 'white',
          },
        },
        itemStyle: { color: 'black' },
        symbol: function (_, params) {
          return params.data.img;
        },
        emphasis: {
          scale: true,
        },
        symbolSize: [20, 23],
        symbolOffset: [0, -12],
        data: data.filter(item => item.img === legendMap['拟建']),
        z: 999,
      },
      {
        //系列类型 散点（气泡）图。
        name: '在建状态',
        type: 'scatter',
        coordinateSystem: 'geo',
        // zlevel: 5,
        opacity: 1,
        tooltip: {
          show: true,
          position: point => [point[0] + 10, point[1] - 30],
          formatter: '{b}',
          backgroundColor: 'rgba(7, 26, 55, 0.8)',
          borderColor: '#3DD7FF',
          borderWidth: 1,
          padding: [3, 5, 3, 5],
          textStyle: {
            color: 'white',
          },
        },
        itemStyle: { color: 'black' },
        symbol: function (_, params) {
          return params.data.img;
        },
        emphasis: {
          scale: true,
        },
        symbolSize: [20, 23],
        symbolOffset: [0, -12],
        data: data.filter(item => item.img === legendMap['在建']),
        z: 999,
      },
      {
        //系列类型 散点（气泡）图。
        name: '已建状态',
        type: 'scatter',
        coordinateSystem: 'geo',
        // zlevel: 5,
        opacity: 1,
        tooltip: {
          show: true,
          position: point => [point[0] + 10, point[1] - 30],
          formatter: '{b}',
          backgroundColor: 'rgba(7, 26, 55, 0.8)',
          borderColor: '#3DD7FF',
          borderWidth: 1,
          padding: [3, 5, 3, 5],
          textStyle: {
            color: 'white',
          },
        },
        itemStyle: { color: 'black' },
        symbol: function (_, params) {
          return params.data.img;
        },
        emphasis: {
          scale: true,
        },
        symbolSize: [20, 23],
        symbolOffset: [0, -12],
        data: data.filter(item => item.img === legendMap['已建']),
        z: 999,
      },
      {
        //系列类型 散点（气泡）图。
        name: '拟建状态',
        type: 'scatter',
        coordinateSystem: 'geo',
        // zlevel: 5,
        opacity: 1,
        tooltip: {
          show: true,
          position: point => [point[0] + 10, point[1] - 30],
          formatter: '{b}',
          backgroundColor: 'rgba(7, 26, 55, 0.8)',
          borderColor: '#3DD7FF',
          borderWidth: 1,
          padding: [3, 5, 3, 5],
          textStyle: {
            color: 'white',
          },
        },
        itemStyle: { color: 'black' },
        symbol: function (_, params) {
          return params.data.img;
        },
        emphasis: {
          scale: true,
        },
        symbolSize: [20, 23],
        symbolOffset: [0, -12],
        data: data.filter(item => item.img === legendMap['拟建']),
        z: 999,
      },
      {
        //系列类型 散点（气泡）图。
        name: '在建状态',
        type: 'scatter',
        coordinateSystem: 'geo',
        // zlevel: 5,
        opacity: 1,
        tooltip: {
          show: true,
          position: point => [point[0] + 10, point[1] - 30],
          formatter: '{b}',
          backgroundColor: 'rgba(7, 26, 55, 0.8)',
          borderColor: '#3DD7FF',
          borderWidth: 1,
          padding: [3, 5, 3, 5],
          textStyle: {
            color: 'white',
          },
        },
        itemStyle: { color: 'black' },
        symbol: function (_, params) {
          return params.data.img;
        },
        emphasis: {
          scale: true,
        },
        symbolSize: [20, 23],
        symbolOffset: [0, -12],
        data: data.filter(item => item.img === legendMap['在建']),
        z: 999,
      },
    ],
  };
  myChart.setOption(option);

  return myChart;
};

export const Middle = React.memo(props => {
  const {
    activeIndex,
    iframeStatus,
    data,
    openIframe,
    regionCode,
    setRegionCode,
  } = props;
  const ref = useRef(null);
  const [modalStatus, setModalStatus] = useState(false);
  const [currentMapName, setCurrentMapName] = useState('云南');
  const [stationInfo, setStationInfo] = useState({});
  const classes = classNames('iframe_container', {
    fadeIn: !iframeStatus,
    fadeOut: iframeStatus,
  });
  const openModal = params => {
    //获取鼠标点击的位置
    const x = params.event.event.clientX;
    const y = params.event.event.clientY;
    //设置modal框的位置
    ref.current.style.left = x + 10 + 'px';
    ref.current.style.top = y + 10 + 'px';
    //过滤水电站的信息
    const stationInfo = props.data?.find(
      item => item.stationName === params.name
    );
    //设置水电站信息
    setStationInfo(stationInfo);
    //让弹框出现------这里由于闭包问题，不需要判断modalStatus是否为false，直接设置为true
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };
  useEffect(() => {
    if (data)
      (async function () {
        const renderData = {
          0: AllData[currentMapName],
          1: AllData[currentMapName].filter(item => item.type === '水电'),
          2: AllData[currentMapName].filter(item => item.type === '水利'),
        };

        //切换时，隐藏modal框
        closeModal();
        //注册地图
        await registerMap(regionMap[currentMapName]);
        //初始化地图
        const myChart = mapInit(
          'map',
          renderData[activeIndex],
          currentMapName === '云南' ? false : true
        );
        //给散点图添加绑定事件
        myChart.on('click', 'series.scatter', openModal); //这里的openModal里拿到的是旧的modalStatus
        myChart.on('click', e => {
          console.log(e);
          if (e.componentType === 'geo' && regionNames.includes(e.name)) {
            setCurrentMapName(e.name);
            setRegionCode(regionCodeMap[e.name]);
          }
        });
        //获取 svg 底图的坐标
        myChart.getZr().on('click', function (params) {
          var pixelPoint = [params.offsetX, params.offsetY];
          var dataPoint = myChart.convertFromPixel({ geoIndex: 0 }, pixelPoint);
          // 在 SVG 上点击时，坐标会被打印。
          // 这些坐标可以在 `series.data` 里使用。
          console.log(dataPoint);
        });
        const resize = () => {
          myChart?.resize();
        };
        window.addEventListener('resize', resize);
      })();
  }, [data, activeIndex, currentMapName]);

  useEffect(() => {
    closeModal();
  }, [iframeStatus]);
  return (
    <div className='map_container'>
      <div className='earth'></div>
      <div className='light'></div>
      <div className='map_wrap'>
        <div id='map' />
      </div>
      <div className={!modalStatus ? 'hidden info' : 'info'} ref={ref}>
        <div className='modal_container'>
          <div className='header'>
            <div>{stationInfo?.stationName}</div>
            {(stationInfo?.sandTable || stationInfo?.projectId) && (
              <div className='url_wrap'>
                <span>
                  <a
                    href={
                      stationInfo?.sandTable ||
                      `/unicommap/index_2D.html?projId=${stationInfo?.projectId}`
                    }
                    target='_blank'
                  >
                    进入项目 <RightOutlined />
                  </a>
                </span>
              </div>
            )}

            <div>
              <CloseOutlined onClick={closeModal} />
            </div>
          </div>
          <div className='content'>
            <Descriptions
              column={2}
              labelStyle={{ color: '#3DD7FF', fontSize: '14px' }}
              contentStyle={{ color: 'white', fontSize: '14px' }}
            >
              <Descriptions.Item
                label={stationInfo?.projectType === 2 ? '库容' : '总装机'}
              >
                {stationInfo?.totalInstalled}
                {stationInfo?.projectType === 2 ? ' 万立方' : ' MW'}
              </Descriptions.Item>
              <Descriptions.Item label='搬迁安置人口'>
                {stationInfo?.planRelocationPopulation || '--'} 人
              </Descriptions.Item>
              <Descriptions.Item label='移民投资'>
                {stationInfo?.migrantInvest || '--'} 亿元
              </Descriptions.Item>
              <Descriptions.Item label='生产安置人口'>
                {stationInfo?.productionPopulation || '--'} 人
              </Descriptions.Item>
            </Descriptions>
          </div>
          <div className='img_footer'>
            <div className='text'>相关照片</div>
            <div className='img_wrap'>
              {stationInfo?.isCarousel ? (
                <Carousel autoplay={true}>
                  {stationInfo?.imgUrl.split(';').map(item => (
                    <img src={item} />
                  ))}
                </Carousel>
              ) : (
                <img src={stationInfo?.imgUrl} />
              )}
            </div>
          </div>
        </div>
      </div>
      {currentMapName === '云南' || (
        <Button
          type='link'
          onClick={() => {
            setCurrentMapName('云南');
            setRegionCode('');
          }}
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            color: '#3dd7ff',
          }}
          icon={<LeftOutlined />}
        >
          返回
        </Button>
      )}
      <div className={classes}>
        <iframe
          className='iframe'
          src={`/unicommap/LT1208.html?xzqh=${regionCode}&tk=${
            localStorage.getItem('access_token') || ''
          }`}
        ></iframe>
      </div>
    </div>
  );
});
