<script setup>
import ProjectHeader from '@/components/projects/ProjectHeader.vue'
import ProjectContent from '@/components/projects/ProjectContent.vue'
import ProjectFooter from '@/components/projects/ProjectFooter.vue'

let project = defineProps({
  project: Object
})
</script>

<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-1">
    <div class="flex flex-col lg:row-span-2">
      <ProjectHeader :title="project.project.title" />
      <ProjectFooter :project="project" />
    </div>
    <ProjectContent :description="project.project.description" :image="project.project.image" />
  </div>
</template>
