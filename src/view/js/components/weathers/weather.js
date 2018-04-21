/* globals Vue */
import '../directives/date-format';

const template = `
  <div class="col l6 m12 s12 weater-card">
    <div class="card">
        <div class="card-content">
            <span class="card-title" v-dateformat="weather.date"></span>
            <p>{{weather.text}}</p>
        </div>
        <div class="grey lighten-4 card-action">
          <div class="row">
            <div class="col s6">
              <img src="/images/icons/upload.png"/>
              <h4 class="blue-text">{{weather.temperature.min}} &#8451;</h4>
            </div>
            <div class="col s6 center-align">
              <img src="/images/icons/download.png"/>
              <h4 class="red-text">{{weather.temperature.max}} &#8451;</h4>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <img src="/images/icons/raindrop-close-up.png"/>
              <h4>{{weather.rain.precipitation}}mm</h4>
            </div>
            <div class="col s6 center-align">
              <img src="/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png"/>
              <h4>{{weather.rain.probability}}%</h4>
            </div>
          </div>
        </div>
    </div>
  </div>
`;

Vue.component('weather', {
  template,
  props: ['weather'],
});
