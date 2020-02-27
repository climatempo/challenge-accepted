<template lang="html">
  <div class="mobile-container">
    <div class="header">
      <img src="/images/logo-white.png" />
    </div>
    <div class="body">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.mobile-container {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50px auto;
}
.header {
  width: 100%;
  height: 100%;
  background-color: #1565c0;
  display: flex;
  justify-content: center;
}
.header img {
  height: 100%;
  padding: 13px;
}
.body {
  min-height: calc(100vh - 50px);
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
}
</style>
