<script setup>
import BaseButton from '@/components/buttons/BaseButton.vue';
import BaseMenu from '@/components/menus/BaseMenu.vue';
import { usePublicFunction } from '@/composables/usePublicFunction';
import { ref } from "Vue";

const { scrollToId } = usePublicFunction()
const menuSwitch = ref(false)
</script>

<template>
    <BaseMenu v-model="menuSwitch"></BaseMenu>
    <section class="w-full min-h-screen">
        <header class="absolute top-0 left-0 w-full z-10 text-end p-4 md:py-11 md:px-16">
            <BaseButton :text="'START YOUR PROJECT'"></BaseButton>
            <button class="ml-11 align-middle duration-300 hover:text-primary text-white" @click="menuSwitch = !menuSwitch">
                <span class="material-symbols-rounded od_rotateLavel text-4xl">
                    notes
                </span>
            </button>
        </header>

        <video class="absolute top-0 left-0 w-full h-full object-cover rounded-b-5xl overflow-hidden brightness-75"
            poster="@/assets/images/bg.jpg" src="@/assets/videos/DigiSalad.mp4" muted loop autoplay>
        </video>

        <div class="absolute top-0 left-0 left-0 w-full h-full p-4 md:py-11 md:px-16 flex flex-wrap">
            <div class="w-1/6 relative hidden md:block">
                <div
                    class="text-white font-bold whitespace-nowrap absolute top-1/4 -left-1/3 tracking-widest relative -rotate-90 od_line_wrap">
                    <span class="od_line ease-in duration-500"></span>
                    DIGITAL AGENCY
                </div>
            </div>
            <div class="w-5/6 mt-32">
                <img class="mb-10 od_logo" src="@/assets/images/logo.png" alt="">
                <div class="inline-block relative mb-36">
                    <h2 class="text-4xl text-white font-bold od_title">
                        WE CREATE<br>
                        AMAZING<br>
                        DIGITAL EXPERIENCES
                    </h2>
                    <div class="border-b-8 border-primary od_titel_border"></div>
                </div>
            </div>
        </div>

        <div class="absolute od_downBtn ease-in duration-500 cursor-pointer group" @click.prevent="scrollToId('about')">
            <img class="w-16 mx-auto mb-4" src="@/assets/images/salad.png" alt="">
            <div class="text-white font-bold mb-3">
                TASTE US NOW!
            </div>
            <div class="flex justify-center">
                <div class="border-r od_downBtn__topLine ease-in duration-500 "></div>
            </div>
            <div class="flex justify-center">
                <div class="border-r border-gray-400 od_downBtn__bottomLine ease-in duration-500 "></div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.od_downBtn {
    bottom: -5rem;
    left: calc(50% - 60px);

    &__topLine {
        height: 44px;
    }

    &__bottomLine {
        height: 80px;
    }

    &:hover {
        bottom: -6rem;

        .od_downBtn__topLine {
            height: 28px;
        }

        .od_downBtn__bottomLine {
            height: 96px;
        }
    }
}

.od_rotateLavel {
    transform: rotateY(180deg);
}

.od_title {
    line-height: 4.5rem;
    letter-spacing: 9px;
}

.od_logo {
    width: 200px;
}

.od_line {
    width: 100px;
    border-bottom: 1px solid white;
    position: absolute;
    top: 11px;
    left: -125px
}

.od_line_wrap:hover .od_line {
    left: -150px
}

.od_titel_border {
    margin-top: -1.75rem;
    margin-left: -0.5rem;

    &::before {
        content: " ";
        display: block;
        width: 10px;
        height: 10px;
        background: #EE6C8A;
        border-radius: 100%;
        position: absolute;
        bottom: 5px;
        right: -15px;
    }
}
</style>