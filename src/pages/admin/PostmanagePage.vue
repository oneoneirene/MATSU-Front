<template>
<q-page>
  <div class="q-pa-md row justify-center items-center q-gutter-md">
      <q-card class="card" v-for="(article, a) in articles" :key="a">
      <q-img :src='article.image' :ratio="5/4"/>
      <q-card-section>
        <div class="text-h6">{{ article.title }}</div>
        <div class="text-subtitle2">{{ article.name }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ article.description }}
      </q-card-section>
        <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" @click="addCollection({ article: article._id, quantity: 1 })"/>
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
  </div>
</q-page>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { api } from '../../boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '../../stores/user'

// 抓資料
const articles = reactive([])
const slide = ref(1)
const autoplay = ref(false)
// const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

defineProps(['article'])
// 抓articles資料
const init = async () => {
  try {
    const { data } = await api.get('/article')
    articles.push(...data.result)
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
