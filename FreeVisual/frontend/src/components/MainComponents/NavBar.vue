<template>
  <router-view>
    <nav id="m-nav">
      <div class="nav-container">
        <router-link to="/">FreeVisual</router-link>
        <router-link to="/">Fotografías</router-link>
        <router-link to="/">Vídeo</router-link>
        <router-link to="/">Artistas</router-link>
        <router-link to="/about">About</router-link>
        <div class="search-bar">
          <v-text-field  label="Busca tu contenido favorito" append-icon="mdi-magnify" class="custom-search-field"></v-text-field>
        </div>
        <v-btn to="/login" class="login-button">Iniciar sesión</v-btn>
      </div>
    </nav>
  </router-view>
    
  </template>

<script setup>

</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

nav {
  background-color: #333;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

#nav-s {
  width: 250px; /* Ajusta el ancho según tus necesidades */
  padding: 5px;
  height: 30px; /* Ajusta el padding según tus necesidades */
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;
}

nav a:hover {
  background-color: #ddd;
  color: black;
}

.search-bar {
  flex-grow: 4;
  margin-left: 10px;
}
.custom-search-field{
  font-size: 18px; /* Ajusta el tamaño del icono según tus necesidades */
  width: 400px; /* Ajusta el ancho según tus necesidades */
  padding: 5px;
  height: 50px; /* Ajusta el padding según tus necesidades */
  margin-bottom: 15px;
}
.login-button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #45a049;
}

/* Media query para pantallas más pequeñas */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    align-items: stretch;
  }

  .search-bar {
    flex-grow: 1; /* Ajusta el tamaño de la barra de búsqueda en pantallas más pequeñas */
    margin-left: 0;
  }

  .custom-search-field .v-icon {
    font-size: 18px; /* Ajusta el tamaño del icono según tus necesidades */
  }

  .login-button {
    margin-top: 10px;
    padding: 5px; /* Reducir el tamaño del botón de iniciar sesión en pantallas más pequeñas */
  }
}
</style>
