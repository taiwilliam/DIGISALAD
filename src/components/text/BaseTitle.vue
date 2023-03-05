<script setup>
import wavyLinePurple from '@/assets/images/wavy-line-purple.svg'
import wavyLine from '@/assets/images/wavy-line.svg'

const props = defineProps(['text','class','size', 'color', 'id'])
const imageUrl = props.color === 'purple' ? wavyLinePurple : wavyLine
</script>

<template>
    <div class="text-center pb-6" :class="props.class" :id="props.id">
        <h3 class="od_title text-3xl font-bold od-wavy flex justify-center relative">
            {{ props.text }}
            <div class="absolute -bottom-5 flex od_line">
                <template v-for="(site, index) in props.size" :key="index">
                    <img :class="props.color" :src="imageUrl" alt="">
                </template>
            </div>
        </h3>
    </div>
</template>

<style scoped lang="scss">
.od_title {
    letter-spacing: 3.5px;
}

.od_line::before {
    content: " ";
    display: block;
    width: 10px;
    height: 10px;
    background: #EE6C8A;
    border-radius: 100%;
    position: absolute;
    bottom: 27.5px;
    right: 7.5px;
}

.od_line {
    img:first-of-type {
        margin-left: 10px;
    }

    img {
        margin-left: -5px;
        width: 180px;
    }
}
</style>
