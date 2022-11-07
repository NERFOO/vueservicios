<template>
    <div>
        <h1>Empleados oficios</h1>

        <div v-for="emp in empleados" :key="emp">
            {{emp.apellido}}, {{emp.oficio}}
        </div>
    </div>
</template>

<script>
import Global from '@/Global';
import axios from 'axios';

    export default {
        name : "EmpleadosOficio" ,
        props : ["nom"],
        data() {
            return {
                empleados : []
            }
        }, methods : {
            cargarEmpleados() {
                var request = "/api/Empleados/EmpleadosOficio/" + this.$route.params.nom;
                var url = Global.urlEmpleados + request;

                axios.get(url).then( res => {
                    this.empleados = res.data;
                })
            }
        },
        mounted() {
            this.cargarEmpleados();
        },
        watch : {
            "$route.params.nom"(nextVal, oldVal) {
                if(nextVal != oldVal) {
                    this.cargarEmpleados();
                }
            }
        }
    }
</script>

<style>

</style>