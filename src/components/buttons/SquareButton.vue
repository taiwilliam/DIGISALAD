<script setup>
const props = defineProps(['text','class'])
</script>

<template>
    <button class="bg-primary px-7 py-8 text-white font-bold group" :class="props.class">
        <span class="align-middle tracking-widest">{{ props.text }}</span>
        <span class="align-middle od_buttonLine border-b-2 ml-4 group-hover:ml-6 ease-in duration-300"></span>
    </button>
</template>

<style lang="scss" scoped>
    .od_buttonLine{
        width: 50px;
        display: inline-block;
    }
</style>