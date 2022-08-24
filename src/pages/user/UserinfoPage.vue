<template>
  <q-page>
    <section class="container">
      <div class="row q-mt-none q-mt-lg-xl">
        <!-- <div class="col-2 gt-md">
          <div class="text-h6">我的帳戶</div>
          <router-link :to="'/user'">
            <div class="text-subtitle1 q-my-lg">個人資料</div>
          </router-link>
          <router-link :to="'/order'">
            <div class="text-subtitle1 q-my-lg">訂單查詢</div>
          </router-link>
        </div> -->
        <div class="col-12 col-lg-10">
          <div class="flex items-center text-center q-mb-lg q-mt-lg q-mt-lg-none">
            <div class="text-h4 text-weight-medium" v-if='openflag'>個人資料管理</div>
            <div class="text-h4 text-weight-medium" v-if='!openflag'>修改資料</div>
            <q-space />
          </div>
          <div class="text-body1 q-mb-md">個人資訊頁面</div>
          <q-card flat bordered v-if="openflag" class="q-pa-md">
            <div class="text-subtitle1 text-weight-bold">ID:</div>
            <div class="text-subtitle1 q-mb-md">{{ userinfo._id }}</div>
            <div class="text-subtitle1 text-weight-bold">帳號:</div>
            <div class="text-subtitle1 q-mb-md">{{ userinfo.account }}</div>
            <div class="text-subtitle1 text-weight-bold">暱稱:</div>
            <div class="text-subtitle1 q-mb-md">{{ userinfo.name }}</div>
            <div class="text-subtitle1 text-weight-bold">電子郵件信箱:</div>
            <div class="text-subtitle1 q-mb-md">{{ userinfo.email }}</div>
            <div class="q-my-xxl">
              <q-btn outline class="q-py-sm q-px-xxl text-subtitle2 q-mr-md" label="登出" color="black" @click='logout' />
              <q-btn label="修改" class="q-py-sm q-px-xxl text-subtitle2" unelevated color="black" @click='goEdit()' />
            </div>
          </q-card>
          <q-card flat bordered v-else class="col-3 row q-pa-md">
            <q-form @submit.prevent='editForm()'>
              <div class="text-subtitle1 text-weight-medium">ID:</div>
              <q-input v-model="editinfo._id" readonly :rules='[rules.required]' color="black" />
              <div class="text-subtitle1 text-weight-medium">帳號:</div>
              <q-input v-model="editinfo.account" readonly  :rules='[rules.required]' color="black" />
              <div class="text-subtitle1 text-weight-medium">暱稱:</div>
              <q-input v-model="editinfo.name" :rules='[rules.required]' color="black" />
              <div class="text-subtitle1 text-weight-medium">電子郵件信箱:</div>
              <q-input v-model="editinfo.email" :rules='[rules.required]' color="black" />
              <div class="q-my-xxl">
                <q-btn outline class="q-py-sm q-px-xxl text-subtitle2 q-mr-md" color="black" label="取消"
                  @click='changeFlag()' />
                <q-btn type='submit' unelevated class="q-py-sm q-px-xxl text-subtitle2" color="black" label="確定" />
              </div>
            </q-form>
          </q-card>
        </div>
      </div>
    </section>
    <!-- <div class="text-h4 q-mb-md text-center" style="margin-top:10px">個人資料管理</div>
            <div class="q-pa-md" style="max-width:300;margin: auto;">
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <span>ID</span>
                <q-input readonly filled v-model="form._id" label="Your ID *" />
                <span>帳號</span>
                <q-input readonly  filled v-model="form.account" label="Your Account *" lazy-rules maxlength="20"
                  :rules='rules.account' />
                <span>會員暱稱</span>
                <q-input filled type="text" v-model="form.name" label="Your Name *" lazy-rules :rules='rules.name' />
                <span>電子信箱</span>
                <q-input readonly filled type="text" v-model="form.email" label="Your Email *" lazy-rules
                  :rules='rules.email' />
                <q-toggle v-model="accept" label="I accept the license and terms" />
                <div>
                  <q-btn label="修改" type="submit" color="primary" />
                  <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </q-form>
            </div> -->
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios.js'
import { useUserStore } from '../../stores/user'

const user = useUserStore()
const { logout } = user
const openflag = ref(true)

const changeFlag = () => {
  if (openflag.value) {
    openflag.value = false
  } else {
    openflag.value = true
  }
}
// const editinfo = reactive({
//   name: '',
//   sex: 2,
//   birthday: '',
//   address: '',
//   phone: '',
//   email: ''
// })

const rules = reactive({
  required (v) {
    return !!v || '必填'
  }
})

const userinfo = reactive({
  _id: '',
  account: '',
  email: '',
  name: '',
  // image: null,
  idx: -1
})
console.log(userinfo.name)

const editinfo = reactive({
  _id: '',
  account: '',
  email: '',
  name: '',
  // image: null,
  submitting: false,
  idx: -1
})

const goEdit = () => {
  openflag.value = false
  editinfo._id = userinfo._id
  editinfo.name = userinfo.name
  editinfo.account = userinfo.account
  editinfo.email = userinfo.email
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    // members.splice(0, members.length)
    // 加了{}
    userinfo._id = data.result._id
    userinfo.account = data.result.account
    userinfo.email = data.result.email
    userinfo.name = data.result.name
    // userinfo.image = data.result.image
    // members.push({ ...data.result })
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

const editForm = async () => {
  try {
    console.log(editinfo)
    const { data } = await apiAuth.patch('/users', editinfo)
    // editinfo._id = data.result._id
    // editinfo.account = data.result.account
    editinfo.email = data.result.email
    editinfo.name = data.result.name
    // editinfo.image = data.result.image
    init()
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '編輯成功'
    })
    openflag.value = true
  } catch (error) {
    // console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()

// const goEdit = () => {
//   openflag.value = false

//   editinfo.email = userinfo.email
//   editinfo.name = userinfo.name
//   editinfo.sex = userinfo.sex
//   editinfo.birthday = userinfo.birthday
//   editinfo.address = userinfo.address
//   editinfo.phone = userinfo.phone
// }

// const editForm = async () => {
//   try {
//     const { data } = await apiAuth.patch('/users', editinfo)
//     // editinfo.email = data.result.email
//     // editinfo.name = data.result.name
//     // editinfo.sex = data.result.sex
//     // editinfo.birthday = data.result.birthday
//     // editinfo.address = data.result.address
//     // editinfo.phone = data.result.phone
//     init()
//     Swal.fire({
//       icon: 'success',
//       title: '成功',
//       text: '編輯成功'
//     })
//     openflag.value = true
//   } catch (error) {
//     // console.log(error)
//     Swal.fire({
//       icon: 'error',
//       title: '失敗',
//       text: error.isAxiosError ? error.response.data.message : error.message
//     })
//   }
// }

init()

</script>
