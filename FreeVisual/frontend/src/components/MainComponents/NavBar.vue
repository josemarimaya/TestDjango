<template>
    <nav id="m-nav">
      <a href="">
        FreeVisual
      </a>
      <a href=""> Fotografías</a> 
      <a href=""> Vídeo </a>
      
      <a href=""> Artistas</a>

      <div class="search-bar">
        <input type="text" placeholder="Buscar">
      </div>
      <button class="login-button">Iniciar sesión</button>
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
    overflow: hidden;
}

nav a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

nav a:hover {
    background-color: #ddd;
    color: black;
}

.search-bar {
    float: left;
    padding: 15px;
}

.login-button {
    float: right;
    padding: 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.login-button:hover {
    background-color: #45a049;
}

</style>