<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="css/jquery-editable-select.css" rel="stylesheet">

        <style>
            .info-card{
                display: flex;
            }

            .info-card div {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            .info-card label{
                font-weight: bold;
            }

            .info-card label.max{
                color: blue;
            }
            .info-card label.min{
                color: red;
            }
            
        </style>
    </head>
    <body>
    <div class="container">
        <div class="row justify-content-md-center md-6 sm-12 p-1" >
            <div class="col-sm-7 mt-2">
                <select id="select-search" class="form-control" ></select>
            </div>
            <div id="card-list" class="col-sm-7"></div>
        </div>
    </div>
    </body>
    <script src="js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js/jquery-editable-select.js"></script>
    <script type="text/javascript">
        
        $.getJSON( "controller/locales.php", data => {
            for(d of data) $('#select-search').append($('<option>', { value: d.id, text : d.name + " - "+d.state }));

            $('#select-search')
                .editableSelect({ effects: 'default' })
                .on('select.editable-select', (e, li) => renderItem(li));
        });

        renderItem = data => {
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

    </script>
</html>