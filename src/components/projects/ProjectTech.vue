<template>
  <li class="text-sm italic font-thin text-center drop-shadow-sm text-emerald-800">
    <component class="w-16 h-16" :is="getTech(tech)" />
    {{ tech }}
  </li>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const icons = import.meta.glob('../icons/Icon*.vue', { eager: true });
// console.log(icons);
defineProps({
  tech: String
})
function getTech(tech) {
  //   console.log(tech)
  const componentPath = `/src/components/icons/Icon${tech}.vue`
  const AsyncComp = defineAsyncComponent(() => import(componentPath))
  return AsyncComp
}
</script>
