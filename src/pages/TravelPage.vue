<template>
  <div class="q-pa-md">
    <h5 style="text-align:center">景點介紹</h5>
      <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      ref="carousel"
      infinite
      id="attractions"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div id="caption" class="custom-caption">
          <div class="text-h2 text-white">First stop</div>
          <div class="text-subtitle1 text-white">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="text-white rounded-borders"
          style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
        >
          <q-toggle dense dark color="orange" v-model="autoplay" label="Auto Play" />
        </q-carousel-control>

        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push round dense color="blue" text-color="white" icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push round dense color="blue" text-color="white" icon="arrow_right"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
  </div>
  <h5 style="text-align:center">心得分享</h5>
  <div class="q-pa-md row justify-center items-center q-gutter-md">
      <q-card class="expcard" v-for="(exp, a) in exps" :key="a">
      <q-img :src='exp.image' :ratio="5/4"/>
      <q-card-section>
        <div class="text-h6">{{ exp.title }}</div>
        <div class="text-subtitle2">{{ exp.name }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ exp.description }}
      </q-card-section>
        <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" @click="addCollection({ product: product._id, quantity: 1 })"/>
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { api } from '../boot/axios'
import Swal from 'sweetalert2'

// 抓資料
const exps = reactive([])
const slide = ref(1)
const autoplay = ref(false)
// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

// 抓exp資料
const init = async () => {
  try {
    const { data } = await api.get('/exp')
    exps.push(...data.result)
    console.log(data)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>

<style>
  #airplane {
    margin: auto;
  }
  #attractions {
    width: 800px;
    margin: auto;
    height: 450px;
  }
  .expcard {
    width: 300px;
  }

/* pad */
@media (min-width: 1200px) {
  .header {
    padding: 10px;
  }
}

/* mini pad */
@media (min-width: 768px) {
  .header {
    padding: 5px;
  }
    #attractions {
    width: 800px;
    margin: auto;
    height: 450px;
  }
}

/* mobile */
@media (max-width: 767px) {
  .header {
    padding: 0px;
  }
  #attractions {
    width: 420px;
    margin: auto;
    height: 450px;
  }
}
</style>
