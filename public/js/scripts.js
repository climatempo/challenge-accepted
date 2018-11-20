const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8000/api/locales', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    const select = document.createElement('select');
    container.appendChild(select);
    select.setAttribute('onchange', 'changeFunc(value)');

    data.forEach(locale => {
        
        var option = document.createElement("option");
        option.value = locale.id;
        option.text = locale.name;

        select.appendChild(option);

        var newRequest = new XMLHttpRequest();
        newRequest.open('GET', 'http://localhost:8000/api/weather/locale/'+locale.id, true);
        newRequest.onload = function () {
      
        // Begin accessing JSON dataWeather here
        var dataWeather = JSON.parse(this.response);
        if (newRequest.status >= 200 && newRequest.status < 400) {

            weathers = dataWeather.weather

            const h1 = document.createElement('h1');
            h1.textContent = dataWeather.locale.name;

            container.appendChild(h1);

            weathers.forEach( weather => {
            
            
            const card = document.createElement('div');
            card.setAttribute('class', 'card');


            const headerCard = document.createElement('div');
            headerCard.setAttribute('class', 'headerCard');

            const pdate = document.createElement('p');
            pdate.textContent = weather.date;
            

            const ptext = document.createElement('p');
            ptext.textContent = weather.text;

            const temperature = document.createElement('div');
            temperature.setAttribute('class', 'temperature');

            const pmin = document.createElement('p');
            pmin.textContent = weather.temperature.min+'°C';
            
            const pmax = document.createElement('p');
            pmax.textContent = weather.temperature.max+'°C';


            const rain = document.createElement('div');
            rain.setAttribute('class', 'rain');

            const probability = document.createElement('p');
            probability.textContent = weather.rain.probability+'mm';

            const precipitation = document.createElement('p');
            precipitation.textContent = weather.rain.precipitation+'%';


            container.appendChild(card);
            card.appendChild(headerCard);
            headerCard.appendChild(pdate);
            headerCard.appendChild(ptext);

            card.appendChild(temperature);
            temperature.appendChild(pmin);
            temperature.appendChild(pmax);

            card.appendChild(rain);
            rain.appendChild(probability);
            rain.appendChild(precipitation);

          });
        }
      }
      
      newRequest.send();
       

    });
  }
}

request.send();


function changeFunc($i) {
    app.removeChild(container);
   
    
    const container2 = document.createElement('div');
    container2.setAttribute('class', 'container');
    app.appendChild(container2);
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8000/api/locales', true);
    request.onload = function () {
    
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            const select = document.createElement('select');
            container2.appendChild(select);
            select.setAttribute('onchange', 'changeFunc(value)');
        
            data.forEach(locale => {
                
                var option = document.createElement("option");
                option.value = locale.id;
                option.text = locale.name;
        
                select.appendChild(option);
            });
        }
    }
  
    request.send();

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', 'http://localhost:8000/api/weather/locale/'+$i, true);
    newRequest.onload = function () {
  
    // Begin accessing JSON dataWeather here
    var dataWeather = JSON.parse(this.response);
    if (newRequest.status >= 200 && newRequest.status < 400) {

        weathers = dataWeather.weather

        const h1 = document.createElement('h1');
        h1.textContent = dataWeather.locale.name;

        container2.appendChild(h1);

        weathers.forEach( weather => {
        
        
        const card = document.createElement('div');
        card.setAttribute('class', 'card');


        const headerCard = document.createElement('div');
        headerCard.setAttribute('class', 'headerCard');

        const pdate = document.createElement('p');
        pdate.textContent = weather.date;
        

        const ptext = document.createElement('p');
        ptext.textContent = weather.text;

        const temperature = document.createElement('div');
        temperature.setAttribute('class', 'temperature');

        const pmin = document.createElement('p');
        pmin.textContent = weather.temperature.min+'°C';
        
        const pmax = document.createElement('p');
        pmax.textContent = weather.temperature.max+'°C';


        const rain = document.createElement('div');
        rain.setAttribute('class', 'rain');

        const probability = document.createElement('p');
        probability.textContent = weather.rain.probability+'mm';

        const precipitation = document.createElement('p');
        precipitation.textContent = weather.rain.precipitation+'%';


        container2.appendChild(card);
        card.appendChild(headerCard);
        headerCard.appendChild(pdate);
        headerCard.appendChild(ptext);

        card.appendChild(temperature);
        temperature.appendChild(pmin);
        temperature.appendChild(pmax);

        card.appendChild(rain);
        rain.appendChild(probability);
        rain.appendChild(precipitation);

      });
    }
  }
  
  newRequest.send();

}


