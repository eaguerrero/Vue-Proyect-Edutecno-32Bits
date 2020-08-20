import Vue from 'vue'
import Router from 'vue-router'

const Inicio = () => import('./components/Inicio')
const Search = () => import('./components/Search')
const Sales = () => import('./components/Sales')
const Total = () => import('./components/Total')
const e404 = () => import('./components/NotFound')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/sales',
            name: 'sales',
            component: Sales
        },
        {
            path: '/total',
            name: 'total',
            component: Total
        },
        {
            path: '/*',
            name: 'e404',
            component: E404
        }
    ]
})