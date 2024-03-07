<template>
    <nav id="m-nav">
      <div class="nav-container">
        <router-link to="/">FreeVisual</router-link>
        <a href="">Fotografías</a>
        <a href="">Vídeo</a>
        <a href="">Artistas</a>
        <router-link to="/about">About</router-link>
        <div class="search-bar">
          <input type="text" id="nav-s" placeholder="Busca tu contenido favorito">
        </div>
        <button class="login-button">Iniciar sesión</button>
      </div>
    </nav>
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
    flex-grow: 2; /* Reducir el tamaño de la barra de búsqueda en pantallas más pequeñas */
    margin-top: 10px;
    margin-left: 0;
  }

  .login-button {
    margin-top: 10px;
    padding: 5px; /* Reducir el tamaño del botón de iniciar sesión en pantallas más pequeñas */
  }
}
</style>
