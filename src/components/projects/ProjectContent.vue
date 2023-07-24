<template>
    <div>{{ content.description }}</div>
    <img :src="content.image" alt="project image">
</template>

<script setup>
const content = defineProps({
    description: String,    
    image: String,
})
</script>