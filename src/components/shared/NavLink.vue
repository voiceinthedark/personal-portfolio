<template>
  <RouterLink
    class="font-bold transition-transform text-emerald-900 hover:scale-110 hover:rotate-360"
  >
    <slot />
  </RouterLink>
</template>

<script setup>
defineProps({
  active: Boolean,
  href: String
})
</script>

<style scoped>
.active {
  border-bottom: 1px solid;
  border-color: rgb(1, 70, 41);
  color: rgb(13, 80, 52);
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-transform: uppercase;  
  letter-spacing: 1px;
}

</style>
