import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
/*
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue/dist/bootstrap-vue.esm';
*/


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
app.use(router);
//app.use(BootstrapVue);
app.mount('#app');
