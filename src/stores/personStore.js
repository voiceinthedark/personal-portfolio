import { defineStore } from 'pinia'

export const usePersonStore = defineStore('person', {
  state: () => ({
    person: null
  }),
  actions: {
    async fetchUserData() {
      try {
        console.log('Fetching user data...')
        const response = await fetch('src/assets/selfStore.json')
        this.person = response.json()
        console.log('User data fetched successfully:', this.person)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
  }
})
