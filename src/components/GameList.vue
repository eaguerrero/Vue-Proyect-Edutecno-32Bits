<template>
    <div>
        <ul>
            <li 
            v-bind:style="{'background-color':game.color}"
            v-for="(game, index) in games"
            :key="index">
                Código: {{game.id}} - Nombre: {{game.name}} - Stock: {{game.stock}} - Precio: {{game.price}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            games: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style>
</style>