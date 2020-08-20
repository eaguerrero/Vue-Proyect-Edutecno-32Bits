<template>
  <div>
       

        <ul v-if="sales.length > 0">
            <li 
            v-for="(sale, index) in sales"
            :key="index">
                Código: {{sale.id}} - Nombre: {{sale.name}} - Precio: {{sale.price}}
            </li>
        </ul>
        <p v-else>
            No hay ventas registradas
        </p>
        <h3>Total de Ventas : {{sales.length}}</h3>
        <h2>Total de Ventas : {{totalSales}}</h2>
    </div>
</template>

<script>

import {mapState} from "vuex"

export default {
    computed: {
        ...mapState(["sales"]),
        totalSales() {
            const reducer = function (accumulator, currentSale) {
                return accumulator + currentSale.price;
            } 
            return this.sales.reduce(reducer,0)
        },

        totalSales2() {
            return this.sales.reduce(function (accumulator, currentSale) {
                return accumulator + currentSale.price;
            } ,0)
        },

        totalSales3() {
            return this.sales.reduce(
                (accumulator,currentSale) => 
                accumulator + currentSale.price,0
            )
        },
        totalSales4() {
            return this.sales.reduce((accumulator,currentSale) => accumulator+currentSale.price,0)
        }
    }
}
</script>

<style>

</style>