<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavLink from './components/shared/NavLink.vue';

const route = useRoute();
console.log(route.name);
</script>

<template>
  <header>
    <div class="flex flex-row">
      <nav class="flex flex-row gap-3 p-3 mb-4 space-x-2 text-2xl bg-transparent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


