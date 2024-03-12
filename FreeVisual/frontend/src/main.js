import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
/*
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue/dist/bootstrap-vue.esm';
*/

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'; // Importa los estilos de los iconos


// Definir los componentes

import HomePro from './views/HomePro.vue';
import AboutPro from '@/views/AboutPro.vue';
import LoginPro from '@/views/LoginPro.vue';

// Configuración de rutas
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePro },
    { path: '/about', component: AboutPro },
    { path: '/login', component: LoginPro }
  ],
});

// Construcción de directivas

app.directive('font-size',
{
  beforeMount: (el) => {
    el.style.fontsize = "70px"
  }
}) // ('Nombre', {Objeto})

app.directive('custom-size', {
  beforeMount: (el, binding) =>{
   // Binding aplicando valores // el.style.fontsize = binding.value + "px"
   // Aplicando argumentos
   let size = 18
   switch (binding.arg) {
    
    case 'sm':
      size = 10
      break;
    case 'md':
      size = 18
      break;
    case 'lg':
      size = 25
      break;
    
    case 'xl':
      size = 40
      break;
   }
   el.style.fontsize = size + "px"
  }
})

// Directivas con modificadores
app.directive('custom-font', {
  beforeMount: (el, binding) => {
    let size = 18

    if(binding.modifiers.sm){
      size = 10
    } else if (binding.modifiers.md){
      size = 18
    }
    el.style.fontsize = size + "px"
    if (binding.modifiers.red){
      el.style.color = "#ff0000"
    }else if(binding.modifiers.green){
      el.style.color = "#00ff00"
    }
  }
})

// Crear la aplicación y usar el router y BootstrapVue
const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
})
app.use(router);
app.use(vuetify);
//app.use(BootstrapVue);
app.mount('#app');
