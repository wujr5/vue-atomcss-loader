<template lang="pug">
div
  h1.fsize-150.h-10.lh-10.bg-red test
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
