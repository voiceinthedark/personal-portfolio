<template>
  <RouterLink
    class="font-bold transition-transform text-emerald-900 hover:scale-105 hover:rotate-360"
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
  color: rgb(2, 56, 34);
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
}
</style>
