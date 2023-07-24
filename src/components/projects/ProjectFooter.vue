<template>
    <div>
        <ul class="flex flex-row flex-wrap gap-2 p-2 mt-2">
            <li class="text-xl italic font-thin text-emerald-600" v-for="keyword in project.project.keywords" :key="keyword">#{{ keyword }}</li>
        </ul>
    </div>    
    <div>
        <ul>
            <li v-for="tech in project.project.technologies" :key="tech" class="text-xl italic font-thin text-emerald-600">{{ tech }}</li>
        </ul>
    </div>
</template>
<script setup>
defineProps({
    project: Object
})
</script>