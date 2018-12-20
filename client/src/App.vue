<template>
  <div id="app">
    <div class="row">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('./assets/styles/responsive.css');
@import url('./assets/styles/main.css');
* {
  margin: 0;
  padding: 0;
}
body {
  color: #333;
  background-color: #f7f7f7;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
