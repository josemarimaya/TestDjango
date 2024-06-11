import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
/*
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue/dist/bootstrap-vue.esm';
*/
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'; // Importa los estilos de los iconos


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
