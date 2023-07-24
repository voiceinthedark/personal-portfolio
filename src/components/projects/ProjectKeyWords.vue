<template>
  <div>
    <li class="text-xl italic font-thin text-emerald-600">#{{ keyword }}</li>
  </div>
</template>

<script setup>
defineProps({
  keyword: String
})
</script>
