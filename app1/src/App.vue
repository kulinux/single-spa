<template>
  <div id="app">
    <HelloWorld msg="Soy app1"/>
    <App2Component/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {App2Component} from '@app2/app2';

export default {
  name: 'App',
  components: {
    HelloWorld,
    App2Component
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
