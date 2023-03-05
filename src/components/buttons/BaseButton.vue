<script setup>
const props = defineProps(['text', 'class'])
</script>

<template>
    <button :class="props.class" class="bg-gradient-to-r from-secondary to-primary hover:scale-105 ease-in duration-300 px-5 py-2.5 rounded-full text-white align-middle font-bold">{{ props.text }}</button>
</template>