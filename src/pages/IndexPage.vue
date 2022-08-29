<template>
  <div>
    <q-carousel animated v-model="slide" navigation infinite class="window-width" height="500px" :autoplay="autoplay" arrows
      transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
      @mouseleave="autoplay = true">
      <q-carousel-slide :name="1"
        img-src="https://drive.google.com/uc?export=view&id=1l4XZNZaJ9Gm0YkMPhvQM776qDrOz9HqS"
        class="row justify-center text-center items-center">
        <div class="custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="../imgs/carousel2.jpg" />
      <q-carousel-slide :name="3" img-src="https://www.matsu.idv.tw/attach/matsu-45124064335ecb4c7c9524a49e0fe49d.jpeg"/>
      <q-carousel-slide :name="4" img-src="https://s.newtalk.tw/album/news/419/5edf476d2a226.jpg" />
    </q-carousel>
  </div>
  <div class="index window-width row q-mt-none q-col-gutter-y-xs">
    <div class="picture col-xs-6 col-md-3"><q-img class="" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img></div>
    <div class="picture col-xs-6 col-md-3"><q-img class="" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img></div>
    <div class="picture col-xs-6 col-md-3"><q-img class="" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img></div>
    <div class="picture col-xs-6 col-md-3"><q-img class="" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref('1')
const autoplay = ref(true)
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: left
  padding: 12px
  color: white
  width: 300px
  background-color: rgba(0, 0, 0, .3)
</style>
