<template>
    <section>
        <h3> Añadir profesional</h3>
        <div>
           <div> <label > Nombre: <input type="text" v-model="pro.proName"></label></div>
           <div> <label > Apellidos: <input type="text" v-model="pro.proSurname"></label></div>
           <div> <label > DNI/NIF <input type="text" v-model="pro.dni"></label></div>
           <div>  <label > Campos en los que trabaja <input type="text" v-model="audiovisualField"> <button @click="handleField()"> Agregar </button></label></div> 
           <div>
                <ul> 
                    <li v-for="(element, index) in pro.proFields" v-bind:key="index"> {{ element }}</li>
                </ul>
            </div>
            <input type="checkbox" v-model="pro.doc"> Lo acepto todo
            <div> <button @click="handleAddPro()"> Crear profesional</button></div>
            
        </div>
    </section>

    <section>
        <h3> Listado de profesionales </h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th> Apellido</th>
                <th> DNI</th>
                <th>Especialidades </th>
                <th> Acepta condiciones</th>
            </tr>
            <tr v-for="elm in pros" :key="elm.dni">
                <th> {{ elm.proName }}</th>
                <th> {{ elm.proSurname }}</th>
                <th> {{ elm.dni }}</th>
                <th>
                    <ul>
                        <li v-for="(item, index) in elm.proFields" :key="index"> {{ item }}</li>
                    </ul>
                </th>
                <th v-if="elm.doc"> 
                    Acepta
                </th>
                <th v-else>
                    No acepta
                </th>
            </tr>
        </table>
    </section>


</template>

<script setup>
    import { ref } from 'vue';

    let pro = ref({
        proName: '',
        proSurname: '',
        dni: '',
        proFields: [],
        doc: false
    })

    let pros = ref([])

    let audiovisualField = ref('')

    const handleField = () => {
        pro.value.proFields.push(audiovisualField.value)
    }

    const handleAddPro = () => {
        pros.value.push({
            proName: pro.value.proName,
            proSurname: pro.value.proSurname,
            dni: pro.value.dni,
            proFields: pro.value.proFields,
            doc: pro.value.doc 
        })
        pro.value.proName = ''
        pro.value.proSurname = ''
        pro.value.dni = ''
        pro.value.proFields = []
        pro.value.doc = false
    }
</script>

<style scoped>

</style>