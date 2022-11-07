import { createRouter, createWebHistory } from "vue-router";
import EmpleadosDetalle from './components/EmpleadosDetalle.vue';
import EmpleadosOficios from './components/EmpleadosOficios.vue';
import HomeComponent from './components/HomeComponent.vue';

const routes = [
    {
        path : "/", component : HomeComponent
    },
    {
        path : "/empleados", component : EmpleadosDetalle
    },
    {
        path : "/oficios/:nom", component : EmpleadosOficios
    }
]

const router = createRouter({
    history : createWebHistory() ,
    routes : routes
})

export default router;