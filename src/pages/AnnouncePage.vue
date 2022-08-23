<template>
  <div class="q-pa-md">
    <!-- 最新 -->
    <h5 style="text-align:center">最新消息</h5>
      <div class="q-col-gutter-md q-ma-xs row items-start" v-for="(info, b) in infos" :key="b">
      <div class="col-2"></div>
      <div class="col-8">
        <q-img :src="info.image" height="300px">
          <div id="caption" class="absolute-right text-subtitle1 text-center">
            by {{ info.name }}
            <br>
            {{ info.title }}
            <br>
            {{ info.description }}
          </div>
        </q-img>
      </div>
    <div class="col-2"></div>
    </div>
    <!-- <div class="q-pa-lg q-ma-lg">
      <q-carousel v-model="slide" swipeable animated padding arrows navigation navigation-icon="radio_button_unchecked"
        height="400px" class="bg-blue text-white rounded-borders">
        <q-carousel-slide name="style" class="text-center">
          <q-scroll-area class="fit">
            <q-icon name="style" size="56px" />
            <div class="q-mt-md">
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </q-scroll-area>
        </q-carousel-slide> -->
        <!-- <q-carousel-slide name="tv" class="text-center">
          <q-scroll-area class="fit">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </q-scroll-area>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="text-center">
          <q-scroll-area class="fit">
            <q-icon name="layers" size="56px" />
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
            <div class="q-mt-md">
              {{ lorem }}
            </div>
          </q-scroll-area>
        </q-carousel-slide> -->
      <!-- </q-carousel>
    </div> -->
    <!-- 活動 -->
    <h5 style="text-align:center">活動資訊</h5>
    <div class="q-pa-md row justify-center items-center q-gutter-md">
      <q-card class="my-card" flat bordered v-for="(activity, i) in activities" :key="i">
        <q-img :src='activity.image' :ratio="4/4"/>
        <q-card-section>
          <!-- <div class="text-overline text-orange-9">Overline</div> -->
          <div class="text-h5 q-mt-sm q-mb-xs">{{ activity.name }}</div>
          <div class="text-caption text-grey">
            {{ activity.description }}
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn flat color="dark" label="Share" />
          <q-btn flat color="primary" label="Book" />
          <q-space />
          <q-btn color="grey" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded" />
        </q-card-actions>
        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section class="text-subitle2">
              {{ lorem }}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
    <!-- 社區 -->
    <h5 style="text-align:center">社區公告</h5>
    <div class="q-col-gutter-md q-ma-md row items-start">
      <div class="col-4" v-for="(community, b) in communities" :key="b">
        <q-img :src="community.image" :ratio="16/9">
          <div id="communitycp" class="absolute-bottom text-subtitle1 text-center">
            {{ community.description }}
            <br>
            by {{ community.name }}
          </div>
        </q-img>
      </div>
    </div>
    <!-- 徵才 -->
    <h5 style="text-align:center">徵才訊息</h5>
    <!-- <div id="Intinernary-product">
      <div class="row">
        <div class="col col-12 col-md-6 col-lg-3 q-pa-sm" v-for='product in products' :key='product._id'>
          <ProductCard :product='product'></ProductCard>
        </div>
      </div>
      </div> -->
    <div class="row justify-center items-center">
      <q-card dark bordered id="jobcard" class="bg-grey-8 col-3" v-for="(product, i) in products" :key="i">
        <q-card-section>
          <div class="text-h6">{{ product.jobtitle }}</div>
          <div class="text-subtitle2">{{ product.name }}</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          {{ product.job }}
        <div class="text-subtitle2">{{ product.phone }}</div>
        </q-card-section>
      </q-card>
    </div>
    <!-- dia -->
    <!-- <q-dialog v-model="form.dialog" persistent>
        <q-card style="min-width: 500px">
          <q-form @submit.prevent='submitForm'>
            <q-card-section>
              <q-input dense label="發文者" readonly v-model="form.name" />
            </q-card-section>
            <q-card-section>
              <q-input dense v-model="form.jobtitle" label="工作名稱" autofocus @keyup.enter="prompt = false" />
            </q-card-section>
            <q-card-section>
              <q-input dense v-model="form.job" label="工作內容" autofocus @keyup.enter="prompt = false" />
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn flat type="submit" label="SUBMIT" :loading="form.submitting" v-close-popup />
            </q-card-actions>
          </q-form>
        </q-card>
      </q-dialog>
    </div> -->
    <!-- 影音 -->
    <h5 style="text-align:center">影音推薦</h5>
    <div id="youtube" class="q-gutter-md">
      <q-carousel animated v-model="slide" infinite>
        <q-carousel-slide name="soft-jazz">
          <q-video class="absolute-full" src="https://www.youtube.com/embed/bmdpTjkAD1Q" />
        </q-carousel-slide>

        <q-carousel-slide name="Rihanna">
          <q-video class="absolute-full" src="https://www.youtube.com/embed/jesgAzwmXSI" />
        </q-carousel-slide>

        <q-carousel-slide name="ibiza">
          <q-video class="absolute-full" src="https://www.youtube.com/embed/58BH6nlJ34Y" />
        </q-carousel-slide>
      </q-carousel>

      <div class="row justify-center">
        <q-btn-toggle glossy v-model="slide" :options="[
          { label: 'Soft Jazz', value: 'soft-jazz' },
          { label: 'Rihanna', value: 'Rihanna' },
          { label: 'Ibiza Mix', value: 'ibiza' }
        ]" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { api } from '../boot/axios'
