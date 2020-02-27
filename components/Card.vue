<template lang="html">
  <b-card
    no-body
    style="width: 100%"
  >
    <template v-slot:header>
      <h6>{{ date }}</h6>
      <p>{{ text }}</p>
    </template>

    <b-card-body class="">
      <div class="row">
        <div class="col-6">
          <img src="/images/icons/upload.png" alt="">
          <span class="text-primary">{{ max }}</span>
        </div>
        <div class="col-6">
          <img src="/images/icons/download.png" alt="">
          <span class="text-danger">{{ min }}</span>
        </div>
        <div class="col-6 pt-3">
          <img src="/images/icons/raindrop-close-up.png" alt="">
          <span class="text-dark">{{ water }}</span>
        </div>
        <div class="col-6 pt-3">
          <img src="/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" alt="">
          <span class="text-dark">{{ rain }}</span>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.card-body {
  padding: 10px;
}
.row {
  margin: 0px;
}
.col-6 {
  display: flex;
  align-items: center;
  padding: 3px;
  padding-top: 0px;
}
.col-6 span {
  width: 100%;
  text-align: center;
  font-size: 22px;
}
p {
  font-size: 12px;
  margin-bottom: 0px;
}
h6 {
  font-weight: bold;
}
.text-primary {
  color: #127fc0;
}
.text-danger {
  color: #ca3e3e;
}
.text-dark {
  color: #000;
}
</style>
