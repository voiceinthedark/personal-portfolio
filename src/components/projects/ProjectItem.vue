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

    <div class="grid lg:grid-cols-3 md:grid-cols-1">
        <ProjectHeader :title="project.project.title"  />
        <ProjectContent :description="project.project.description" :image="project.project.image" />
        <ProjectFooter />
    </div>

</template>