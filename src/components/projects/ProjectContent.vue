<template>
  <div class="lg:col-span-2 lg:col-start-2">
    <div class="mb-4 font-light prose prose-ul:list-inside prose-li:marker:text-emerald-600"
      v-html="md(content.description)"></div>
    <img class="object-cover rounded-md cursor-pointer" :src="content.image" alt="project image"
      style="max-height: 640px;" @click="showModal = true" />
  </div>
  <Teleport to="body">
    <Transition name="fade" mode="in-out">
      <ImageModal :showModal="showModal" :imageUrl="content.image" @close="showModal = false" />
    </Transition>
  </Teleport>
</template>

<script setup>
import ImageModal from '@/components/shared/ImageModal.vue'
import { ref } from 'vue'

let showModal = ref(false)

const content = defineProps({
  description: String,
  image: String
})

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  animation-name: slidein;
  animation-duration: 1.1s;
  animation-iteration-count: 1;
  animation-fill-mode: both;

}

@keyframes slidein {
  from {
    margin-left: -100%;
  }

  to {
    margin-left: 0%;
  }
}

.fade-enter-from,
.fade-leave-to {
  animation-name: slideout;
  animation-duration: 1.1s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}

@keyframes slideout {
  from {
    margin-left: 0%;
  }

  to {
    margin-left: -100%;
  }
}
</style>
