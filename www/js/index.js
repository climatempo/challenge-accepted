/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function el(name, text)
{
	var el = document.createElement(name);
	
	if ( text != undefined )
	{
		el.textContent = text
	}
	
	return el
}

var locales = null
var localeID = null
var locale = null
var weather = null


$header = document.querySelector('header#main')
$scrolls = document.querySelector('.scrolls')
$form = document.querySelector('form')
$input = document.querySelector('input')
$select = document.querySelector('select')
$locale = document.querySelector("h1 span")
$weather = document.querySelector("div.weather")
 
var localesHttp = new XMLHttpRequest()
var weatherHttp = new XMLHttpRequest()

function searchLocale( ev )
{
	if ( ev.keyCode == 13 )
	{
		return;
	}
	
	if ( ev.keyCode == 40 )
	{
		$select.focus();
		return;
	}
	
	var results = [];
	
	for( i=0; i < locales.length; i++ )
	{
		if( locales[i].name.toLowerCase().indexOf( $input.value.toLowerCase() ) > -1 )
		{
			results.push( locales[i] )
		}
	}
	
	$select.textContent = "";
	
	for( i=0; i < results.length; i++ )
	{
		option = el('option', results[i].name + ', ' +results[i].state)
		option.setAttribute('value', results[i].id)
		
		if( i == 0 )
		{
			option.setAttribute('selected', 'selected')
		}
		
		
		$select.appendChild( option )
		
	}
	
	
	$select.setAttribute('class', 'show')
	
}

function setLocale( ev )
{
	ev.stopPropagation()
	ev.preventDefault()
	$select.className = ''
	loadLocale( parseInt($select.value) )
}

function selectKeyup( ev )
{ 
	
	if( ev.keyCode == 13 )
	{
		$select.className = ''
		loadLocale( parseInt($select.value) )
	}
}

function selectClick( ev )
{
	$select.className = ''
	loadLocale( parseInt($select.value) )
}

localesHttp.onloadend = function()
{
	
	locales = JSON.parse( localesHttp.responseText );
	loadLocale( 3735 )
	
	$input.addEventListener('keyup', searchLocale)
	$form.addEventListener('submit', setLocale)
	$select.addEventListener('keyup', selectKeyup)
	$select.addEventListener('click', selectClick)
	
}

weatherHttp.onloadend = function()
{
	weather = JSON.parse( weatherHttp.responseText )
		
	
	for ( i = 0 ; i < weather.length; i++ )
	{
		
		if( weather[i].locale.id == localeID )
		{
			
			for( j=0; j < weather[i].weather.length; j++ )
			{
				
				info = weather[i].weather[j];
				
				brDate = info.date.split('-').reverse().join('/')
				
				card = el('card');
				header = el('header');
				date = el('p', brDate);
				small = el('small', info.text);
				ul = el('ul')
				min = el('li', info.temperature.min+'ºC')
				max = el('li',info.temperature.max+'ºC')
				precipitation = el('li', info.rain.precipitation+'mm')
				probability = el('li', info.rain.probability+'%')
				
				header.appendChild( date )
				header.appendChild( small )
				card.appendChild( header )
				
				min.setAttribute('class', 'min');
				max.setAttribute('class', 'max');
				precipitation.setAttribute('class', 'precipitation');
				probability.setAttribute('class', 'probability');
				
				ul.appendChild(min)
				ul.appendChild(max)
				ul.appendChild(precipitation)
				ul.appendChild(probability)
				
				card.appendChild( ul )
				
				$weather.appendChild( card )
				
			}
		
		}
		
		
		
	}
	
}

 
localesHttp.open('get', '../base/locales.json');
localesHttp.send()


 
function loadLocale( id )
{
	localeID = id;
	
	for( i = 0 ; i < locales.length; i++ )
	{
		if( locales[i].id == id )
		{
		    locale = locales[i]
		    break;
		}
	}

	// limpa tela 
	$input.value =  null;
	$input.setAttribute('placeholder', locale.name)
	$locale.textContent = locale.name
	$weather.textContent = "";

	// pega os dados 
	weatherHttp.open('get', '../base/weather.json');
	weatherHttp.send();
	
}




 
var app = {
    // Application Constructor
    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        
        
        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


var animating = false;

function scroll()
{
	if ( animating ) return;
	
	
	if ( $scrolls.scrollTop > $scrolls.lastScrollTop )
	{
		animating = true;
		$header.className = "shrink hide"
		setTimeout( function(){ animating = false; }, 300 )
	}
	else
	{
		animating = true;
		$header.className = "hide"
		setTimeout( function(){ $header.className = "" }, 300 )	
		setTimeout( function(){ animating = false; }, 300 )
	}
	
	$scrolls.lastScrollTop = $scrolls.scrollTop
	
}

$scrolls.lastScrollTop = 0;
$scrolls.addEventListener('scroll', scroll)


app.initialize();

