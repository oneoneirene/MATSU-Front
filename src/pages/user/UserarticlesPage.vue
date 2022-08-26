<template>
  <q-page class="window-height window-width row justify-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Matsu</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-md shadow-1" style="width:500px;color:#7cade7;top: 50px">
          <q-form @submit.prevent='submitForm'>
            <q-card-section class="row">
              <div class="text-subtitle1 text-weight-bold q-mr-md col">投稿人
                <q-input square filled clearable hide-hint type="name" v-model="form.name" label="投稿者名稱" />
              </div>
              <div class="text-subtitle1 text-weight-bold col">文章分類
                <q-select square filled v-model="form.category" :options="options" />
              </div>
            </q-card-section>
            <q-card-section class="row" style="margin-top:-20px">
              <div class="text-subtitle1 text-weight-bold q-mr-md col" col="5">開始日期
                <q-input square clearable filled hide-hint v-model="form.startDay" type="name" label="開始日期" />
              </div>
              <div class="text-subtitle1 text-weight-bold col" col="5">結束日期
                <q-input square clearable filled hide-hint v-model="form.endDay" type="name" label="結束日期" />
              </div>
            </q-card-section>
            <q-card-section class="row" style="margin-top:-20px">
              <div class="text-subtitle1 text-weight-bold q-mr-md col full-width">文章圖片
                <q-file standout counter v-model="form.image" :label="$t('文章圖片')"></q-file>
              </div>
            </q-card-section>
            <q-card-section class="row" style="margin-top:-30px">
              <div class="text-subtitle1 text-weight-bold q-mr-md col full-width">投稿標題
                <q-input square filled clearable hide-hint v-model="form.title" type="name" label="文章標題" />
              </div>
            </q-card-section>
            <q-card-section class="row" style="margin-top:-20px">
              <div class="text-subtitle1 text-weight-bold q-mr-md full-width">投稿內容
                <q-input square filled clearable hide-hint v-model="form.description" type="name" label="撰寫內容" />
              </div>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn unelevated color="blue" size="lg" class="full-width" label="Submit" :loading='form.submitting'
                v-close-popup type='submit' />
            </q-card-actions>
            <q-card-actions class="q-px-md q-ma-none">
              <q-btn unelevated color="blue" size="lg" class="full-width" label="Reset" />
            </q-card-actions>
            <q-card-section class="text-center q-px-md q-pb-none">
              <p class="text-grey-6">123</p>
            </q-card-section>
          </q-form>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { useQuasar } from 'quasar'
import { reactive, ref } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'

const options = ['最新公告', '社區公告', '活動資訊', '徵才資訊', '旅遊心得']
const articles = reactive([])
const form = reactive({
  name: '',
  title: '',
  description: '',
  startDay: '',
  endDay: '',
  category: '',
  sell: true,
  image: null,
  valid: false,
  submitting: false
})

const init = async () => {
  try {
    const { data } = await apiAuth.get('/article/')
    articles.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()

// const submitForm = async () => {
//   form.submitting = true
//   const fd = new FormData()
//   for (const key in form) {
//     if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
//     // else if (key === 'image') fd.append(key, form[key][0])
//     else fd.append(key, form[key])
//   }
//   console.log(fd)

//   try {
//     if (form._id.length === 0) {
//       const { data } = await apiAuth.post('/article/', fd)
//       articles.push(data.result)
//       Swal.fire({
//         icon: 'success',
//         title: '成功',
//         text: '新增成功'
//       })
//     } else {
//       const { data } = await apiAuth.patch('/article/' + form._id, fd)
//       console.log('1234')
//       articles[form.idx] = data.result
//       Swal.fire({
//         icon: 'success',
//         title: '成功',
//         text: '編輯成功'
//       })
//       init()
//     }
//     form.dialog = false
//   } catch (error) {
//     Swal.fire({
//       icon: 'success',
//       title: '失敗',
//       text: error.isAxiosError ? error.response.data.message : error.message
//     })
//   }
//   form.submitting = false
// }
const submitForm = async () => {
  form.submitting = true
  const fd = new FormData()

  for (const key in form) {
    fd.append(key, form[key])
  }

  try {
    const { data } = await apiAuth.post('/article', fd)
    articles.push(data.result)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '投稿成功'
    })
    form.name = ''
    form.title = ''
    form.description = ''
    form.startDay = ''
    form.endDay = ''
    form.category = ''
    form.image = null
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '投稿失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}
init()
</script>
