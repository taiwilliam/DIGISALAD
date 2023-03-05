<script setup>
import VedioHeader from '@/components/headers/VedioHeader.vue';
import BaseTitle from '@/components/text/BaseTitle.vue';
import UnderLineTitle from '@/components/text/UnderLineTitle.vue';
import SquareButton from '@/components/buttons/SquareButton.vue'
import { usePublicFunction } from '@/composables/usePublicFunction';
import { useRouter } from 'vue-router'
import { onMounted } from "Vue";

const router = useRouter()
const { fadeIn, debounce } = usePublicFunction()

onMounted(() => {
  document.addEventListener('scroll', debounce(fadeIn))
})

</script>

<template>
  <main>
    <VedioHeader></VedioHeader>

    <div class="container mx-auto mt-28 od_container px-4 md:px-0">
      <BaseTitle :text="'ABOUT DIGISALAD'" :class="'mb-16'" :size="2" :id="'about'"></BaseTitle>

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

      <div class="text-center mb-16">
        <SquareButton :text="'VIEW MORE'" @click="router.push('about')"></SquareButton>
      </div>
    </div>


    <div class="mt-60">
      <div class="p-8 pb-32 bg-white rounded-b-5xl rounded-tl-5xl -mt-48 md:ml-24 md:float-right md:p-16">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3">
            <BaseTitle :text="'AWARDS'" :class="'mb-8'" :size="1"></BaseTitle>
            <p class="text-slate-800 leading-loose">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
              ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
              ornare.
              Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id
              dignissim nunc. </p>
          </div>
          <div class="w-full md:w-2/3 flex flex-wrap">
            <template v-for="(item, index) in 4" :key="index">
              <div class="w-1/2 mt-8 md:mt-0 md:w-1/2">
                <img class="mx-auto od_fadeIn" src="@/assets/images/reward.png" alt="">
              </div>
            </template>
          </div>
        </div>
      </div>


      <div class="rounded-5xl p-8 -mt-16 bg-primary md:py-72 md:-mt-0 md:p-16">
        <div class="container mx-auto od_container">
          <BaseTitle :text="'OUR INGRADIENTS'" :class="'mb-8 text-white'" :size="2" :color="'purple'"></BaseTitle>

          <p class="text-white leading-loose mb-12 text-center">Cras quis nulla commodo, aliquam lectus sed, blandit
            augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula
            vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
            Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci
            odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus,
            ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>

          <div class="text-center mb-24">
            <SquareButton :text="'OUR SERVICES'" :class="'od_purple'"></SquareButton>
          </div>

          <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
            <template v-for="(item, index) in 9" :key="index">
              <div class="text-center od_fadeIn">
                <div class="mx-auto bg-white p-4 rounded-full w-1/3">
                  <div class="image-square">
                    <img class="" :src="`/src/assets/images/fruit-${index + 1}.png`" alt="">
                  </div>
                </div>
                <h5 class="text-white text-xl font-bold my-4">UX Design</h5>
                <p class="text-white leading-loose mb-6 text-center">
                  Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis
                  tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
                </p>
                <button
                  class="px-8 py-5 text-white border border-white rounded-full hover:bg-white hover:text-primary ease-in duration-300">VIEW
                  MORE</button>
              </div>
            </template>
          </div>

          <div class="text-center">
            <UnderLineTitle :text="'VIEW MORE DIGISALAD’S INGRADIENTS'" :class="'text-lg my-24 md:mb-0'"></UnderLineTitle>
          </div>
        </div>
      </div>

      <div
        class="p-8 bg-white rounded-b-5xl rounded-tr-5xl -mt-20 float-left bg-[url('@/assets/images/shutterstock_675737842.png')] od_box bg-cover md:-mt-48 md:p-24">
        <div class="flex flex-wrap content-center">
          <div class="w-full text-center md:w-1/3">
            <img class="mx-auto" src="@/assets/images/Mask_Group.png" alt="">
            <span class="mt-4 mb- font-bold text-white block">TONY NG</span>
            <p class="italic text-white">Founder & Creative Director</p>
          </div>

          <div class="w-full md:w-2/3">
            <img class="mx-auto mb-4" src="@/assets/images/left-quote.png" alt="">
            <p class="text-white tracking-widest leading-loose text-xl">A great digital work isn’t about designing
              beautiful pages
              purely. It is about context - how do we deliver the right experience to the <span class="text-yellow-400">
                right
                person at the right time.</span> The most important thing is that your work can engage customers at
              anytime, anywhere and let users experience an entire amazing digital journey.</p>
          </div>
        </div>
      </div>
      <div class="clear-both"></div>
    </div>

    <div class="container mx-auto od_container mt-16 px-4 md:px-0">
      <BaseTitle :text="'OUR BRAND EXPERIENCE'" :class="'mb-8 hidden md:block'" :size="3"></BaseTitle>
      <BaseTitle :text="'OUR BRAND EXPERIENCE'" :class="'mb-8 block md:hidden'" :size="2"></BaseTitle>

      <p class="text-center leading-loose text-slate-800">Cras quis nulla commodo, aliquam lectus sed, blandit augue.
        Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
        ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec
        id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed
        lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus
        neque eros nec lacus. Cras lobortis molestie faucibus.</p>

      <div class="grid grid-cols-3 gap-3 mt-8 md:grid-cols-7">
        <template v-for="(item, index) in 35" :key="index">
          <div class="image-square od_fadeIn">
            <img class="" :src="`/src/assets/images/brand-${index + 1}.png`" alt="">
          </div>
        </template>
      </div>
    </div>

    <div class="px-12 py-12 mt-16 bg-[url('@/assets/images/LP_fb_01.png')] bg-cover relative md:px-24 md:py-40">
      <div class="absolute top-0 bottom-0 left-0 right-0 od_fuzzy"></div>
      <div class="container mx-auto od_container relative">
        <div class="grid grid-cols-1 gap-12 relative od_swiper md:grid-cols-2">
          <div class="image-square rounded-4xl overflow-hidden">
            <img class="" src="@/assets/images/LP_fb_01.png" alt="">
          </div>
          <div class="md:pt-16">
            <p class="text-white text-bold mb-6">HIGHLIGHTED SHOWCASE</p>
            <UnderLineTitle :text="'LP CLUB MOBILE APP'" :class="'text-4xl mb-8 mt-0'" :line_color="'border-primary'"
              :show_point="true"></UnderLineTitle>
            <p class="text-white">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
              bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at
              semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim
              nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
              elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros
              nec lacus. Cras lobortis molestie faucibus.</p>
          </div>

          <SquareButton :text="'VIEW PROJECT'" :class="'od_swiper__btn md:absolute'"></SquareButton>

          <button class="p-2.5 bg-primary absolute rounded-full text-white od_swiper__leftBtn hover:scale-105 ease-in duration-300 hidden md:block">
            <span class="material-symbols-rounded align-bottom text-4xl leading-9">
              keyboard_arrow_left
            </span>
          </button>

          <button class="p-2.5 bg-primary absolute rounded-full text-white od_swiper__rightBtn hover:scale-105 ease-in duration-300 hidden md:block">
            <span class="material-symbols-rounded align-bottom text-4xl leading-9">
              keyboard_arrow_right
            </span>
          </button>
        </div>
      </div>
    </div>

  </main>
</template>


<style lang="scss" scoped>

.od_swiper{
  &__btn{
    bottom: calc(-45px);
    left: calc(50% - 117px);
  }
  &__leftBtn{
    left: -72px;
    bottom: calc(50% - 26px)
  }
  &__rightBtn{
    right: -72px;
    bottom: calc(50% - 26px)
  }
}

.od_fuzzy {
  background-color: rgba(0, 0, 0, .7);
  backdrop-filter: blur(5px);
}

.od_box {
  width: 100%;
  @media (min-width: 768px) {
    width: calc(100% - 6rem);
  }
}

.od_purple {
  background: #585880;
}
</style>