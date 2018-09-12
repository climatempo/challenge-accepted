<?php
namespace abox;?>
<container class="pin view zero bar tct fwhite" style="min-heigth:680px;min-width:370px">
	<!SEEK>
	<header class="sys ns -wd90%" style='border-radius:2rem;margin-left:calc(5% - .5rem)'>
		<input 
			type='text' 
			class='wf spd alphak2 fwhite -nd' 
			onkeypress='ab.apply(function(k){ if(k.keyCode==AB_KEY_ENTER) {{ %# }}.submit(); },window.event)'/>
		<icon class="abs spd cur fn fgray -tp0 -lt100%" style="margin-left:-3.5rem" onclick="{{%#}}.submit()">&#x55;</icon>
	</header>
	<!LOGO>
	<brand class="dbar -op.8"><img class="-ht2rem" src="src/img/logo-white.png"/></brand>
	<!DATE NAVIGATOR>
	<div class="bar dbs ft-roboto-light flt">
		<icon class="lt sls fh cur hpd circled fgray alphak2" onclick="{{%#}}.submit(-1)">&#x34;</icon>
		<date class="sys hpd fg">04/02</date>
		<icon class="rt drs fh cur hpd fgray circled alphak2" onclick="{{%#}}.submit(1)">&#x35;</icon>
	</div>
	<!STAGE>
	<section class="w80 hys alphak2 dys shd" style="margin-left:calc(10% - .5rem);height:calc(80% - 18rem)">
		<div class='stretch'>
			<div class='dbar fg flt fgray'><icon class='flt disabled -op.8'>&#x51;</icon></div>
			<center class='fn spd'>Infelizmente não encontramos sua localização, entre com sua cidade no campo de pesquisa a cima... ={</center>
		</div>
	</section>
	<!FOOTER>
	<footer class="abs bar -lt0 -tp100%" style="margin-top:-5.5rem">
		<div class="bar fxs">Powered by</div>
		<img class="-ht2rem" src="src/img/abox/logo_white.png"/>
	</footer>
	<!SCRIPT>
	<script>
		{{ %# }} = {
			data : ab.data()
			, currentCity : null
			, currentDate : "0204"
			, template : null
			, target : $('#{{#}} section:first')[0]
			, submit : function(c=0){
				let
				v = $('#{{#}} input:first').val(),
				d = !v?$('#{{#}} date:first').text():"04/02";
				if(v) this.currentCity = v;
				if(d) this.currentDate = d.split("/").reverse().join("");
				this.data.load({ conf:"locale",load:true,data:{city:this.currentCity,date:this.currentDate,step:c} });
				this.data.bind(this.template,this.target,function(){
					var
					date = ("0"+{{%#}}.data.value('date')).split('').reverse();
					$("#{{#}} input:first").val("");
					$('#{{#}} date:first').text([date[1],date[0],"/",date[3],date[2]].join(''));
					$('#{{#}} .--temptile:eq(0)')[0].style.left = (c?(c.int()>0?"64":"-64"):"0")+"px";
					$('#{{#}} .--temptile:eq(0)').stop().animate({opacity:1,top:0,left:0});
					ab.organize();
				});
			}
			, init : function(){
				let
				obj = this;
				ab.body().style.backgroundImage = 'url("src/img/wallpapers/dusk.png")';
				ab.body().addClass("-blur");
				AB_BIND_DEFAULT_RESPONSE = "<div class='stretch'>\
					<div class='dbar fg flt fgray'><icon class='flt disabled -op.8'>&#x51;</icon></div>\
					<center class='fn spd'>Infelizmente não encontramos dados para sua localização, entre com sua cidade no campo de pesquisa a cima ou tente outra data... ={</center>\
				</div>".toDOM();
				ab.organize();
				this.container.appear(120);
				ab.call("weather/tile.php",null,function(r){ 
					obj.template = r.data.toDOM(); 
					obj.submit();
				});
			}
		}
	</script>
</container>
