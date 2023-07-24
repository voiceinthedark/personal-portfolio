<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavLink from './components/shared/NavLink.vue';

const route = useRoute();
console.log(route.name);
</script>

<template>
  <header class="mb-16">
    <div class="flex flex-row">
      <nav class="fixed flex flex-row w-full gap-3 p-3 space-x-2 text-2xl rounded-sm bg-gradient-to-br from-emerald-200/25 via-cyan-400/25 to-emerald-600/25">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </div>
  </header>

  <RouterView  />
</template>


