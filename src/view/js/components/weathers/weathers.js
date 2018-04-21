/* globals Vue */
import './weather';

const template = `
  <div>
    <div v-for="w in weathers" class="row">
      <div class="col s12 text-left">
        <h6>Previsão para  {{w.locale.name}} - {{w.locale.state}}</h6>
      </div>
      <weather v-for="weather in w.weather" v-bind:weather="weather"/>
    </div>
  </div>
`;

Vue.component('weathers', {
  template,
  props: ['weathers'],
});
