<template>
  <div>
      <h1>Error 404</h1>
      <h2>Página no encontrada</h2>
      <div>
          <button @click="home">Volver al inicio</button>
      </div>
  </div>
</template>

<script>
export default {
    home() {
        this.$router.push('/')
    }
}
</script>

<style>

</style>