<template>
    <div>{{ description }}</div>
</template>

<script setup>
const content = defineProps({
    description: String,    
    image: String,
})
</script>