<template>
    <div>
        <ul class="flex flex-row flex-wrap gap-2 p-2 mt-2">
            <li class="text-xl italic font-thin text-emerald-600" v-for="keyword in project.project.keywords" :key="keyword">#{{ keyword }}</li>
        </ul>
    </div>    
</template>
<script setup>
defineProps({
    project: Object
})
</script>