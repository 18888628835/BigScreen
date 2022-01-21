var viewer;
var dataServiceUrl = 'http://10.215.161.75:8090/iserver/services/data-rongcheng_scene2/rest/data/featureResults.rjson?returnContent=true'; // 数据服务URL
var dataSourceName = 'data'; // 数据源名称
var dataSetName = 'ply_new'; // 数据集名称ply_new
//var ajaxUrl = "http://city.rdpxa.com:8081/systemcenter/servlet/Action.cmd";

function onload(Cesium) {//u53jzkrc
    viewer = new Cesium.Viewer('cesiumContainer');
    var scene = viewer.scene;
    var camera = scene.camera;

    var maxx,minx ,maxy ,miny ;
    // 加载倾斜摄影图层
    var promise = scene.open("http://10.215.161.75:8090/iserver/services/3D-rongcheng_scene2/rest/realspace");
    Cesium.when(promise, function (layers) {
        var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        handler.setInputAction(function (e) {
            // 首先移除之前添加标识实体
            viewer.entities.removeById('identify-area');
            // 获取点击位置笛卡尔坐标
            var position = scene.pickPosition(e.position);
            // 从笛卡尔坐标获取经纬度
            var cartographic = Cesium.Cartographic.fromCartesian(position);
            var longitude = Cesium.Math.toDegrees(cartographic.longitude);
            var latitude = Cesium.Math.toDegrees(cartographic.latitude);

            var queryPoint = { // 查询点对象
                x: longitude,
                y: latitude
            };
            queryByPoint(queryPoint);
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        viewer.imageryLayers.addImageryProvider(new Cesium.TiandituImageryProvider({
            credit: new Cesium.Credit('天地图全球影像服务     数据来源：国家地理信息公共服务平台 & 四川省测绘地理信息局'),
            token: "4a00a1dc5387b8ed8adba3374bd87e5e"
        }));
        var imageryLayers = viewer.imageryLayers;
        //初始化天地图全球中文注记服务，并添加至影像图层
        var labelImagery = new Cesium.TiandituImageryProvider({
            mapStyle: Cesium.TiandituMapsStyle.CIA_C, //天地图全球中文注记服务（经纬度投影）
            token: "4a00a1dc5387b8ed8adba3374bd87e5e"
        });
        $(".cesium-credit-expand-link").hide();
      
        maxx = 116.392984511306,
        minx = 115.569986740833,
        maxy = 39.1810147241678,
        miny = 38.7132478103602;
      
        pathInfoWindow = {
            status: false,
            humanSet: [],
            data: [],
            title: '',
            humanId: ''
        }
        var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        //左键单击事件
        handler.setInputAction(function (e) {
            // 若点击的是实体，则不查询房屋
            var ent = scene.pick(e.position);
            if (ent) {
                //if(ent.id.id.startsWith('_human')){
                //    vm.pathInfoWindow.title='用户信息';
                //    vm.pathInfoWindow.status=true;
                //    console.log(ent.id.id);
                //    const h=findHumanByEntity(ent.id.id);
                //    vm.pathInfoWindow.data=[['姓名','USER_FULLNAME'],['电话','MOBILE']].map(item=>({
                //        'title': item[0], 'value': h[item[1]]
                //    }));
                //    vm.pathInfoWindow.humanId=h['USER_NAME'];
                //}
                //vm.$emit('showInfowindow', ent);
                //return;
            }


            // 首先移除之前添加标识实体
            viewer.entities.removeById('identify-area');
            // 获取点击位置笛卡尔坐标
            var position = scene.pickPosition(e.position);

            // 从笛卡尔坐标获取经纬度
            var cartographic = Cesium.Cartographic.fromCartesian(position);
            var longitude = Cesium.Math.toDegrees(cartographic.longitude);
            var latitude = Cesium.Math.toDegrees(cartographic.latitude);

            console.log(longitude + ',' + latitude);

            var queryPoint = { // 查询点对象
                x: longitude,
                y: latitude
            };
            queryByPoint(queryPoint);
            //queryByPoint(queryPoint).then(re => {
            //    if (re.featureCount > 0) {
            //        vm.featureClicked = re.features[0];
            //        featureRender.highLight(vm.featureClicked);
            //        QueryHouse(_getFeatureValueByKey(vm.featureClicked, 'FWBH'), function (re) {
            //            vm.infoWindow = true;
            //            vm.houseInfo = [['姓名', 'HZXM'], ['身份证', 'SFZHM'], ['联系电话', 'MOBILENUM'], ['编号', 'GDBH'], ['地址', 'XZQH']].map(item => (
            //              {'title': item[0], 'value': re[item[1]]}
            //            ));
            //            LoadImgUrl(re.FWTP, (url) => {
            //                vm.houseImageUrl = url;
            //            });
            //        });
            //    }
            //});


        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        handler.setInputAction(function (e) {

            var cartographic = Cesium.Cartographic.fromCartesian(scene.camera.position);
            x = Cesium.Math.toDegrees(cartographic.longitude);
            y = Cesium.Math.toDegrees(cartographic.latitude);
            var ang = camera.angle;
            var heading = Math.round( scene.camera.heading*180/Math.PI);
            var myx = 320 - (320 * (maxx - x) / (maxx - minx));
            var myy = (180 * (maxy - y) / (maxy - miny));
            myx = myx - 35;
            myy = myy - 20;
            $('.biao').css('left', myx + 'px');
            $('.biao').css('top', myy + 'px');
            $('.biao').css('transform', 'rotate(' + heading + 'deg)')
        }, Cesium.ScreenSpaceEventType.LEFT_UP);
        handler.setInputAction(function (e) {
            var cartographic = Cesium.Cartographic.fromCartesian(scene.camera.position);
            x = Cesium.Math.toDegrees(cartographic.longitude);
            y = Cesium.Math.toDegrees(cartographic.latitude);
            var ang = camera.angle;
            var heading = Math.round(scene.camera.heading * 180 / Math.PI);
            var myx = 320 - (320 * (maxx - x) / (maxx - minx));
            var myy = (180 * (maxy - y) / (maxy - miny));
            myx = myx - 35;
            myy = myy - 20;
            $('.biao').css('left', myx + 'px');
            $('.biao').css('top', myy + 'px');
            $('.biao').css('transform', 'rotate(' + heading + 'deg)')
        }, Cesium.ScreenSpaceEventType.WHEEL);
    });
}

// 通过点击查询用于表示单体化的面要素，添加到场景中高亮显示。
function queryByPoint(queryPoint) {
    var queryObj = {
        "getFeatureMode": "SPATIAL",
        "spatialQueryMode": "INTERSECT",
        "datasetNames": [dataSourceName + ":" + dataSetName],
        "geometry": {
            id: 0,
            parts: [1],
            points: [queryPoint],
            type: "POINT"
        }
    };

    queryObjJSON = JSON.stringify(queryObj); // 转化为JSON字符串作为查询参数

    $.ajax({
        type: "post",
        url: dataServiceUrl,
        data: queryObjJSON,
        success: function (result) {
            var resultObj = JSON.parse(result);
            console.log(resultObj);
            if (resultObj.featureCount > 0) {
                addClapFeature(resultObj.features[0]);

                // alert(_getFeatureValueByKey(resultObj.features[0], 'FWBH'));
                // var currentBlockOBJECTID = _getFeatureValueByKey(resultObj.features[0], 'FWBH');
                var HZXM = _getFeatureValueByKey(resultObj.features[0], 'HZXM');//户主姓名
                var FWBH = _getFeatureValueByKey(resultObj.features[0], 'FWBH');//房屋编号
                var JZMJ = _getFeatureValueByKey(resultObj.features[0], 'JZMJ');//建筑面积
                var FLOOR = _getFeatureValueByKey(resultObj.features[0], 'FLOOR');//建筑楼层
                var HEIGHT = _getFeatureValueByKey(resultObj.features[0], 'HEIGHT');//建筑高度
                var ID = _getFeatureValueByKey(resultObj.features[0], 'ID');//建筑高度
                $("#GZL_div").hide();
                $("#info_div").show();
                $(".HZXM").html(HZXM);
                $(".JZMJ").html(JZMJ);
                $(".FWBH").html(FWBH);
                $(".FLOOR").html(FLOOR);
                $.ajax({
                    url: ajaxUrl,
                    data: signMD5({//转换编码
                        _method: "BP_FWYJ.getYJAllinfoByFilter", // 方法名
                        TXBHS: FWBH  //地块编号参数
                        // PROJECTID:PROJECTID
                    }),
                    cache: true,//避免自动加上时间戳参数，_=?
                    dataType: "jsonp",
                    success: function (result) {
                        getDBFX(result.datas)  
                    },
                    error: function (result) {
                        console.log(result);
                    }
                });
                $.ajax({
                    url: "http://map.rdpxa.com:8082/ArcGIS/rest/services/RD/RDAZQHost/FeatureServer/0/query?objectIds="+resultObj.features[0].ID+"&where=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=%E5%B1%9E%E6%80%A75%2COBJECTID&returnGeometry=false&outSR=&returnIdsOnly=false&f=pjson",
                    cache: true,//避免自动加上时间戳参数，_=?
                    dataType: "jsonp",
                    success: function (result) {
                        var flag = result.features["0"].attributes["属性5"] * 1;
                        switch (flag) {
                            case 0:
                                $("#moreInfo").hide();
                                $(".box").show
                                $("#info_div").height(225);
                                break;
                            default:
                                $.ajax({
                                    url: ajaxUrl,
                                    data: signMD5({//转换编码
                                        _method: "BP_FWYJ.getYJAllinfoByFilter", // 方法名
                                        TXBHS: FWBH  //地块编号参数
                                        // PROJECTID:PROJECTID
                                    }),
                                    cache: true,//避免自动加上时间戳参数，_=?
                                    dataType: "jsonp",
                                    success: function (result) {
                                        DBFXinfo = result.datas;
                                        BJLANDIDS: ""
                                        SCZHS: "2"
                                        SCZMJ: "121.22"
                                        TCZMJ: "120.2"
                                        YJLANDIDS: ""
                                        ZWCL: "0.85"
                                        // FWYJ_filterxx(DKBH);
                                    },
                                    error: function (result) {
                                        console.log(result);
                                    }
                                });
                                var filter = "ID IN( select distinct relateid from yj_v_fwtd_bl_info where  ','||txbh||',' like '%," + FWBH + ",%')";
                                $.ajax({
                                    url: ajaxUrl,
                                    data: signMD5({//转换编码
                                        _method: "component.getListData", // 方法名
                                        bizObj: "DC_M_HUZHU",//查询对象表名称
                                        service: "selectMore",//查多方法
                                        fields: "*", //查询字段
                                        filter: filter //过滤条件
                                    }),
                                    cache: true,//避免自动加上时间戳参数，_=?
                                    async: true,//设置是否异步
                                    dataType: "jsonp",
                                    success: function (response) {
                                        try {//遍历属性值
                                            Hostinfo = response.datas[0].HZXM + ",";//"姓名|" +
                                            Hostinfo += response.datas[0].SFZHM + ",";//"身份证|" +
                                            Hostinfo += response.datas[0].MOBILENUM + ",";//"联系电话|" +
                                            Hostinfo += response.datas[0].GDBH + ",";//"编号|" +
                                            Hostinfo += response.datas[0].XZQH + ",";//"地址|" +
                                            Hostinfo += response.datas[0].FMTP + ",";//图片编码
                                            //Hostinfo += response.datas[0].RKSL + ",";//人口
                                            //Hostinfo += response.datas[0].FWMJ + ",";//房屋面积
                                            //Hostinfo += response.datas[0].FSSSSL + ",";//附属设施
                                            //Hostinfo += response.datas[0].SMSL + ",";//树木数量
                                            Hostinfo += "" + ",";//人口
                                            Hostinfo += "" + ",";//房屋面积
                                            Hostinfo += "" + ",";//附属设施
                                            Hostinfo += "" + ",";//树木数量
                                            Hostinfo = Hostinfo.substring(0, Hostinfo.length - 1);
                                            //alert(Hostinfo);
                                            $("#moreInfo").show();
                                            $(".box").hide();
                                            $("#info_div").height(450);
                                            $("#QSR").html(response.datas[0].HZXM);
                                            $("#SFZH").html(response.datas[0].SFZHM);
                                            $("#SJH").html(response.datas[0].MOBILENUM);
                                            $("#DCBH").html(response.datas[0].GDBH);
                                            $("#JZDZ").html(response.datas[0].XZQH);
                              
                                             $.ajax({
                                                 url: ajaxUrl,
                                                 data: signMD5({//转换编码
                                                     FixJSON: '{"_method":"streamSupportService.getAttachmentInfos","_param":[{"fieldToken":"' + response.datas[0].FMTP + '"}]}',
                                                     timeStamp: new Date().getTime() + ""//避免使用缓存中数据
                                                 }),
                                                 cache: true,//避免自动加上时间戳参数，_=?
                                                 dataType: "jsonp",
                                                 async: true,
                                                 success: function (results) {
                                                     // console.log(results);
                                                     var attachments = results.attachments;
                                                     if (typeof (attachments.length) != "undefined" && attachments.length != null
                                                     && attachments.length > 0 && attachments[0].fileId != "") {
                                                         var qsridUrl1 = "http://city.rdpxa.com:8081" + "/systemcenter/servlet/StreamSupportAction.cmd?thumb=true&type=customerDownloadService&FixJSON={%27_method%27:%27streamSupportService.getAttachment%27,%27_param%27:{attachmentId:";
                                                         var qsridUrl2 = "}}";
                                                         $("#HZTX").show();
                                                         $("#HZTX").attr("src", qsridUrl1 + attachments[0].fileId + qsridUrl2);
                                                     }else{
                                                          alert("查询出错" + attachments)	
                                                     }
                                           
                                                 }
                                             });   

                                        } catch (e) {
                                            if (e.message == "无法获取未定义或 null 引用的属性“HZXM”") {
                                                alert("当前房屋无关联户主 ");
                                            }
                                        }
                                    }
                                });
                                break;
                        }
                    },
                    error: function (result) {
                        console.log(result);
                    }
                });
                var projectid = 141;
                $.ajax({
                    url: ajaxUrl,
                    data: signMD5({//转换编码
                        _method: "BP_FWYJ.getYJFBTInfoByFilter", // 方法名
                        // TXBHS:DKBH,  //地块编号参数
                        PROJECTID: projectid
                    }),
                    cache: true,//避免自动加上时间戳参数，_=?
                    dataType: "jsonp",
                    success: function (result) {
                        DBFXdata = result.datas;
                        var compare = function (obj1, obj2) {
                            var val1 = parseInt(obj1.WCL);
                            var val2 = parseInt(obj2.WCL);
                            if (val1 < val2) {
                                return -1;
                            } else if (val1 > val2) {
                                return 1;
                            } else {
                                return 0;
                            }
                        };
                        DBFXdata.sort(compare);
                    },
                    error: function (result) {
                        alert(result);
                    }
                });
            }
        },
        error: function (msg) {
            console.log(msg);
        }
    });
}
var DBFXdata = null;
function _getFeatureValueByKey(f, key) {
    if (!f || !f.fieldNames) return undefined;
    var keyIndex = f.fieldNames.findIndex(t => (t === key));
    if (keyIndex === -1) return undefined;
    return f.fieldValues[keyIndex];
}
// 将数据服务查询到的要素添加到场景中高亮显示，表示选中效果。
function addClapFeature(feature) {
    var lonLatArr = getLonLatArray(feature.geometry.points);
    viewer.entities.add({
        id: 'identify-area',
        name: '单体化标识面',
        polygon: {
            hierarchy: Cesium.Cartesian3.fromDegreesArray(lonLatArr),
            material: new Cesium.Color(1.0, 0.0, 0.0, 0.3),
        },
        clampToS3M: true // 贴在S3M模型表面
    });
}
// 得到[经度,纬度,经度,纬度...]形式的数组，用于构造面。
function getLonLatArray(points) {
    var point3D = [];
    points.forEach(function (point) {
        point3D.push(point.x);
        point3D.push(point.y);
    });
    return point3D;
}
function getDBFX(dbfxinfo) {


    if (dbfxinfo && dbfxinfo.length > 0) {
        var TCZMJ = (dbfxinfo[0])['TCZMJ'];
        var SCZMJ = (dbfxinfo[0])['SCZMJ'];
        var ZWCL = (dbfxinfo[0])['ZWCL'];
        $("#SCMJ").html(SCZMJ + " (m²)");
        $("#TCMJ").html(TCZMJ + " (m²)");
        $("#WCL").html(ZWCL + " %");
        echarts_load(ZWCL);
    }


}
function echarts_load(ZWCL) {

    var WCL = [];
    var ZS = [];
    for (var i = 0; i < DBFXdata.length; i++) {
        WCL.push(DBFXdata[i].WCL);
        if (ZWCL == Number(DBFXdata[i].WCL)) {
            ZS.push({ y: Number(DBFXdata[i].ZS), color: 'red', marker: { enabled: true } });
        } else {
            ZS.push(Number(DBFXdata[i].ZS));
        }
    }
    var chart = new Highcharts.Chart({
        tooltip: {
            formatter: function () {
                return '误差率： <b>' + this.x +
                    '%</b><br/>户数：<b>' + this.y + '户</b>';
            }
        },
        chart: {
            renderTo: 'container',
            backgroundColor: 'transparent'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: WCL,
            labels: {
                format: '{value}%'
            },
            title: {
                text: null
            }
        },
        yAxis: {
            yAxis: 1,
            data: [],
            labels: {
                format: '{value}户'
            },
            title: {
                text: null
            }
        },
        series: [{
            type: 'spline',
            data: []
        }],
        legend: {
            enabled: false
        }
    });
    chart.series[0].setData(ZS);
}

