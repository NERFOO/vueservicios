<template>
    <div>
        <h1>Coches</h1>
        <div class="card" v-for="car in coches" :key="car.idCoche">
            <h1 style="color:blue">{{car.marca}}, {{car.modelo}}</h1>
            <h2 style="color:green">{{car.conductor}}</h2>
            <img :src="car.imagen" style="width:50%;border-radius:15px" />
        </div>
    </div>
</template>

<script>
    //NECESITAMOS IMPORTAR GLOBAL
    import Global from './../Global';
    //NECESITAMOS IMPORTAR AXIOS
    import axios from 'axios';

    //AQUI PODEMOS DECLARAR VARIABLES PARA UTILIZARLAS DENTRO DE CUALQUIER METODO DEL COMPONENT
    //var urlApi = "https://apicochespaco.azurewebsites.net/";

    export default {
        name : "CochesComponent" ,
        data() {
            return{
                coches : []
            }
        },
        methods : {
            loadCoches() {
                var request = "/webresources/coches";
                var url = Global.urlCoches + request;
                axios.get(url).then( res => {
                    this.coches = res.data;
                })
            }
        },
        mounted() {
            this.loadCoches();
        }
    }
</script>

<style>

</style>