<template>
  <div>
    <li class="text-sm italic font-thin underline text-emerald-700 drop-shadow-md">#{{ keyword }}</li>
  </div>
</template>

<script setup>
defineProps({
  keyword: String
})
</script>
