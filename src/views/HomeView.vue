<script setup>
import SvgAvatarTransparent from '@/components/shared/SvgAvatarTransparent.vue'
import { usePersonStore } from '../stores/personStore.js'
import IconGithub from '../components/icons/IconGithub.vue'

const person = usePersonStore()

person.fetchUserData()
</script>

<template>
  <main>
    <div class="grid lg:grid-cols-6">
      <div class="w-64 font-semibold text-center text-zinc-50">
        <span class="text-3xl"
          >Hi my name is
          <span class="text-4xl font-bold underline text-emerald-900">Firas Abbas</span> and I am a
          Web Developer</span
        >
      </div>
      <div class="flex h-[100vh] col-span-5 flex-col items-center">
        <SvgAvatarTransparent />
        <span class="mt-2 text-2xl text-zinc-50">{{ person.data.person.about }}</span>
        <div class="flex gap-1 mt-2">
          <a :href="person.data.person.github_repo" target="_blank">
            <IconGithub class="w-16 h-16" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
