<script setup>
import BaseHeader from '../components/headers/BaseHeader.vue'
import BaseTitle from '@/components/text/BaseTitle.vue';

</script>

<template>
    <BaseHeader></BaseHeader>
    <!-- <div class="dsafdsagf">asfasfsaf</div> -->
    <div class="od_topSpace"></div>
    <div class="container mx-auto od_container px-4 md:px-0">
        <BaseTitle :text="'ABOUT DIGISALAD'" :class="'my-16'" :size="2" :id="'about'"></BaseTitle>
        <div class="od_videobox mb-8">
            <iframe src="https://www.youtube.com/embed/IeIRJ9jZ5Ro" title="DigiSalad - 為您創造驚喜的用戶體驗" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>

        <p class="text-center text-slate-800 leading-loose mb-8">Cras quis nulla commodo, aliquam lectus sed, blandit augue.
            Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
            ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec
            id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed
            lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus
            neque eros nec lacus. Cras lobortis molestie faucibus.</p>
    </div>
</template>

<style lang="scss" scoped>
.od_topSpace {
    height: 118px;
}
</style>
