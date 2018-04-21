/* globals Vue, document, M */
import API from '../../api';

const template = `
  <div class="row">
    <div class="col s10 offset-s1 input-field">
      <i class="material-icons prefix">search</i>
      <input type="text" id="search-locales" class="autocomplete" v-on:change="search" v-on:keyup.enter="search">
      <label for="search-locales">Localidades</label>
    </div>
  </div>
`;

Vue.component('search-locale', {
  template,
  props: ['locale'],
  model: {
    prop: 'locale',
    event: 'change',
  },
  methods: {
    search: function search(event) {
      this.$emit('change', event.target.value);
    },
  },
  mounted: () => {
    const autocomplete = M.Autocomplete.init(document.querySelector('.autocomplete'), { data: {} });
    API.findLocales().then((data) => {
      autocomplete.updateData(data.reduce((acc, item) => {
        acc[item.name] = null;
        return acc;
      }, {}));
    }).catch(() => M.toast({ html: 'Falha ao carregar Localidades' }));
  },
});
