<template>
  <div>
    <button @click="clickEnElBoton">
      Click me
    </button>
    <p>
      Soy App2Component y vivo en app2 {{name}} y me han clickado {{ count }} veces
    </p>
  </div>
</template>

<script>
export default {
  name: 'App2Component',
  props: {
    name: String 
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    clickEnElBoton() {
      this.count++
      this.$emit('han-clickado')
    }
  }
}
</script>

<style scoped>
</style>
