//地图保存提交
function saveMap(mapConfig){
	var url = MAPURL + 'map/mapconfig';	
	var method = 'post';
	if(mapConfig.ID){
		method = 'put';
	}
	$.ajax({
		type: method,
		url: url,
		contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(mapConfig),
		success: function (d) {
			if(d.code == 1){
				VueObj.$message('保存成功！');
				VueObj.loadMapConfig(ProjID);
			} else {
				VueObj.$message('保存失败！');
			}
		}
    });
}
//根据项目ID加载地图配置
function loadMapConfig(projID){
	var url = MAPURL + 'map/mapconfigs?proid=' + projID;	
	jQuery.get(url, null,function(data){
        console.log(23)
		if(data.length > 0){
			if(VueObj){
				VueObj.mapConfig = data[0];
				loadRedlines(data[0].ID);
				loadBuildings(data[0].ID);
				loadVectors(data[0].ID);
			}
		}
	});
}
function loadMapConfigs(projID){
    console.log(233)
	var url = MAPURL + 'map/mapconfigs?proid=' + projID;	
	jQuery.get(url, null,function(data){
        console.log(1)
	});
}
//保存红线范围
function saveRedline(fileName, mapID, features){
	var url = MAPURL + 'map/redlines';	
	var data = [];
	for(var i = 0;i < features.length;i++){
		data.push({
			MCID: mapID,
			FileName: fileName,
			WKT: features[i].Geom
		});
	}
	var method = 'post';
	$.ajax({
		type: method,
		url: url,
		contentType: 'application/json',
		dataType: 'json',
		data: JSON.stringify(data),
		success: function (d) {
			if(d.code == 1){
				VueObj.$message('上传成功！');
			} else {
				VueObj.$message('上传失败！');
			}
		},
		fail: function(d){
			VueObj.buildingLoading = false;
		}
	});
}

//加载红线范围
function loadRedlines(mapID){ 
	var url = MAPURL + 'map/redlines?mapid=' + mapID;	
	jQuery.get(url, null,function(data){
		if(data.length > 0){
			if(VueObj){
				VueObj.redlines = data;		
				//绘制红线
				if(data.length > 0){
					showRedline(data[0].FileName,data);
					var files = [{
						name: data[0].FileName,
						size: 1000,
						status: 'success',
						uid: 0,
						url: ''
					}];
					VueObj.showRedlineList(files);
				}				
			}
		}
	});
}

//显示红线
function showRedline(fileName,features){												
	var lyr = L.featureGroup([]).addTo(map);
	for(var i = 0;i < features.length;i++){
		var WKT = features[i].Geom;
		if(!WKT){
			WKT = features[i].WKT;
		}
		var fea = omnivore.wkt.parse(WKT);
		fea.setStyle({
			color: 'red',
			opacity: 1,
			fillColor: 'red',
			fillOpacity: 0.1,
			weight: 2
		});
		lyr.addLayer(fea);	
	}
	var bounds = lyr.getBounds();
	map.fitBounds(bounds);							
	VueObj.fileFeatures[fileName] = lyr;
}

//保存房屋单体范围
function saveBuilding(fileName, mapID, features){
	var url = MAPURL + 'map/buildings';	
	var data = [];
	for(var i = 0;i < features.length;i++){
		data.push({
			MCID: mapID,
			BuildingType: features[i].STRUCTURE,
			LandArea: 0,
			BuildingArea: 0,
			BuildingPN: parseInt(features[i].FWCS),
			FileName: fileName,
			WKT: features[i].Geom
		});
	}
	var method = 'post';
	$.ajax({
		type: method,
		url: url,
		contentType: 'application/json',
		dataType: 'json',
		data: JSON.stringify(data),
		success: function (d) {
			if(d.code == 1){
				VueObj.$message('上传成功！');
			} else {
				VueObj.$message('上传失败！');
			}
			VueObj.buildingLoading = false;
		},
		fail: function(d){
			VueObj.buildingLoading = false;
		}
	});
}

//加载房屋单体数据
function loadBuildings(mapID){ 
	var url = MAPURL + 'map/buildings?mapid=' + mapID;	
	jQuery.get(url, null,function(data){
		if(data.length > 0){
			if(VueObj){
				//VueObj.buildings = data;	
				//绘制房屋单体
				if(data.length > 0){
					showBuilding(data[0].FileName,data);
					var files = [{
						name: data[0].FileName,
						size: 1000,
						status: 'success',
						uid: 0,
						url: ''
					}];
					console.log(files);
					VueObj.showBuildingList(files);
				}
			}
		}
	});
}

//显示房屋单体
function showBuilding(fileName,features){												
	var lyr = L.featureGroup([]).addTo(map);
	
	for(var i = 0;i < features.length;i++){
		var WKT = features[i].Geom;
		if(!WKT){
			WKT = features[i].WKT;
		}
		try{
			var fea = omnivore.wkt.parse(WKT);
			fea.setStyle({
					color: 'red',
					opacity: 1,
					fillColor: 'red',
					fillOpacity: 0,
					weight: 1
			});
			lyr.addLayer(fea);	
		}catch(e){}		
	}
	var bounds = lyr.getBounds();
	map.fitBounds(bounds);							
	VueObj.fileFeatures[fileName] = lyr;
}

//加载矢量数据
function loadVectors(mapID){  
	
}

//删除空间数据
function deleteMapData(mapID,dataType,fileName){
	var url = MAPURL + 'map/';
	url += dataType + '?mapid=' + mapID + '&filename=' + fileName;
	var data = [];
	var method = 'delete';
	$.ajax({
		type: method,
		url: url,
		contentType: 'application/json',
		dataType: 'json',
		data: JSON.stringify(data),
		success: function (d) {
			if(d.code == 1){
				VueObj.$message('删除成功！');
			} else {
				VueObj.$message('删除失败！');
			}
		},
		fail: function(d){
		}
	});
}