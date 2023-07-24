<template>
    <div>
        <ul class="flex flex-row flex-wrap gap-2 p-2 mt-2">
            <li class="text-xl italic font-thin text-emerald-600" v-for="keyword in project.project.keywords" :key="keyword">#{{ keyword }}</li>
        </ul>
    </div>    
    <div>
        <ul class="flex flex-row flex-wrap gap-2 p-2 mt-2">
            <li v-for="tech in project.project.technologies" :key="tech" class="text-xl italic font-thin text-emerald-600">
                <component class="w-16 h-16" :is="getTech(tech)" />
            </li>
        </ul>
    </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
defineProps({
    project: Object
})
function getTech(tech) {
    console.log(tech);
    const componentPath = `../icons/Icon${tech}.vue`;
    const AsyncComp = defineAsyncComponent(() => import(componentPath));
    return AsyncComp;
}
</script>