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


// Definir los componentes
const Home = { template: '<h1> Hola mundo </h1>' };
const HelloWorld = { /* ... definición de HelloWorld ... */ };

// Configuración de rutas
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: HelloWorld }
  ],
});

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
