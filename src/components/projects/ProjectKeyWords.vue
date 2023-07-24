<template>
  <div>
    <li class="text-xl italic font-thin underline text-emerald-800 drop-shadow-md">#{{ keyword }}</li>
  </div>
</template>

<script setup>
defineProps({
  keyword: String
})
</script>
