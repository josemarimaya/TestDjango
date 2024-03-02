/*
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)*/
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
// Definimos los componentes

const Home = {template: '<h1> Hola mundo </h1>'}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Configuración de rutas
    {
        path:'/', component: Home,
    },
    {
        path: '/about', component: HelloWorld
    }
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');