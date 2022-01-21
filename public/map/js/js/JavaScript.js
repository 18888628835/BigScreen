﻿<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <title>Spatial Query</title>
    <link href="../Build/Cesium/Widgets/widgets.css" rel="stylesheet">
    <link href="./css/pretty.css" rel="stylesheet">
    <script src="./js/jquery.min.js"></script>
    <script src="./js/config.js"></script>
    <script src="./js/Convert.js"></script>
    <script src="./js/tooltip.js"></script>
    <script src="./js/supermap/SuperMap.Include.js"></script>
    <script type="text/javascript" src="./js/require.min.js" data-main="js/main"></script>
</head>
<body class="loading">
<div id="cesiumContainer"></div>
<div id='loadingbar' class="spinner">
    <div class="spinner-container container1">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
    </div>
    <div class="spinner-container container2">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
    </div>
    <div class="spinner-container container3">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
    </div>
</div>
<div id="toolbar" style="position: absolute;left: 5px;top: 5px;display: block;">
    <button type="button" id="search" class="button black">查询</button>
</div>

<script>
    function onload(Cesium) {
        var viewer = new Cesium.Viewer('cesiumContainer');
        viewer.imageryLayers.addImageryProvider(new Cesium.BingMapsImageryProvider({
    url : 'https://dev.virtualearth.net',
    mapStyle : Cesium.BingMapsStyle.AERIAL,
    key : URL_CONFIG.BING_MAP_KEY
}));
        var scene = viewer.scene;
        var widget = viewer.cesiumWidget;
        var IDs=[];
        $('#loadingbar').remove();
        try{
            var promise = scene.open(URL_CONFIG.SCENE_CBD);
            Cesium.when(promise,function(layer){
    //设置相机位置、视角，便于观察场景
                scene.camera.setView({
    destination : new Cesium.Cartesian3.fromDegrees(116.4566,39.9149,5323.445971240632),
    orientation : {
    heading : 3.1612,
    pitch : -1.5188,
    roll : 6.283185307179563
}
});
               var handlerPolygon = new Cesium.DrawHandler(viewer,Cesium.DrawMode.Polygon);
                var tooltip = createTooltip(document.body);
                $("#search").click(function(){
                    handlerPolygon.activate();
});
                handlerPolygon.activeEvt.addEventListener(function(isActive){
                    if(isActive == true){
                        viewer.enableCursorStyle = false;
                        viewer._element.style.cursor = '';
                        $('body').removeClass('drawCur').addClass('drawCur');
}
else{
                        viewer.enableCursorStyle = true;
                        $('body').removeClass('drawCur');
}
});
                handlerPolygon.movingEvt.addEventListener(function(windowPosition){
                    if(windowPosition.x < 210 && windowPosition.y < 120){
                        tooltip.setVisible(false);
                        return ;
}
                    if(handlerPolygon.isDrawing){
                        tooltip.showAt(windowPosition,'<p>点击确定查询区域中间点</p><p>右键单击结束绘制</p>');
}
else{
                        tooltip.showAt(windowPosition,'<p>点击绘制查询区域第一个点</p>');
}
});
                handlerPolygon.drawEvt.addEventListener(function(result){
                    tooltip.setVisible(false);
                    handlerPolygon.polygon.show = false;
                    handlerPolygon.polyline.show = false;
                    var geometry = CesiumToSuperMap.convertPolygon(Cesium,SuperMap,result.object);
                    query(geometry);
});                
},function(){
                var title = '加载SCP失败，请检查网络连接状态或者url地址是否正确？';
                widget.showErrorPanel(title, undefined, e);
});
}
        catch(e){
            if (widget._showRenderLoopErrors) {
                var title = '渲染时发生错误，已停止渲染。';
                widget.showErrorPanel(title, undefined, e);
}
}
        
        function processCompleted(queryEventArgs){
            var selectedFeatures = queryEventArgs.originResult.features;
            var color;
            IDs=[];
            viewer.entities.removeAll();
            for(var i = 0;i < selectedFeatures.length;i++ ){
                var value = selectedFeatures[i].fieldValues["0"];
                var feature = selectedFeatures[i];
                for(var j = 0; j < feature.fieldNames.length ; j++){
                    var index = j.toString();
                    if(j == 0){
                         var des = '<table class="cesium-infoBox-defaultTable"><tbody>' + '<tr><th>' + selectedFeatures[i].fieldNames["0"] + '</th><td>' + selectedFeatures[i].fieldValues["0"] + '</td></tr>';
}
else if( j == feature.fieldNames.length - 1){
                        des += '<tr><th>' + selectedFeatures[i].fieldNames[index] + '</th><td>' + selectedFeatures[i].fieldValues[index] + '</td></tr>' + "</tbody></table>";
}
else{
                        des += '<tr><th>' + selectedFeatures[i].fieldNames[index] + '</th><td>' + selectedFeatures[i].fieldValues[index] + '</td></tr>';
}
}
                viewer.entities.add({
    position : Cesium.Cartesian3.fromDegrees(parseFloat(selectedFeatures[i].fieldValues["12"]),parseFloat(selectedFeatures[i].fieldValues["13"]),parseFloat(selectedFeatures[i].fieldValues["16"])),
    billboard :{
    image : './images/location4.png',
    width:30,
    height:40,
                        
},
    name : selectedFeatures[i].fieldValues["11"],
    description: des
});
                IDs.push(parseInt(value)+11);
}
            var buildingLayer = scene.layers.find("Building@CBD");
            if(IDs.length>0){
                buildingLayer.setSelection(IDs);
}
}
        function query(drawGeometryArgs){
            var getFeaturesByGeometryParameters, getFeaturesByGeometryService;
            getFeaturesByGeometryParameters = new SuperMap.REST.GetFeaturesByGeometryParameters({
    datasetNames: ["二维数据:building"],
    toIndex:-1,
    spatialQueryMode:SuperMap.REST.SpatialQueryMode.CONTAIN,
    geometry: drawGeometryArgs
});
            var url = 'http://www.supermapol.com/realspace/services/data-cbd/rest/data';
            getFeaturesByGeometryService = new SuperMap.REST.GetFeaturesByGeometryService(url, {
    eventListeners: {
                    "processCompleted": processCompleted,
                    "processFailed": processFailed
}
});
            getFeaturesByGeometryService.processAsync(getFeaturesByGeometryParameters);
}
        function processFailed(e) {
            alert(e.error.errorMsg);
}
        

}
</script>
</body>
</html>
