<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/empleados">Empleados</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Oficios
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><router-link v-for="ofi in oficios" :key="ofi" class="dropdown-item" :to="`/oficios/${ofi}`">{{ofi}}</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import Global from '@/Global';
    import axios from 'axios';

    export default {
        name : "MenuComponent",
        data() {
                return{
                    oficios : []
                }
            },
            methods : {
                cargarOficios() {
                    var request = "/api/Empleados/oficios/";
                    var url = Global.urlEmpleados + request;

                    axios.get(url).then(res => {
                        this.oficios = res.data;
                    })
                }
            },
            mounted() {
                this.cargarOficios();
            }
    }
</script>

<style>
    li{
        display: inline;
    }
</style>