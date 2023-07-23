import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('projects', () => {
  // load projects from json
  const projects = ref([])

  // fetch projects from json
  async function fetchProjects() {
    const response = await fetch('src/assets/projects.json')
    projects.value = await response.json()
    // console.log(projects.value)
  }

  return {
    projects, fetchProjects
  }
})
