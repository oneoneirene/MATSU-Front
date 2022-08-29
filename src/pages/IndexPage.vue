<template>
  <div>
    <q-carousel animated v-model="slide" navigation infinite class="window-width" height="500px" :autoplay="autoplay"
      arrows transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
      @mouseleave="autoplay = true">
      <q-carousel-slide :name="1" img-src="https://drive.google.com/uc?export=view&id=1l4XZNZaJ9Gm0YkMPhvQM776qDrOz9HqS"
        class="justify-center text-center items-center">
        <div>
          <q-img src="../imgs/matsu.gif" style="width:500px"></q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="justify-center text-center items-center" :name="2" img-src="../imgs/carousel2.jpg">
        <div>
          <q-img src="../imgs/matsu.gif" style="width:500px"></q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="justify-center text-center items-center" :name="3" img-src="https://www.matsu.idv.tw/attach/matsu-45124064335ecb4c7c9524a49e0fe49d.jpeg">
        <div>
          <q-img src="../imgs/matsu.gif" style="width:500px"></q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="justify-center text-center items-center" :name="4" img-src="https://s.newtalk.tw/album/news/419/5edf476d2a226.jpg">
        <div>
          <q-img src="../imgs/matsu.gif" style="width:500px"></q-img>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="index window-width row q-mt-none q-col-gutter-y-xs">
    <div class="picture col-xs-6 col-md-3">
      <q-img class="" to="/Announce"
        src="https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_196_24.jpg&sizetype=3">
        <div class="custom-caption absolute-center text-center" style="border-radius:5px">
          <div class="text-h4 text-center text-weight-bold">公告資訊</div>
          <div class="text-h6 text-center">時刻關心生活周遭各項事務</div>
        </div>
      </q-img>
    </div>
    <div class="picture col-xs-6 col-md-3">
      <q-img class="" to="/Food" src="https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2253&w=2000&h=2000">
        <div class="custom-caption absolute-center text-center" style="border-radius:5px">
          <div class="text-h4 text-center text-weight-bold">食宿資訊</div>
          <div class="text-h6 text-center">點擊查看各鄉餐廳與飯店詳情</div>
        </div>
      </q-img>
    </div>
    <div class="picture col-xs-6 col-md-3">
      <q-img class="" to="/Travel"
        src="https://www.seinsights.asia/sites/default/files/imagecache/node_main_img/upload/epaper/fileartpic-1.jpg"
        style="height: 100%;">
        <div class="custom-caption absolute-center text-center" style="border-radius:5px">
          <div class="text-h4 text-center text-weight-bold">旅遊資訊</div>
          <div class="text-h6 text-center">分享你的第一篇旅遊心得</div>
        </div>
      </q-img>
    </div>
    <div class="picture col-xs-6 col-md-3">
      <q-img class="" to="/Userinfo"
        src="https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_196_22.jpg&sizetype=3" style="height: 100%;">
        <div class="custom-caption absolute-center text-center " style="border-radius:5px">
          <div class="text-h4 text-center text-weight-bold">會員專區</div>
          <div class="text-h6 text-center">登入並查看你的會員資料</div>
        </div>
      </q-img>
    </div>
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
.picture:hover
  cursor: pointer
</style>
