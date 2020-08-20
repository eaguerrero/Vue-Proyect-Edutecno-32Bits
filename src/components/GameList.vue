<template>
    <div>
        <ul>
            <li 
            v-bind:style="{'background-color':game.color}"
            v-for="(game, index) in games"
            :key="index">
                Código: {{game.id}} - Nombre: {{game.name}} - Stock: {{game.stock}} - Precio: {{game.price}}
            <button v-if="displayButton" @click="emitSale(game)">Vender</button></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            games: {
                type: Array,
                required: true
            },
            displayButton: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            emitSale(game){
                this.$emit("emit-sale", game)
            }
        }
    }
</script>

<style>
</style>