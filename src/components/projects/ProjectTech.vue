<template>
  <li class="text-sm italic font-thin text-center drop-shadow-sm text-emerald-800">
    <component class="w-16 h-16" :is="getTech(tech)" v-if="getTech(tech)" />
    {{ tech }}
  </li>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

// console.log(icons);
defineProps({
  tech: String
})
function getTech(tech) {
  return defineAsyncComponent(() => import(`@/components/icons/Icon${tech}.vue`))
}
</script>
