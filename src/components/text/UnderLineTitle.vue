<script setup>
const props = defineProps(['text', 'class', 'line_color', 'show_point'])
</script>

<template>
    <div class="inline-block text-white font-blod relative" :class="props.class">
        {{ props.text }}
        <div v-if="show_point" class="border-b-8 od_border active" :class="line_color ? line_color : 'border-yellow-400'"></div>
        <div v-else class="border-b-8 od_border" :class="line_color ? line_color : 'border-yellow-400'"></div>
    </div>
</template>

<style scoped lang="scss">
.active.od_border {
    width: calc(100% + 12px);
    margin-top: -0.75rem;
    margin-left: -6px;
    &::before {
        content: " ";
        display: block;
        width: 10px;
        height: 10px;
        background: #EE6C8A;
        border-radius: 100%;
        position: absolute;
        bottom: 5px;
        right: -35px;
    }
}

.od_border {
    width: calc(100% + 12px);
    margin-top: -0.75rem;
    margin-left: -6px;
}
</style>
