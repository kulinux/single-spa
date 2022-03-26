<template>
  <div id="app">
    <HelloWorld msg="Soy app1"/>
    <importador/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Importador from './components/Importador.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Importador
  },
  data() {
    return {
      count: 0
    }
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
