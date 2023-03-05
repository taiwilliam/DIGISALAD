<script setup>
import { useRouter } from 'vue-router'
import { watch } from "Vue";
const router = useRouter()

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

watch(() => props.modelValue, (first) => {
    document.body.style['overflowY'] = first ? 'hidden' : 'initial'
});

</script>

<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 z-20 p-10 od_bg overflow-auto" :class="{ hidden: !props.modelValue }">
        <div class="grid grid-cols-2">
            <div class="">
                <img class="od_logo mb-8 md:mb-0" src="@/assets/images/logo.png" alt="">
            </div>
            <div class="text-end">
                <span class="material-symbols-rounded text-4xl text-white cursor-pointer hover:text-gray-300"
                    @click="emit('update:modelValue', false)">
                    close
                </span>
            </div>
        </div>
        <div class="flex flex-wrap gap-8 px-0 pt-4 overflow-y-scroll md:flex-nowrap md:px-24 md:gap-12 md:overflow-hidden">
            <div class="w-3-8 md:pt-12">
                <div @click="router.push('about')"
                    class="bg-[url('@/assets/images/menu-bg-1.png')] px-12 py-16 bg-primary rounded-3xl mb-8 cursor-pointer hover:scale-105 ease-in duration-300 md:mb-12">
                    <div class="grid grid-cols-4 gap-4 content-end mt-4">
                        <div class="col-auto">
                            <img class="" src="@/assets/images/fruit-1.png" alt="">
                        </div>
                        <div class="col-span-3">
                            <p class="text-white tracking-widest">EMPOWERING BRANDS</p>
                            <p class="text-white tracking-widest text-3xl od_point relative inline-block">ABOUT US</p>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-[url('@/assets/images/menu-bg-2.png')] p-12 bg-rose-400 rounded-3xl cursor-pointer hover:scale-105 ease-in duration-300">
                    <div class="grid grid-cols-4 gap-4 content-end mt-32">
                        <div class="col-auto">
                            <img class="" src="@/assets/images/fruit-2.png" alt="">
                        </div>
                        <div class="col-span-3">
                            <p class="text-white tracking-widest">CASE STUDIES</p>
                            <p class="text-white tracking-widest text-3xl od_point od_point__primary relative inline-block">
                                WORKS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-2-8 pt-12">
                <div
                    class="bg-[url('@/assets/images/menu-bg-3.png')] p-12 bg-amber-300 rounded-3xl -mt-12 mb-8 cursor-pointer hover:scale-105 ease-in duration-300 md:mb-12">
                    <div class="grid gap-4 content-end mt-48">
                        <div class="col-span-2">
                            <img class="" src="@/assets/images/fruit-3.png" alt="">
                        </div>
                        <div class="">
                            <p class="text-white tracking-widest">BE COOL WITH US</p>
                            <p class="text-white tracking-widest text-3xl od_point relative inline-block">CAREERS</p>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-[url('@/assets/images/menu-bg-4.png')] p-12 bg-emerald-400 rounded-3xl cursor-pointer hover:scale-105 ease-in duration-300">
                    <div class="grid gap-4 content-end mt-12">
                        <div class="col-span-2">
                            <img class="" src="@/assets/images/fruit-3.png" alt="">
                        </div>
                        <div class="">
                            <p class="text-white tracking-widest">OUR STRATEGIES</p>
                            <p class="text-white tracking-widest text-3xl od_point relative inline-block">INSIGHTS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-3-8 md:pt-12">
                <div
                    class="bg-[url('@/assets/images/menu-bg-5.png')] p-12 bg-indigo-900 rounded-3xl mb-8 cursor-pointer hover:scale-105 ease-in duration-300 md:mb-12">
                    <div class="grid gap-4 content-end mt-20">
                        <div class="col-span-2">
                            <img class="" src="@/assets/images/fruit-4.png" alt="">
                        </div>
                        <div class="">
                            <p class="text-white tracking-widest">BE COOL WITH US</p>
                            <p class="text-white tracking-widest text-3xl od_point relative inline-block">CAREERS</p>
                        </div>
                    </div>
                </div>
                <div class="px-12 py-16 bg-white rounded-3xl cursor-pointer hover:scale-105 ease-in duration-300">
                    <p class="tracking-widest">OUR STRATEGIES</p>
                    <p class="text-primary tracking-widest text-3xl od_point relative inline-block">INSIGHTS</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.w-3-8 {
    width: 100%;

    @media (min-width: 768px) {
        width: 37.5%;
    }
}

.w-2-8 {
    width: 100%;

    @media (min-width: 768px) {
        width: 25%;
    }
}

.od_bg {
    background: linear-gradient(180deg, rgba(88, 88, 128, .9), rgba(38, 198, 208, .9) 95.7%);
}

.od_point::before {
    content: " ";
    display: block;
    width: 10px;
    height: 10px;
    background: #EE6C8A;
    border-radius: 100%;
    position: absolute;
    bottom: 7px;
    right: -20px;
}

.od_point__primary.od_point::before {
    background: #26C6D0;
}
</style>
