<template>
  <ul class="flex flex-row flex-wrap gap-2 p-2 mt-2">
    <ProjectKeyWords
      v-for="keyword in project.project.keywords"
      :key="keyword"
      :keyword="keyword"
    />
  </ul>
  <hr class="mx-3 my-2 border-b border-emerald-500/50" />
  <span class="text-base text-emerald-700">Technologies used:</span>
  <ul class="flex flex-row flex-wrap gap-2 p-2 mt-2">
    <ProjectTech v-for="tech in project.project.technologies" :key="tech" :tech="tech" />
  </ul>
  <hr class="mx-3 my-2 border-b border-emerald-500/50" />
  <div class="flex items-center justify-between gap-2 mx-4">
    <a :href="project.project.github" target="_blank">
      <IconGithub class="w-12 h-12" />
    </a>
    <template v-if="project.project.demo">
      <a :href="project.project.demo" target="_blank">
        <span
          class="px-4 py-2 text-base text-white border rounded-md border-emerald-400 bg-emerald-600 hover:bg-emerald-800"
          >Demo</span
        >
      </a>
    </template>
  </div>
</template>
<script setup>
import ProjectKeyWords from '@/components/projects/ProjectKeyWords.vue'
import ProjectTech from './ProjectTech.vue'
import IconGithub from '@/components/icons/IconGithub.vue'

defineProps({
  project: Object
})
</script>
