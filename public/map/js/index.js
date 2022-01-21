$(document).ready(function () {

    initAndLoad();
});
function progress() {
    $('#progress').removeClass('running').delay(10).queue(function (next) {
        $('#progress').addClass('running');
        next();
    });
    setTimeout("progress()", 3500);
}
var ajaxUrl = "http://city.rdpxa.com:8081/systemcenter/servlet/Action.cmd";
var workLoaddata = [], workLoaddataN = [];
var workTimeList = []; var humanEntities = [];
function range(startID, endID) {
    var array = [];
    for (var i = startID; i < endID + 1; i++) {
        array.push(i);
    }
    return array;
}
function initAndLoad() {

    progress();
    getWorkload();
    $("#location").click(function () {
        viewer.scene.camera.setView({
            destination: new Cesium.Cartesian3(-2165868.9869220466, 4453855.91604439, 4022446.0583596644),
            orientation: {
                heading: 5.925348571914093,
                pitch: -0.6753207694751793,
                roll: 0
            }
        });
    });
    $("#delete").click(function () {
        clean();
    });
    $(".ButtonClose").click(function () {
        clean();
    });
    $("#JDZL").click(function () {
        $.ajax({
            url: " http://map.rdpxa.com:8082/ArcGIS/rest/services/RD/RDAZQHost/FeatureServer/0/query?objectIds=&where=1%3D1&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=%E5%B1%9E%E6%80%A75%2COBJECTID&returnGeometry=false&outSR=&returnIdsOnly=false&f=pjson",
            type: 'get',
            cache: true,
            async: false,//设置是否异步
            dataType: "jsonp",//跨域必须这么设置
            success: function (response) {
                var arr_0 = [], arr_1 = []; //var arr_2 = [];

                for (var i = 0; i < response.features.length; i++) {
                    var id = response.features[i + ""].attributes["OBJECTID"];
                    var flag = response.features[i+""].attributes["属性5"]*1;
                    switch (flag) {
                        case 0:
                            arr_0.push(id);
                            break;
                        //case 1:
                        //    arr_1.push(id);
                        //    break;
                        //case 1:
                        //    arr_2.push(id);
                            //    break;
                        default:
                            arr_1.push(id);
                    }
                }
                var scene = viewer.scene;
                var p = scene.addS3MTilesLayerByScp("http://10.215.161.75:8090/iserver/services/3D-rongcheng_wm2/rest/realspace/datas/Buffer@rongcheng/config", { name: '_process' });

      
                Cesium.when(p, function (plylayer) {
                    //plylayer.removeAllObjectsOperation();
                    //plylayer.style3D.fillForeColor.alpha = 0.7;
                    //plylayer.setObjsColor(arr_0, new Cesium.Color.fromCssColorString("rgba(255,0,0)"));
                    //plylayer.setObjsColor(arr_1, new Cesium.Color.fromCssColorString("rgba(0,255,0)"));
                    ////plylayer.setObjsColor(arr_2, new Cesium.Color.fromCssColorString("rgba(0,0,255)"));

                    scene.lightSource.ambientLightColor = new Cesium.Color(0.4, 0.4, 0.4, 0.4);
                    //开启颜色校正
                    viewer.scene.colorCorrection.show = true;
                    viewer.scene.colorCorrection.saturation = 1;
                    viewer.scene.colorCorrection.brightness = 0.4;
                    viewer.scene.colorCorrection.contrast = 1;
                    viewer.scene.colorCorrection.hue = 0;
                    //开启泛光和HDR
                    viewer.scene.bloomEffect.show = true;
                    viewer.scene.hdrEnabled = true;
                    var layer = scene.layers.find("_process");
                    var hyp = new Cesium.HypsometricSetting();
                    setHypsometric(layer);
                    //设置自发光纹理
                    function setHypsometric(layer) {
                        hyp.emissionTextureUrl = "images/speedline.jpg";
                        hyp.emissionTexCoordUSpeed = 0.25;
                        layer.hypsometricSetting = {
                            hypsometricSetting: hyp,
                        }

                    };
                });
            },
            error: function (result) {
                showLoading(false);
            }
        });

    });
    $("#FWTJ").click(function () {

    });
    $("#RYDW").click(function () {

        var SFilter = "";
        if (humanEntities.length != 0) {
            humanEntities = [];
            viewer.entities.removeAll();
        }
        $.ajax({
            url: ajaxUrl,
            data: signMD5({//转换编码
                _method: "FIX_DAILY_MAKESHIFT_TRACK.selectUserLastLocation",
                userName: SFilter,
                timeStamp: new Date().getTime() + ""//避免使用缓存中数据
            }),
            cache: true,//避免自动加上时间戳参数，_=?
            dataType: "jsonp",
            success: function (result) {
                var item = result.datas;
                if (item.length == 0) {
                    return;
                }
                var heatmapData = [];
                for (var i = 0; i < item.length; i++) {
                    var human = item[i]

                    const ent = new Cesium.Entity({
                        id: '_human' + human.USER_NAME,//多个点添加是 id不能唯一
                        point: new Cesium.PointGraphics({
                            color: new Cesium.Color(1.0, 0.0, 1.0, 0.3),
                            pixelSize: 10,
                            outlineColor: new Cesium.Color(0, 1, 1)
                        }),
                        label: {
                            text: human.USER_FULLNAME,
                            outlineColor: Cesium.Color.BLACK,
                            font: '17px sans-serif',
                            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                            outlineWidth: 2,
                            backgroundColor: new Cesium.Color(0, 1, 1),
                            backgroundPadding: new Cesium.Cartesian2(7, 5),
                            horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
                            pixelOffset: new Cesium.Cartesian2(-50, -30),
                            eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -20))
                        },
                        billboard:
                          {
                              image: human.pic || '../Images/your_location.png',
                              width: 30,
                              height: 25,
                              eyeOffset: new Cesium.ConstantProperty(new Cesium.Cartesian3(0, 0, -20))
                          },
                        position: Cesium.Cartesian3.fromDegrees(Number(human.CORLNG), Number(human.CORLAT), 20)
                    });
                    try {
                        viewer.entities.add(ent);
                        humanEntities.push(ent);

                        if (humanEntities.length == 1)
                            viewer.flyTo(ent);
                    } catch (e) {
                        // viewer.flyTo(ent);
                    }
                }
            },
            error: function (result) {
                alert("获取用户信息失败");
            }
        });
    });
    $("#GZSC").click(function () {
        $("#title_div").html("调查工作时长");
        $("#info_div").hide();
        $("#GZL_div").show();
        $(".bordered-bottom").html("");

        $('.container').show();
        getWorkProgress();
    });
    $("#GZL").click(function () {
        $("#title_div").html("调查工作量");
        $("#info_div").hide();
        $("#GZL_div").show();
        $(".bordered-bottom").html("");
        $('.container').show();
        //getWorkload();
        var presentDate = getNowFormatDate();
        $.ajax({
            url: ajaxUrl, //url是接口地址
            type: 'post',
            data: signMD5({
                _method: "SYS_ALLSEARCH.selectWorkProgressOfGroups",
                // startDate: presentDate,
                // endDate:presentDate
            }),//传入的参数
            cache: true,
            async: false,//设置是否异步
            dataType: "jsonp",//跨域必须这么设置
            success: function (response) {
              
                var groupid;
                var govname;
                for (var i = 0; i < response.datas.length; i++) {
                    var datalist;
                    groupid = response.datas[i].XZBH;
                    if (groupid != "") {
                        govname = getGovName1(groupid);
                    }
                }
                var str = "<tr s><td style='width: 72px;text-align:center;color:#00a9f8;' >编号</td><td style='width: 144px;text-align:center;color:#00a9f8;' >调查组</td><td style='width: 288px;text-align:center;color:#00a9f8;'>行政区划</td><td style='width: 200px;text-align:center;color:#00a9f8;'>完成户数/人口/面积</td><td style='width: 288px;text-align:center;color:#00a9f8;'>驻村工作组</td></tr>";
                for (var i = 0; i < workLoaddata.length; i++) {
                    var groupId = workLoaddata[i].groupId;
                    var work = workLoaddata[i].allHS + "/" + workLoaddata[i].allRK + "/" + workLoaddata[i].allTDMJ;
                    var xzqh = workLoaddata[i].xzqh;
                    var name = workLoaddataN[i].name;
                    var id = i + 1;
                    str += '<tr style="color:#ffffff;"><td style="width: 72px;text-align:center">' + id + '</td><td style="width: 72px;text-align:center">' + groupId + '</td><td style="width: 288px;text-align:center">' + xzqh + '</td><td style="width: 200px;text-align:center">' + work + '</td><td style="width: 288px;text-align:center">' + name + '</td></tr>'
                }
                $(".bordered-bottom").html(str + "</tbody>");
                $('.container').hide();
            },
            error: function (result) {
                showLoading(false);
            }
        });
    });
}

