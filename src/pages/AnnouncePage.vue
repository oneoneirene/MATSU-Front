<template>
  <div class="q-pa-lg">
    <!-- 最新 -->
    <h5 class="q-ma-md text-weight-bold" style="text-align:center;">{{ $t('New') }}</h5>
    <q-separator class="q-ma-md" color="blue" inset />
    <div class="q-gutter-md q-ma-xs q-mx-xl row justify-center items-start">
      <div class="news col-md col-xs-12 shadow-2" v-for="(info, b) in infos" :key="b">
        <q-img :src="info.image" height="320px">
          <div id="caption" class="absolute-center text-subtitle1 text-center">
            <div class="text">
              <!-- by {{ info.name }} -->
            </div>
            <div class="text-weight-bold text-h6">
              {{ info.title }}
            </div>
            {{ info.description }}
          </div>
        </q-img>
      </div>
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
    <h5 class="q-mb-md text-weight-bold" style="text-align:center">{{ $t('Activities') }}</h5>
    <q-separator class="q-ma-md" color="blue" inset />
    <div class="q-pa-md row justify-center items-center q-gutter-md">
      <q-card class="my-card col-md-2" flat bordered v-for="(activity, i) in activities" :key="i">
        <q-img :src='activity.image' :ratio="4 / 4" />
        <q-card-section>
          <!-- <div class="text-overline text-orange-9">Overline</div> -->
          <div class="text-h5 q-mt-sm q-mb-xs text-weight-bold">{{ activity.name }}</div>
          <div class="text-h7 text-grey">
            {{ activity.poster }}
            <br>
            <!-- 只顯示日期不要時間！！ -->
            {{ new Date(activity.startDay).toLocaleDateString() }} － {{ new Date(activity.endDay
              ).toLocaleDateString()
            }}
          </div>
        </q-card-section>
        <q-card-actions>
          <!-- <q-btn flat color="dark" label="Share" /> -->
          <q-btn flat color="primary" class="text-h6" :label="$t('Signup')" :href='activity.link' target="_blank" />
          <q-space />
          <q-btn color="grey" round flat dense :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded" />
        </q-card-actions>
        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section class="text-h7">
              {{ activity.description }}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
    <!-- 社區 -->
    <h5 class="q-mb-md text-weight-bold" style="text-align:center">{{ $t('Community') }}</h5>
    <q-separator class="q-ma-md" color="blue" inset />
    <div class="q-col-gutter-lg justify-center q-ma-lg row items-start" style="margin: auto;">
      <div id="community" class="col-md-6 col-xs-12 rounded" v-for="(community, b) in communities" :key="b">
        <q-img :src="community.image" :ratio="16 / 9" style="border-radius:20px">
          <div id="communitycp" class="absolute-bottom text-subtitle1 text-center">
            <div class="text-weight-bold text-h6">
              {{ community.title }}
            </div>
            {{ community.description }}
            <!-- <br> -->
            <!-- by {{ community.name }} -->
            <div class="absolute-right-bottom">
              <!-- {{ new Date(community.startDay).toLocaleDateString() }} -->
            </div>
          </div>
        </q-img>
      </div>
    </div>
    <!-- 徵才 -->
    <h5 class="q-mb-md text-weight-bold" style="text-align:center">{{ $t('Recruitment') }}</h5>
    <q-separator class="q-ma-md" color="blue" inset />
    <!-- <div id="Intinernary-product">
      <div class="row">
        <div class="col col-12 col-md-6 col-lg-3 q-pa-sm" v-for='product in products' :key='product._id'>
          <ProductCard :product='product'></ProductCard>
        </div>
      </div>
      </div> -->
    <div class="row justify-center items-center">
      <q-card dark bordered id="jobcard" class="bg-accent col-md-3 col-xs-12" v-for="(product, i) in products" :key="i">
        <q-card-section>
          <div class="text-h6 text-weight-bold">{{ product.jobtitle }}</div>
          <div class="text-subtitle1">{{ product.name }}</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          <div class="text-subtitle2">
            {{ product.job }}
          </div>
          <div class="text-subtitle1 text-weight-bold">{{ product.phone }}</div>
          <div class="absolute-bottom-right">
            {{ new Date(product.startDay).toLocaleDateString() }} － {{ new Date(product.endDay
              ).toLocaleDateString()
            }}
            </div>
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
    <h5 class="q-mb-md text-weight-bold" style="text-align:center">{{ $t('Media') }}</h5>
    <q-separator class="q-ma-lg" color="blue" inset />
    <q-img id="paint" src="../imgs/馬祖插畫2.png" style="width:900px;position:absolute;bottom:-10px;left:0;transform:scaleX(-1);"></q-img>
    <q-img id="paint2" src="../imgs/馬祖插畫.jpg" style="width:900px;position:absolute;bottom:10px;right: 0;"></q-img>
    <div id="youtube" class="q-gutter-md q-mt-lg">
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
          { label: 'MATSU', value: 'soft-jazz' },
          { label: 'MATSU', value: 'Rihanna' },
          { label: 'MATSU', value: 'ibiza' }
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

#jobcard {
  margin: 10px;
}

.news:hover{
  cursor: pointer;
}
#community:hover{
  cursor: pointer;
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
    width: 100%;
  }

  #community {
    width: 25%;
  }
}

/* mini pad */
@media (min-width: 768px) {
  .header {
    padding: 5px;
  }
}
@media (max-width: 1400px) {
  .header {
    padding: 5px;
  }
  #paint{
    display: none;
  }
  #paint2{
    display: none;
  }
}

/* mobile */
@media (max-width: 767px) {
  .header {
    padding: 0px;
  }
  #caption {
    width: 350px;
  }
}
</style>
