<template>
    <div class="index-container">
      <h2 class="mt-3 mb-4">Índice</h2>
      <ul class="list-group">
        <li v-for="(section, index) in sections" :key="index" class="list-group-item">
          <a @click="scrollToSection(section.id)" class="text-decoration-none">{{ section.title }}</a>
        </li>
      </ul>
    </div>
</template>
  
<script>
export default {
data() {
    return {
    sections: [
        { id: 'section1', title: 'Sección 1' },
        { id: 'section2', title: 'Sección 2' },
        { id: 'section3', title: 'Sección 3' },
        // Agrega más secciones según sea necesario
    ],
    };
},
methods: {
    scrollToSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
    },
},
};
</script>

<style scoped>
  .index-container {
  right: 0;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  /* Utilizando Bootstrap classes para estilizar la lista y los enlaces */
  .list-group {
  width: 100%;
  }

  .list-group-item {
  cursor: pointer;
  transition: background-color 0.3s;
  }

  .list-group-item:hover {
  background-color: #f8f9fa; /* Color de fondo en hover según Bootstrap */
  }

  .text-decoration-none {
  text-decoration: none !important;
  }
</style>
  