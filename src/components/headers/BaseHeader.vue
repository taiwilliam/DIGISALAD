<script setup>
import BaseButton from '../buttons/BaseButton.vue';
import BaseMenu from '@/components/menus/BaseMenu.vue';
import { useRouter } from 'vue-router'
import { ref } from "Vue";
const router = useRouter()

const menuSwitch = ref(false)
</script>

<template>
    <BaseMenu v-model="menuSwitch"></BaseMenu>
    <header class="w-full fixed flex top-0 bg-white py-4 px-4 z-10 md:py-8 md:px-20">
        <img @click="router.push('/')" class="inline-block mr-auto hidden md:block" src="@/assets/images/logo-color.png" alt="">
        <img @click="router.push('/')" class="inline-block mr-auto w-11 h-11 block md:hidden" src="@/assets/images/logo-ball.png" alt="">


        <BaseButton :text="'START YOUR PROJECT'" :class="'ml-auto'"></BaseButton>
        <button class="ml-11 align-middle duration-300 hover:text-primary text-gray-600" @click="menuSwitch = !menuSwitch">
            <span class="material-symbols-rounded od_rotateLavel text-4xl">
                notes
            </span>
        </button>
    </header>
</template>

<style lang="scss" scoped></style>