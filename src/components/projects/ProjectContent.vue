<template>
    <div>{{ content.description }}</div>
    <img class="object-cover rounded-md" :src="content.image" alt="project image">
</template>

<script setup>
const content = defineProps({
    description: String,    
    image: String,
})
</script>