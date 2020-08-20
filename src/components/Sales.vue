<template>
  <div>
      <p>Juegos Disponibles: {{availableGames.length}}</p>
      <GameList :games='availableGames' :displayButton="true" @emit-sale="initSale"/>
  </div>
</template>

<script>
import GameList from './GameList'
import {mapGetters, mapActions} from 'vuex'

export default {
    components: {
        GameList
    },
    computed: {
        ...mapGetters(['availableGames'])
    },
    methods: {
        ...mapActions(["processSale"]),
        initSale(game){
            this.processSale(game)
        }
    }
}
</script>

<style>
</style>