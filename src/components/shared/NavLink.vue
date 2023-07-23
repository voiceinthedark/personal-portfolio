<template>
    <RouterLink class="text-emerald-700 hover:scale-110  transition-transform hover:rotate-360 font-bold">
        <slot />
    </RouterLink>
</template>

<script setup>
defineProps({
    active: Boolean,
    href: String
})
</script>

<style scoped>
.active {
    text-decoration: underline;
}
</style>