import Swal from 'sweetalert2'
// import { useUserStore } from '../stores/user'
// import { storeToRefs } from 'pinia'

// 抓資料
const products = reactive([])
const activities = reactive([])
const infos = reactive([])
const communities = reactive([])

// const user = useUserStore()
// const { isLogin, isAdmin } = storeToRefs(user)

const slide = ref('style', 'Rihanna')
const lorem = 'orem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
const expanded = ref(false)
const member = reactive([])
const form = reactive({
  _id: '',
  // account: '',
  // email: '',
  name: member,
  // image: null,
  submitting: false,
  // post: '',
  // category: '',
  // reply: '',
  // title: '',
  job: '',
  jobtitle: ''
})
console.log(form.name)

// const openDialog = (_id) => {
//   form._id = _id
//   // form.image = null
//   form.dialog = true
//   form.submitting = false
//   // form.job = ''
//   // form.jobtitle = ''
// }

// const submitForm = async () => {
//   form.submitting = true

//   const fd = new FormData()
//   for (const key in form) {
//     if (['_id', 'dialog', 'submitting'].includes(key)) continue
//     else if (key === 'image') fd.append(key, form[key][0])
//     else fd.append(key, form[key])
//   }

//   try {
//     if (form._id.length === 0) {
//       const { data } = await apiAuth.post('/products', fd)
//       products.push(data.result)
//       Swal.fire({
//         icon: 'success',
//         title: '成功',
//         text: '新增成功'
//       })
//     // } else {
//     //   const { data } = await apiAuth.patch('/products/' + form._id, fd)
//     //   products[form.idx] = data.result
//     //   Swal.fire({
//     //     icon: 'success',
//     //     title: '成功',
//     //     text: '編輯成功'
//     //   })
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
// const submitForm = async () => {
//   console.log(form._id)
//   console.log(form._name)
//   form.submitting = true
//   // console.log(members._id)
//   try {
//     const { data } = await apiAuth.patch('/users/' + form._id, {
//       name: '', image: ''
//     })
//     form.name = data.name
//     form.image = data.image
//     Swal.fire({
//       icon: 'success',
//       title: '成功',
//       text: '編輯成功'
//     })
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
console.log(member)

// 抓news資料
const init3 = async () => {
  try {
    const { data } = await api.get('/info')
    infos.push(...data.result)
    console.log(data)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init3()

// 抓job資料
const init = async () => {
  try {
    const { data } = await api.get('/job')
    products.push(...data.result)
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

// 抓acivity資料
const init2 = async () => {
  try {
    // console.log(111)
    const { data } = await api.get('/act')
    activities.push(...data.result)
    console.log(data)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init2()

// 抓community資料
const init4 = async () => {
  try {
    // console.log(111)
    const { data } = await api.get('/community')
    communities.push(...data.result)
    console.log(data)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init4()
</script>
<style>
iframe {
  margin: auto;
}

.my-card {
  width: 100%;
  max-width: 350px
}

#jobcard {
  margin: 10px;
}

/* pad */
@media (min-width: 1200px) {
  .header {
    padding: 10px;
  }

  #youtube {
    width: 800px;
    margin: auto;
  }

  #caption {
    width: 500px;
  }
}

/* mini pad */
@media (min-width: 768px) {
  .header {
    padding: 5px;
  }
}

/* mobile */
@media (max-width: 767px) {
  .header {
    padding: 0px;
  }
}
</style>