function clean() {
    $("#GZL_div").hide();
    $("#info_div").hide();
    if (humanEntities.length != 0) {
        humanEntities = [];
        viewer.entities.removeAll();
    }
    var scene = viewer.scene,
    layers = scene.layers;
    layers.remove('_process');
}
var index = 0;
function getGovName(index) {
    if (workLoaddata.length == 0) {
        openWorkLoad();
    } else {
        var groupid = workLoaddata[index].groupId;
        var govname = "";
        $.ajax({
            url: ajaxUrl, //url是接口地址
            type: 'post',
            data: signMD5({
                _method: "SYS_ALLSEARCH.selectUsersInGroup",
                xzbh: groupid //response.XZBH
                // startDate:'2018-03-03',	
                // endDate:'2018-05-07'
            }),//传入的参数
            cache: true,
            async: false,//设置是否异步
            dataType: "jsonp",//跨域必须这么设置
            success: function (response) {
                // console.log(response);
                try {
                    for (var i = 0; i < response.datas.length; i++) {
                        if (response.datas[i].ROLENAME == "驻村工作组") {
                            govname += response.datas[i].USERNAME + " ";
                        } else {
                        }
                    }
                    var myWorkLoad = {
                        name: govname,//驻村工作组
                    }
                    workLoaddataN.push(myWorkLoad);
                    if (index < workLoaddata.length - 1) {
                        index++;
                        getGovName(index);
                    }
                } catch (e) {
                    alert(response.datas);//groupid
                }



            },
            error: function (result) {
                console.log(result);
            }
        });
    }
}

