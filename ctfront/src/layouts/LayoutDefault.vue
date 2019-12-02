<template>
  <div id="layoutDefault">
    <header class="row">
      <div class="col text-center py-3">
        <img class="img-fluid logo" src="@/assets/img/logo.png" />
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",
  components: {},
  methods: {
  },
  computed: {
  },
  created() {
  }
};
</script>
<style>
  #layoutDefault header {
    background-color: #1565C0;
  }
  #layoutDefault header .logo {
    height: 30px;
  }
</style>
