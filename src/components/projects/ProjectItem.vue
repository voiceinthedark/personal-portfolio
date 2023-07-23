<script setup>
import ProjectHeader from '@/components/projects/ProjectHeader.vue';
import ProjectContent from '@/components/projects/ProjectContent.vue';
import ProjectFooter from '@/components/projects/ProjectFooter.vue';

let project = defineProps({
    project: Object,
});

console.log(project.project.title);
</script>

<template>
    <ProjectHeader :title="project.project.title"  />
    <ProjectContent :description="project.project.description" :image="project.image" />
    <ProjectFooter />

</template>