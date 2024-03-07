<template>
    <div class="container">
        <div class="card">
            <img src="" alt="Imagen 1">
            <div class="card-content">
                <p>Autor 1</p>
                <button class="profile-button">Ir al perfil</button>
            </div>
        </div>

        <div class="card">
            <img src="" alt="Imagen 2">
            <div class="card-content">
                <p>Autor 2</p>
                <button class="profile-button">Ir al perfil</button>
            </div>
        </div>

        <div class="card">
            <img src="" alt="Imagen 3">
            <div class="card-content">
                <p>Autor 3</p>
                <button class="profile-button">Ir al perfil</button>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    margin-top: 5px;
}

.card {
    width: 30%;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

.card img {
    width: 100%;
    height: auto;
}

.card-content {
    padding: 15px;
    text-align: center;
}

.profile-button {
    background-color: #4CAF50;
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.profile-button:hover {
    background-color: #45a049;
}

</style>