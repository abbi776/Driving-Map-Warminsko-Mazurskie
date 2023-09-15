var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ProvincialBoundary_1 = new ol.format.GeoJSON();
var features_ProvincialBoundary_1 = format_ProvincialBoundary_1.readFeatures(json_ProvincialBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvincialBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvincialBoundary_1.addFeatures(features_ProvincialBoundary_1);
var lyr_ProvincialBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvincialBoundary_1, 
                style: style_ProvincialBoundary_1,
                interactive: true,
                title: 'Provincial Boundary'
            });
var format_DrivingPriority_2 = new ol.format.GeoJSON();
var features_DrivingPriority_2 = format_DrivingPriority_2.readFeatures(json_DrivingPriority_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrivingPriority_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrivingPriority_2.addFeatures(features_DrivingPriority_2);
var lyr_DrivingPriority_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrivingPriority_2, 
                style: style_DrivingPriority_2,
                interactive: true,
    title: 'Driving Priority<br />\
    <img src="styles/legend/DrivingPriority_2_0.png" /> Do not drive for now, risk of double coverage with Google fleet<br />\
    <img src="styles/legend/DrivingPriority_2_1.png" /> FYI Hub driven in H1, potential low density<br />\
    <img src="styles/legend/DrivingPriority_2_2.png" /> FYI Hub not driven in H1<br />'
        });
var format_GoogleBoundingBoxes_3 = new ol.format.GeoJSON();
var features_GoogleBoundingBoxes_3 = format_GoogleBoundingBoxes_3.readFeatures(json_GoogleBoundingBoxes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GoogleBoundingBoxes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GoogleBoundingBoxes_3.addFeatures(features_GoogleBoundingBoxes_3);
var lyr_GoogleBoundingBoxes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GoogleBoundingBoxes_3, 
                style: style_GoogleBoundingBoxes_3,
                interactive: true,
                title: '<img src="styles/legend/GoogleBoundingBoxes_3.png" /> Google Bounding Boxes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ProvincialBoundary_1.setVisible(true);lyr_DrivingPriority_2.setVisible(true);lyr_GoogleBoundingBoxes_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ProvincialBoundary_1,lyr_DrivingPriority_2,lyr_GoogleBoundingBoxes_3];
lyr_ProvincialBoundary_1.set('fieldAliases', {'fid': 'fid', 'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', 'zones': 'zones', });
lyr_DrivingPriority_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', '123': '123', 'ID name': 'ID name', 'Hub Id': 'Hub Id', 'Priority': 'Priority', });
lyr_GoogleBoundingBoxes_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'label': 'label', });
lyr_ProvincialBoundary_1.set('fieldImages', {'fid': 'TextEdit', 'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', 'zones': 'TextEdit', });
lyr_DrivingPriority_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '123': 'TextEdit', 'ID name': 'TextEdit', 'Hub Id': 'TextEdit', 'Priority': 'TextEdit', });
lyr_GoogleBoundingBoxes_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'label': 'TextEdit', });
lyr_ProvincialBoundary_1.set('fieldLabels', {'fid': 'no label', 'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', 'zones': 'no label', });
lyr_DrivingPriority_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', '123': 'no label', 'ID name': 'no label', 'Hub Id': 'no label', 'Priority': 'no label', });
lyr_GoogleBoundingBoxes_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'layer': 'no label', 'label': 'no label', });
lyr_GoogleBoundingBoxes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});