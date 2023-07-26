<template>
  <li class="text-sm italic font-thin text-center drop-shadow-sm text-emerald-800">
    <component class="w-16 h-16" :is="getTech(tech)" />
    {{ tech }}
  </li>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
defineProps({
  tech: String
})
function getTech(tech) {
  //   console.log(tech)
  const componentPath = `../icons/Icon${tech}.vue`
  const AsyncComp = defineAsyncComponent(() => import(componentPath))
  return AsyncComp
}
</script>