function getWorkload() {
    // var presentDate = getNowFormatDate();
    $.ajax({
        url: ajaxUrl, //url是接口地址
        type: 'post',
        data: signMD5({
            _method: "SYS_ALLSEARCH.selectWorkProgressOfGroups",
            // startDate: presentDate,
            // endDate:presentDate
        }),//传入的参数
        cache: true,
        async: false,//设置是否异步
        dataType: "jsonp",//跨域必须这么设置
        success: function (response) {
            for (var i = 0; i < response.datas.length; i++) {
                var tempordata = response.datas[i]
                // groupid =response.datas[i].XZBH;
                // if(groupid !=""){
                //     // govname = getGovName(groupid);
                // }
                var myWorkLoad = {
                    groupId: tempordata.XZBH,//调查组编号
                    allHS: parseInt(tempordata.HZSL),//完成户数
                    allRK: parseInt(tempordata.RKSL),//完成人口
                    allTDMJ: parseFloat(tempordata.TDMJ),//完成面积
                    xzqh: tempordata.XZQHMC//行政区号
                    // govname:govname //驻村工作组
                }
                workLoaddata.push(myWorkLoad);
            }
            //getGovName(0);
            getGovName(index);

        },
        error: function (result) {
            showLoading(false);
        }
    });
}
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    // var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    // var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    //         + " " + date.getHours() + seperator2 + date.getMinutes()
    //         + seperator2 + date.getSeconds();
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
function getGovName1(groupId) {
    $.ajax({
        url: ajaxUrl, //url是接口地址
        type: 'post',
        data: signMD5({
            _method: "SYS_ALLSEARCH.selectUsersInGroup",
            xzbh: groupId //response.XZBH
            // startDate:'2018-03-03',	
            // endDate:'2018-05-07'
        }),//传入的参数
        cache: true,
        async: false,//设置是否异步
        dataType: "jsonp",//跨域必须这么设置
        success: function (response) {
            var name;
            for (var i = 0; i < response.datas.length; i++) {
                if (response.datas[i].ROLENAME == "驻村工作组") {
                    name += response.datas[i].ROLENAME
                } else {

                }
            }
            return name
        }
    });
}
function getWorkProgress() {
    var presentDate = getNowFormatDate();
    $.ajax({
        url: ajaxUrl, //url是接口地址
        type: 'post',
        data: signMD5({
            _method: "SYS_ALLSEARCH.selectWorkProgressOfUsers",
            userName: '',
            startDate: presentDate,
            endDate: presentDate
        }),//传入的参数
        cache: true,
        async: false,//设置是否异步
        dataType: "jsonp",//跨域必须这么设置
        success: function (response) {
            console.log(response);
            /////记录总工作量
            for (var i = 0 ; i < response.datas.length ; i++) {
                if (response.datas[i].USERNAME == "") {
                    continue;
                }
                var JCSJ = response.datas[i].RCSJ, CCSJ = response.datas[i].CCSJ;
                if (JCSJ != "") {
                    var strList = JCSJ.split(' ');
                    if (strList.length == 2) {
                        var strList1 = strList[1].split(':');
                        if (strList1.length == 3) {
                            JCSJ = strList1[0] + ":" + strList1[1];
                        }
                    }
                }
                else {
                    JCSJ = "--";
                }

                if (CCSJ != "") {
                    var strList = CCSJ.split(' ');
                    if (strList.length == 2) {
                        var strList1 = strList[1].split(':');
                        if (strList1.length == 3) {
                            CCSJ = strList1[0] + ":" + strList1[1];
                        }
                    }
                }
                else {
                    CCSJ = "--";
                }
                var myWorkTime = {
                    userId: response.datas[i].USERID,//人员编号
                    userName: response.datas[i].USERNAME,//人员姓名
                    hours: parseFloat(response.datas[i].HOURS).toFixed(2),//工作时常
                    length: parseFloat(response.datas[i].LC).toFixed(2),//里程数
                    JCSJ: JCSJ,//入场时间 
                    CCSJ: CCSJ//出场时间
                }
                workTimeList.push(myWorkTime);
            }
            var str = "<tr s><td style='width: 72px;text-align:center;color:#00a9f8;' >编号</td><td style='width: 144px;text-align:center;color:#00a9f8;' >人员姓名</td><td style='width: 288px;text-align:center;color:#00a9f8;'>工作时长/H</td><td style='width: 144px;text-align:center;color:#00a9f8;'>里程/KM</td><td style='width: 288px;text-align:center;color:#00a9f8;'>进场时间</td><td style='width: 288px;text-align:center;color:#00a9f8;'>出场时间</td></tr>";
            for (var i = 0; i < workTimeList.length; i++) {
                var name = workTimeList[i].userName;
                var hours = workTimeList[i].hours;
                var JCSJ = workTimeList[i].JCSJ;
                var CCSJ = workTimeList[i].CCSJ;
                var length = workTimeList[i].length;
                var id = i + 1;
                str += '<tr style="color:#ffffff;"><td style="width: 72px;text-align:center">' + id + '</td><td style="width: 72px;text-align:center">' + name + '</td><td style="width: 144px;text-align:center">' + hours + '</td><td style="width: 288px;text-align:center">' + length + '</td><td style="width: 288px;text-align:center">' + JCSJ + '</td><td style="width: 288px;text-align:center">' + CCSJ + '</td></tr>'
            }
            $(".bordered-bottom").html(str + "</tbody>");
            $('.container').hide();
        },
        error: function (result) {
            showLoading(false);
        }
    });

}

