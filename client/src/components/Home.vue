<template>
  <div class="home">
    <header-logo></header-logo>
    <input-search></input-search>
    <cards></cards>
  </div>
</template>

<script>
import HeaderLogo from '@/components/HeaderLogo';
import InputSearch from '@/components/InputSearch';
import Cards from '@/components/Cards';

export default {
  components: {
    HeaderLogo,
    InputSearch,
    Cards,
  },
};
</script>

<style scoped>
</style>
