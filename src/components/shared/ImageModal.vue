<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="absolute top-0 left-0 text-white transition-transform cursor-pointer text-7xl hover:rotate-360" @click="$emit('close')">&times;</span>
      <img :src="imageUrl" alt="Modal Image" @click="$emit('close')"/>
    </div>
  </div>
</template>

<script setup>
defineProps({
    imageUrl: {
      type: String,
      required: true
    },
    showModal: {
      type: Boolean,
      required: true
    }
});

</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  max-width: 80%;
  max-height: 80%;
}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>
