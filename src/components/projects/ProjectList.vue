<script setup>
import { onMounted } from 'vue';
import { useProjectStore } from '../../stores/projectStore';
import ProjectItem from './ProjectItem.vue';

const projects = useProjectStore();
projects.fetchProjects();

onMounted(() => {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    scrollWrapper.addEventListener("scroll", handleScroll);
})

function handleScroll(event) {
    const scrollWrapper = event.target;
      const scrollPosition = scrollWrapper.scrollTop;
      const snapHeight = scrollWrapper.clientHeight;
      const currentIndex = Math.round(scrollPosition / snapHeight);
      scrollWrapper.scrollTop = currentIndex * snapHeight; 
}

</script>

<template>
    <div class="scroll-container">
        <div class="grid grid-flow-row place-items-center">
            <template v-for="project in projects.projects.items" :key="project.id">
                <div class="mb-10 bg-white/50 w-[80%] min-h-[200px] p-2 rounded-lg shadow-sm scroll-wrapper">
                    <ProjectItem :project="project" />
                </div>
            </template>
        </div>
    </div> 
</template>

<style>
.scroll-container {
  overflow-y: scroll;
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  height: 100vh;
}

.scroll-wrapper {
  scroll-snap-align: start;
}
</style>