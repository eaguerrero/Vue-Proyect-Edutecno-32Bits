<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li><router-link :to="{name: 'inicio'}">Inicio</router-link></li>
      <li><router-link :to="{name: 'search'}">Busqueda</router-link></li>
      <li><router-link :to="{name: 'sales'}">Ventas</router-link></li>
      <li><router-link :to="{name: 'total'}">Total</router-link></li>
      <li><router-link :to="{name: 'e404'}">Error 404 - Página no encontrada.</router-link></li>
    </ul>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to {
    opacity: 0;
}
ul {
 list-style-type: none;
 margin: 0;
 padding: 0;
 overflow: hidden;
 background-color: #333333;
}
li {
 float: left;
}
li a {
 display: block;
 color: white;
 text-align: center;
 padding: 16px;
 text-decoration: none;
}
</style>
