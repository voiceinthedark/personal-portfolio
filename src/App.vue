<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavLink from './components/shared/NavLink.vue';

const route = useRoute();
console.log(route.name);
</script>

<template>
  <header>
    <div class="flex flex-row">
      <nav class="flex flex-row gap-3 mb-4 p-3 space-x-2 bg-transparent text-2xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


