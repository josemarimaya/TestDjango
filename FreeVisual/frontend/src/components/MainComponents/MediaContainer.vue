<template>
    <div class="container">
    <div v-for="(item, index) in data" :key="index" class="card" :style="item.style">
      <img :src="item.image" alt="Imagen">
      <div class="card-content">
        <p>{{ item.author }}</p>
        <button class="profile-button">Ir al perfil</button>
      </div>
    </div>
  </div>

</template>

<script setup>
//import { ref, onMounted, nextTick } from 'vue';

const data = [
  { image: '', author: 'Autor 1' },
  { image: '', author: 'Autor 2' },
  { image: '', author: 'Autor 3' },
  { image: '', author: 'Autor 4' },
  { image: '', author: 'Autor 5' },
  { image: '', author: 'Autor 6' },
  { image: '', author: 'Autor 7' },
  { image: '', author: 'Autor 8' },
  { image: '', author: 'Autor 9' },
  // Agrega más datos según sea necesario
];

//const cardContainer = ref(null);
/*onMounted(() => {
  // Espera al próximo ciclo de vida del componente para asegurar que cardContainer.value no sea null
  nextTick(() => {
    // Itera sobre los datos y crea dinámicamente los elementos
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = 'Imagen';
      card.appendChild(img);

      const cardContent = document.createElement('div');
      cardContent.className = 'card-content';

      const author = document.createElement('p');
      author.textContent = item.author;
      cardContent.appendChild(author);

      const button = document.createElement('button');
      button.className = 'profile-button';
      button.textContent = 'Ir al perfil';
      cardContent.appendChild(button);

      card.appendChild(cardContent);

      cardContainer.value.appendChild(card);
    });
  });
});*/ 


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
    border: 1px solid #ddd; /* Añade un contorno */
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