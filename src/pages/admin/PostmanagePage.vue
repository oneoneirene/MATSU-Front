<template>
  <q-page>
    <div class="q-pa-md row justify-center items-center q-gutter-md">
      <q-card class="card col-4" v-for="(article, a) in articles" :key="a">
        <q-img :src='article.image' :ratio="4/3"/>
        <q-card-section>
          <div class="text-h6">分類：{{ article.category }}</div>
          <div class="text-h6">標題：{{ article.title }}</div>
          <div class="text-h6">投稿人：{{ article.name }}</div>
          <div class="text-h6">開始日期：{{ new Date( article.startDay ).toLocaleDateString()}}</div>
          <div class="text-h6">結束日期：{{ new Date( article.endDay ).toLocaleDateString()}}</div>
          <div class="text-h6">內容：{{ article.description }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat round color="teal" @click="confirmSm = true" icon="mdi-delete" />
          <!-- <q-btn flat round color="primary" icon="share" /> -->
        </q-card-actions>
      </q-card>
    </div>
    <q-dialog v-model="confirmSm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="mdi-account-arrow-right" color="blue" text-color="white" />
          <span class="q-ml-sm text-center q-ml-md">{{ $t('Delete') }} ?</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat color="blue" icon="mdi-check-circle" @click="deleteArticle(articles._id)" v-close-popup />
          <q-btn flat color="blue" icon="mdi-close-circle" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { api, apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '../../stores/user'

// 抓資料
const articles = reactive([])
const slide = ref(1)
const autoplay = ref(false)
const confirmSm = ref(false)
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

const deleteArticle = async (articleId) => {
  try {
    await apiAuth.delete('/article/' + articleId)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '投稿刪除成功'
    })
    init()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '投稿刪除失敗',
      text: '投稿刪除失敗'
    })
  }
}
</script>
