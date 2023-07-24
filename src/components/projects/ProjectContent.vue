<template>
    <div>{{ content.description }}</div>
    <img class="object-cover rounded-md cursor-pointer" :src="content.image" alt="project image" @click="showModal = true">
    <ImageModal :showModal="showModal" :imageUrl="content.image" @close="showModal = false"/>
</template>

<script setup>
import ImageModal from '@/components/shared/ImageModal.vue';
import { ref } from 'vue';

let showModal = ref(false);

const content = defineProps({
    description: String,    
    image: String,    
})
</script>