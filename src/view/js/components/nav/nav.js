/* globals Vue, document, M */
import API from '../../api';

const template = `
      <nav class="light-blue darken-4">
        <div class="nav-wrapper">
          <a href="/" class="brand-logo center"><img src="/images/logo-white.png"/></a>
        </div>
      </nav>
`;
Vue.component('nav-header', {
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
    const autocomplete = M.Autocomplete.init(document.querySelector('.autocomplete'), { data: { 'Carregando': -1 } });
    API.findLocales().then((data) => {
      console.log(data.map(item => ({ [item.name]: item.id })));
      autocomplete.updateData(data.map(item => ({ [item.name]: item.id })));
    }).catch(() => M.toast({ html: 'Falha ao carregar Localidades' }));
  },
});
