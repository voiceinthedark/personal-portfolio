<script setup>
import { RouterView } from 'vue-router'
import NavLink from './components/shared/NavLink.vue';

// const route = useRoute();
</script>

<template>
  <header class="mb-20">
    <div class="flex flex-row">
      <nav class="fixed flex flex-row w-full gap-3 p-3 space-x-2 text-2xl rounded-sm md:bg-transparent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </div>
  </header>

  <RouterView v-slot="{ Component, route }">
      <Transition :enter-active-class="route.meta.transitionIn || 'slide'"
        :leave-active-class="route.meta.transitionOut || 'slide'" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
</template>


<style scoped>
.slide-enter-active {
  animation-name: slideleft;
  animation-duration: 2.2s;
}

.slide-in-left {
  animation-name: slideinleft;
  animation-duration: 1.2s;
}

@keyframes slideinleft {
  from {
    margin-left: -100%;
    opacity: 0;    
  }    
  to {
    margin-left: 0%;
    opacity: 1;    
  }
}

.slide-out-left {
  animation-name: slideoutleft;
  animation-duration: 1.2s;
}

@keyframes slideoutleft {
  from {
    margin-left: 0%;
    opacity: 1;    
  }    
  to {
    margin-left: -100%;
    opacity: 0;    
  }
}

.slide-in-right {
  animation-name: slideinright;
  animation-duration: 1.2s;
}

@keyframes slideinright {
  from {
    margin-left: 100%;
    opacity: 0;    
  }    
  to {
    margin-left: 0%;
    opacity: 1;    
  }
}

.slide-out-right {
  animation-name: slideoutright;
  animation-duration: 1.2s;
}

@keyframes slideoutright {
  from {
    margin-left: 0%;
    opacity: 1;    
  }    
  to {
    margin-left: 100%;
    opacity: 0;    
  }
}


</style>