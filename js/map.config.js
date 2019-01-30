const info = $('#tooltip');
info.tooltip({animation: false,trigger: 'manual'});
        
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({source: new ol.source.OSM()})
    ],
    view: new ol.View({
        projection: 'EPSG:4326',
        center: [-48.7936, -22.602235],
        zoom: 6
    })
});

map.on('click', function(evt) {
    
    url = layers["precipitacao"].getSource().getGetFeatureInfoUrl(evt.coordinate, map.getView().getResolution(), map.getView().getProjection(), {'INFO_FORMAT': 'application/json', 'FEATURE_COUNT': 50});
    pixel = map.getPixelFromCoordinate(evt.coordinate);

    $.ajax({url: 'controller/accumulate.php', data: {link: encodeURI(url)}, type: 'GET', crossDomain: true, success: function(result) {
        text = `<b>Produto de Precipitação Diária</b><br />Coordenadas: ${evt.coordinate[0].toFixed(4)}, ${evt.coordinate[1].toFixed(4)} <br />Acumulado: ${result}`;
        info.html(text).removeClass('display-none').css({ left: pixel[0] + 'px', top:  pixel[1] + 'px'}).show();
    }});

    
});