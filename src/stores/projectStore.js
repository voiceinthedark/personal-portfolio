import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('projects', () => {
  // load projects from json
  const projects = ref([])

  // fetch projects from json
  async function fetchProjects() {
    const response = await fetch('/personal-portfolio/projects.json')
    projects.value = await response.json()
  }

  return {
    projects,
    fetchProjects
  }
})
