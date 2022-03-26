<template>
  <div id="app">
    Soy el importador
    Desde fuera te han clickado {{ count }} veces
    <App2Component name="Oe, Oe, Oe" @han-clickado="count++"/>
  </div>
</template>

<script>
import {App2Component} from '@app2/app2';

export default {
  name: 'Importador',
  components: {
    App2Component
  },
  data() {
    return {
      count: 0
    }
  } 
}
</script>

<style>
</style>
