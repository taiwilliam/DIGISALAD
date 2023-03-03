<script setup>
const props = defineProps(['text'])
console.log(props)
</script>

<template>
    <div class="text-center py-3">
        <h3 class="od-title text-xl font-bold">
            {{ props.text }}
        </h3>

    </div>
</template>

<style scoped lang="scss">
.od-title{
    letter-spacing: 3.5px;
}
</style>
