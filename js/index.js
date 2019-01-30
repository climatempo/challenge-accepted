const layers = new Array;

$(".add-layer").click(function(){
    tool.layer.change($(this).val(), true);
});  

tool = {
    card: {
        generate: (data) => {
            $.getJSON(`controller/weather.php?locale=${data.val()}`, item => {
                $("#card-list").empty();
                
                for(w of item.weather) {
                    const { date, text, temperature, rain } = w;

                    card= `<div class="row mt-3">
                        <div class="card bg-light col-sm-12">
                            <div class="card-header">
                                <h5 class="card-title">${date}</h5>
                                <p>${text}</p>
                            </div>
                            <div class="card-body">
                                <div class="info-card">
                                    <div class="col-sm">
                                        <img src="img/icons/upload.png" />
                                        <label class="max">${temperature.max}°</label>
                                    </div>
                                    <div class="col-sm">
                                        <img src="img/icons/download.png" />
                                        <label class="min">${temperature.min}°</label>
                                    </div>
                                    <div class="col-sm">
                                        <img src="img/icons/raindrop.png" />
                                        <label>${rain.precipitation}mm</label>
                                    </div>
                                    <div class="col-sm">
                                        <img src="img/icons/umbrella.png" />
                                        <label>${rain.probability}%</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

                    $("#card-list").append(card);
                }
            });
        }
    },
    layer: {
        change: (name, visible, band) =>{
            if(layers[name]){
                map.removeLayer(layers[name]);
                delete layers[name];
            }
            else{
                layers[name] = new ol.layer.Tile({
                    visible: visible,
                    opacity: .7,
                    source: new ol.source.TileWMS({
                        url: 'http://localhost:8080/geoserver/cite/wms',
                        params: {'LAYERS': name, 'STYLES': 'nc4', transparent: true}
                    })
                });
                map.addLayer(layers[name]);
            }
        }
    },
    zoom: {
        change: (lon, lat) =>{
            map.getView().setCenter([parseFloat(lon), parseFloat(lat)]);
            map.getView().setZoom(11);
        }
    }    
}