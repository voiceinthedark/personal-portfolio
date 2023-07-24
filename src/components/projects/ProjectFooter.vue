<template>
  <ul class="flex flex-row flex-wrap gap-2 p-2 mt-2">
      <ProjectKeyWords v-for="keyword in project.project.keywords" :key="keyword" :keyword="keyword" />
  </ul>
    <hr class="mx-3 my-2 border-b border-emerald-500/50"/>
    <span class="text-base text-emerald-700">Technologies used:</span>
    <ul class="flex flex-row flex-wrap gap-2 p-2 mt-2">
      <ProjectTech v-for="tech in project.project.technologies"
        :key="tech" :tech="tech" />
    </ul>
  
</template>
<script setup>
import ProjectKeyWords from '@/components/projects/ProjectKeyWords.vue'
import ProjectTech from './ProjectTech.vue';

defineProps({
  project: Object
})

</script>
