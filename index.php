<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/css/ol.css" type="text/css">
        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="css/index.css" rel="stylesheet">
        <link href="css/jquery-editable-select.css" rel="stylesheet">
    </head>
    <body>
    <div class="container">
        <div class="row justify-content-md-center md-6 sm-12 p-1" >
            <div class="col-sm-7 mt-2">
                <select id="select-search" class="form-control" ></select>
            </div>
            <div id="show-after-select" class="col-sm-7 mt-2">
                <div class="col-sm-12 mt-2">
                    <div class="row justify-content-md-center">
                        <div class="col-2">
                            <input type="checkbox" value="tmax" class="add-layer"><label>T. Max</label>
                        </div>
                        <div class="col-2">
                            <input type="checkbox" value="tmin" class="add-layer"><label>T. Min</label>
                        </div>
                        <div class="col-2">
                            <input type="checkbox" value="rhmax" class="add-layer"><label>RH Max.</label>
                        </div>
                        <div class="col-2">
                            <input type="checkbox" value="rhmin" class="add-layer"><label>RH Min.</label>
                        </div>
                        <div id="tooltip"></div>
                    </div>
                    <div id="map"></div>
                    <div class="info-click">Clique no mapa para exibir acumulado de 24hs (Não é necessário exibir camadas).<img scr="img/icons/icon-info.png" width="18" /></div>
                    <div id="card-list" ></div>
                </div>
            </div>            
        </div>
    </div>
    </body>
    
    <script src="js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/build/ol.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="js/map.config.js" type="text/javascript"></script>
    <script src="js/index.js" type="text/javascript"></script>
    <script src="js/jquery-editable-select.js" type="text/javascript"></script>
    
    
    
    <script type="text/javascript">
        tool.layer.change("precipitacao", false, 1);
        
        $.getJSON( "controller/locales.php", data => {
            for(d of data) $('#select-search').append($('<option>', { value: d.id, text : d.name+" - "+d.state, longitude: d.longitude, latitude: d.latitude }));

            $('#select-search')
                .editableSelect({ effects: 'default' })
                .on('select.editable-select', (e, li) => {
                    $("#card-list").show();
                    
                    tool.zoom.change($(li).attr("longitude"), $(li).attr("latitude"));
                    tool.card.generate(li);
                });
        });     
    </script>
</html>