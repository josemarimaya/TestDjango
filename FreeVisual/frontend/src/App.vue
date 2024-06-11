<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <RouterView/>
  <HomePro/>
</template>

<script setup>

import HomePro from '@/views/HomePro.vue';

</script>

<style>
</style>