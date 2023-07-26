<script setup>
import SvgAvatarTransparent from '@/components/shared/SvgAvatarTransparent.vue'
import IconGithub from '../components/icons/IconGithub.vue'
import IconJekyll from '@/components/icons/IconJekyll.vue'
import { ref } from 'vue';

let person = ref({});
let isLoading = ref(true);

async function fetchData(){
  isLoading.value = true;
  const response = await fetch('/personal-portfolio/selfStore.json');
  person.value = await response.json();
  isLoading.value = false;
}

fetchData();
</script>

<template>
  <main>
    <div v-if="isLoading">Loading...</div>  
    <div class="grid lg:grid-cols-6" v-else>
      <div class="font-semibold text-center w-[17rem] text-zinc-50">
        <span class="text-3xl"
          >Hi my name is
          <span class="text-4xl font-bold underline text-emerald-900">Firas Abbas</span> and I am a
          software engineer</span
        >
      </div>
      <div class="flex h-[100vh] col-span-5 flex-col items-center">
        <SvgAvatarTransparent />        
        <span class="mt-2 text-2xl text-zinc-50">{{ person.person.about }}</span>
        <div class="flex gap-1 mt-2">
          <a :href="person.person.github_repo" target="_blank">
            <IconGithub class="w-16 h-16" />
          </a>
          <a :href="person.person.personal_website" target="_blank">
            <IconJekyll class="w-16 h-16" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
