<template>
  <div v-if="isLoading"></div>
  <div class="grid mx-3 lg:grid-cols-5 lg:grid-rows-3 text-zinc-50" v-else>
    <span class="text-5xl font-bold text-neutral-100">Biography</span>
    <div
      class="font-medium prose prose-2xl prose-p:text-neutral-100 lg:col-span-4 lg:col-start-2"
      v-html="md(person.person.bio)"
    ></div>
    <span class="mt-24 text-5xl font-bold text-neutral-100">Skills</span>
    <div class="mt-24 lg:col-span-4 lg:col-start-2">
      <ul
        class="font-semibold prose prose-xl list-disc prose-neutral prose-li:text-neutral-100 prose-li:marker:text-lime-300"
      >
        <li v-for="skill in person.person.skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
    <span class="mt-5 text-5xl font-bold text-neutral-100">Techs</span>
    <div class="mt-5 lg:w-[80%] lg:col-span-4">
      <ul class="flex flex-row flex-wrap gap-2">
        <ProjectTech v-for="tech in person.person.technologies" :key="tech" :tech="tech" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import ProjectTech from '@/components/projects/ProjectTech.vue'
import { ref } from 'vue'

let person = ref({})
let isLoading = ref(true)

async function fetchData() {
  isLoading.value = true
  const response = await fetch('/personal-portfolio/selfStore.json')
  person.value = await response.json()
  isLoading.value = false
}

fetchData()
</script>
