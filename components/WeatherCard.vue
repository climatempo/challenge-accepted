<template lang="html">
  <b-card
    no-body
    style="width: 100%"
  >
    <template v-slot:header>
      <h6>{{ date }}</h6>
      <p>{{ text }}</p>
    </template>

    <b-card-body>
      <div class="row">
        <div class="col-6">
          <img src="/images/icons/upload.png" alt="">
          <span class="text-primary">{{ max }}ºC</span>
        </div>
        <div class="col-6">
          <img src="/images/icons/download.png" alt="">
          <span class="text-danger">{{ min }}ºC</span>
        </div>
        <div class="col-6 pt-3">
          <img src="/images/icons/raindrop-close-up.png" alt="">
          <span class="text-dark">{{ precipitation }}mm</span>
        </div>
        <div class="col-6 pt-3">
          <img src="/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png" alt="">
          <span class="text-dark">{{ probability }}%</span>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    max: {
      type: [String, Number],
      default: ''
    },
    min: {
      type: [String, Number],
      default: ''
    },
    probability: {
      type: [String, Number],
      default: ''
    },
    precipitation: {
      type: [String, Number],
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
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
