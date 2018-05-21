$(function(){
  /* Executa a função para criar as tabelas de previsão */
  $('#searchCity').click(function(e){
    e.preventDefault();
    setWeaPage();
  });
  /* Adiciona o caminho para a pagina principal caso a imagem seja clicada */
  $('#climatempo_logo').click(function(e){
    e.preventDefault();
    location.href = "index.php";
  });
  /* Adiciona o autocomplete baseado no locales.json */
  locales_request(function(e){
    var locales = [];
    for (i of e) {
      locales.push(i['name']);
    }
    $("#search-city").autocomplete({source:locales});
  });

});

/* Faz a requisição do locales.json */
function locales_request(func) {
  $.ajax({
    type:'get',
    url:'base/locales.json',
    success:function(req){
      func(req);
    }
  });
}

/* Faz a requisição do clima.php usando a localização como parametro */
function clima_request(func,locale) {
  $.ajax({
    type:'get',
    url:'prog/clima.php?locale='+locale,
    success:function(req){
      func(req);
    }
  });
}

/* Cria as tabelas de previsão baseado na localização dada pelo usuário */
function setWeaPage() {
  var locale_name = $('#search-city').val();
  clima_request(function(e){
    $('#previsao_pages').html(e);
  },locale_name);
}
