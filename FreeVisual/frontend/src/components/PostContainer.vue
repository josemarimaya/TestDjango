<template>
    <div class="post-container"></div>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
</template>

<script setup>
import PostCard from './PostCard.vue'
</script>

<style scoped>

.post-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>