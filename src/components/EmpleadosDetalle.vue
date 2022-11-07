<template>
    <div>
        <h1>Empleados Detalle</h1>

        <form class="form-control" method="post" v-on:submit.prevent="buscarEmpleado">
            <label>Seleccione al empleado</label>
            <select class="form-select" v-model="idEmpleado">
                <option v-for="emp in empleados" :key="emp.idEmpleado" :value="emp.idEmpleado">{{emp.apellido}}</option>
            </select>
            <br />
            <button class="btn btn-info">Detalles empleados</button>
        </form>

        <div class="card" v-if="empleado">
            <h1>{{this.empleado.apellido}}, {{this.empleado.oficio}}, {{this.empleado.departamento}}</h1>
            <h2 style="color:green">{{this.empleado.salario}}€</h2>
        </div>
    </div>
</template>

<script>
    import Global from './../Global';
    import axios from 'axios';

    export default {
        name : "EmpleadosDetalle" ,
        data() {
            return{
                empleados : [] ,
                idEmpleado : 0 ,
                empleado : null
            }
        },
        methods : {
            cargarEmpleados() {
                var request = "/api/Empleados/";
                var url = Global.urlEmpleados + request;
                axios.get(url).then( res => {
                    this.empleados = res.data;
                })
            } ,
            buscarEmpleado() {
                var request = "/api/Empleados/" + this.idEmpleado;
                var url = Global.urlEmpleados + request;

                axios.get(url).then(res => {
                    this.empleado = res.data
                })
            }
        },
        mounted() {
            this.cargarEmpleados();
        }
    }
</script>

<style>

</style>