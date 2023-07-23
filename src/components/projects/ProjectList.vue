<script setup>
import { useProjectStore } from '../../stores/projectStore';
import ProjectItem from './ProjectItem.vue';

const projects = useProjectStore();
projects.fetchProjects();
</script>

<template>
    <template v-for="project in projects.projects.items" :key="project.id">
        <div class="mb-2 bg-white/50 w-[40%] min-h-[200px] p-2 rounded-lg shadow-sm">
            <ProjectItem :project="project" />
        </div>
    </template>    
</template>