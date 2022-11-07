<template>
    <div>
        <h1>Home component</h1>
        <h2 style="color:purple">{{saludo}}</h2>
        <img src="./../assets/images/img1.jpg" style="width:100%"/>
    </div>
</template>

<script>
    import ServiceEjemplo from './../services/ServiceEjemplo';
    //PARA PODER UTILIZAR NUESTRO SERVICIO DEBEMOS INSTANCIAR UN OBJETO DE LA CLASE EN EL COMPONENT
    const service = new ServiceEjemplo();


    export default {
        name : "HomeComponent" ,
        data() {
            return{
                saludo : ""
            }
        },
        mounted() {
            this.saludo = service.getSaludo("NERFO");
        }
    }
</script>

<style>

</style>