<template lang="pug">
div
  h1.fs-150.h-150.lh-150.bgc-00ff00.backcolor-00ff00.c-ff00ff.c-123a6d.c-ssdfsdf test
  HelloWorld
  include components/test.pug
</template>

<script>
import '../../atomcss-common.css';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
