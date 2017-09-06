/**
 * Autor: Lucas Leal
 * Rainbowtext - A funny new way of showing diversity, maybe
 *
 */ (function ($) {

  $.fn.rainbowtext = function (options) {

        // Configuracao padrao
        var config = $.extend({
          colors: [
          '#F44336',
          '#FF9800',
          '#FFEB3B',
          '#0CFF00',
          '#4CAF50',
          '#2196F3',
          '#9C27B0'
          ]
        }, options);

        var shade = function(col, amt) {
          if (typeof amt == 'undefined') amt = -99;
          var usePound = false;
          if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
          }
          var num = parseInt(col,16);
          var r = (num >> 16) + amt;
          if (r > 255) r = 255;
          else if  (r < 0) r = 0;
          var b = ((num >> 8) & 0x00FF) + amt;
          if (b > 255) b = 255;
          else if  (b < 0) b = 0;
          var g = (num & 0x0000FF) + amt;
          if (g > 255) g = 255;
          else if (g < 0) g = 0;
          return (usePound?"#":"") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
        }

        // varre os objetos
        return this.each(function () {

            // salva uma referencia
            $(this).css('text-shadow','none');

            var texto = $(this).text();
            var letras = texto.split('');
            var i = 0;
            texto = '';

            for (k = 0;k<letras.length;k++){
              if (letras[k]!=' '){
                texto += "<span style='display:inline-block;position:relative;text-shadow: 4px 0px 0px "+shade(config.colors[i],-40)+", 6px 0px 0px "+shade(config.colors[i],-90)+";color:"+config.colors[i]+";'>";
                texto += letras[k];
                texto += "</span>";
                i++;
                if (i==config.colors.length) i = 0;
              }else{
                texto += letras[k];
              }
            }
            $(this).html(texto);
            $(this).find('span').each(function(i,obj){
              setTimeout(function(){
                $(obj).addClass('animated bounce');
              },i*100);
            });

          });
      }
    }(jQuery));