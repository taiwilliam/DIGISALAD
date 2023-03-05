<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
body {
  background: #F2F2F2;
}

.od_container {
  max-width: 1008px !important;
}

.od_fadeIn {
  opacity: 0;
  transform: translateY(-50px);
  transition: all 1.5s;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
}

.image-square {
  width: 100%;
  padding-top: 100%;
  position: relative;
  display: block;
}

.image-square img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  object-fit: contain;
}

.od_videobox {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
