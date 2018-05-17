var locales = [];
$(function(){
  $('#searchCity').click(function(e){
    e.preventDefault();
    setWeaPage();
  });
  $('#climatempo_logo').click(function(e){
    e.preventDefault();
    location.href = "index.php";
  });
});



function locales_request(func) {
  $.ajax({
    type:'get',
    url:'base/locales.json',
    success:function(req){
      func(req);
    }
  });
}

function clima_request(func,locale) {
  $.ajax({
    type:'get',
    url:'prog/clima.php?locale='+locale,
    success:function(req){
      func(req);
    }
  });
}

function setWeaPage() {
  var locale_name = $('#search-city').val();
  clima_request(function(e){
    $('#previsao_pages').html(e);
  },locale_name);
}

function setWeatherPage() {
  var locale_name = $('#search-city').val();
  if (locale_name == "") {
    location.href = "index.php";
  }else {
    locales_request(function(e){
      var locExist = false;
      for (i of e) {
        if (i['name'] == locale_name) {
          locExist = true;
          location.href = "index.php?locale_id="+i['id'];
          $('#search-city').val("");
        }
      }
      if (locExist == false) {
        location.href = "index.php?boo_location=false"
      }
    });
  }
}
