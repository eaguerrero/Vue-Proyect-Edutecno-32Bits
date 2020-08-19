<template>
    <div>
        <p>Juegos Disponibles: {{games.length}}</p>

        <input type="text" placeholder="Buscador Productos" v-model="search"/>
        <GameList :games='filterGames' />
    </div>
</template>
<script>

import { mapState, mapGetters } from "vuex";
import GameList from "./GameList";

export default {
    data() {
        return {
            search: null
        }
    },
    components: {
        GameList
    },
    computed: {
        ...mapState(["games"]),
        ...mapGetters(["findGame"]),
        filterGames() {
        if (this.search) {
                return this.findGame(this.search)
            } else {
                return this.games
            }
        }
    }
}
</script>