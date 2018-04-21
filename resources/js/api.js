$('input[name=\'search\']').bind('keydown', function(e) {
    if (e.keyCode == 13) {
        getWeather()
    }
});

function getWeather(){
  let place = $('input[name=\'search\']').val()
  if(place.length != 0){
    axios.get('/api/weather?place='+place.replace(" ", "+"))
    .then(function (response) {
      var data = response.data
      if(data.status){
        data = data.result
        let weathers = data.weather
        var html = ''
        for (var i = 0; i < weathers.length; i++) {
          html += '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 bxCard">'
          html += '<div class="top">'
          html += '<div class="date">'
          let date = weathers[i].date.split("-");
          html += date[2]+'/'+date[1]+'/'+date[0]
          html += '</div>'
          html += '<div class="description">'
          html += weathers[i].text
          html += '</div>'
          html += '</div>'
          html += '<div class="infos">'
          html += '<div class="col-xs-6 bxInfos" align="center">'
          html += '<img src="resources/images/icons/upload.png" class="img-responsive">'
          html += '<div class="text colorBlue">'
          html += weathers[i].temperature.max+'ºC'
          html += '</div>'
          html += '</div>'
          html += '<div class="col-xs-6 bxInfos" align="center">'
          html += '<img src="resources/images/icons/download.png" class="img-responsive">'
          html += '<div class="text colorRed">'
          html += weathers[i].temperature.min+'ºC'
          html += '</div>'
          html += '</div>'
          html += '<div class="clearBoth"></div>'
          html += '<div class="col-xs-6 bxInfos" align="center">'
          html += '<img src="resources/images/icons/raindrop-close-up.png" class="img-responsive marginLeftFixed">'
          html += '<div class="text fixMarginLeftFixed">'
          html += weathers[i].rain.precipitation+'mm'
          html += '</div>'
          html += '</div>'
          html += '<div class="col-xs-6 bxInfos" align="center">'
          html += '<img src="resources/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" class="img-responsive">'
          html += '<div class="text">'
          html += weathers[i].rain.probability+'%'
          html += '</div>'
          html += '</div>'
          html += '<div class="clearBoth"></div>'
          html += '</div>'
          html += '</div>'
        }
        $("#init").css("display", "none");
        $("#textWithCityState").css("display", "none");
        $("#cards").html("<div align='center' style='margin-top:40px;'><img src='resources/images/loading.gif' class='img-responsive'></div>");
        setTimeout(function(){
          $("#textWithCityState").css("display", "block");
          $("#textWithCityState").text("Previsão para "+data.locale.name+" - "+data.locale.state)
          $("#cards").html(html);
        }, 1000);
      }else{
        $("#init").css("display", "none");
        $("#textWithCityState").css("display", "none");
        $("#cards").html("<div align='center' style='margin-top:40px;'><img src='resources/images/loading.gif' class='img-responsive'></div>");
        setTimeout(function(){
          $("#cards").html("<div class='error'>Não foi possível buscar previsão para esta cidade!</div>")
        }, 1000);
      }
    })
    .catch(function (error) {
      console.log(error)
    });
  }

}
