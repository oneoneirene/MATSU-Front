<template>
  <q-page>
    <section class="container">
          <div class="text-h5 text-weight-bold q-ma-lg q-mt-xl text-center">{{ $t('Personal') }}</div>
          <div class="info">
          <q-card flat v-if="openflag" class="q-pa-md row bg-blue-2 justify-center text-start align-center" style="height:fit-content">
          <div class="image wrap col-md-2 col-xs-7 justify-center text-center items-center align-center q-mr-lg">
            <br>
            <q-img :src="userinfo.image" style="border-radius:50%;border:5px solid white"></q-img>
            <br>
          </div>
          <div class="wrap col-md-2 col-xs-6 q-ml-lg">
            <br>
            <br>
            <div class="text-subtitle1 text-weight-bold">ID:</div>
            <div class="text-subtitle1 text-center bg-white q-mb-md">{{ userinfo._id }}</div>
            <div class="text-subtitle1 text-weight-bold">{{ $t('Paccount') }}:</div>
            <div class="text-subtitle1 text-center bg-white q-mb-md">{{ userinfo.account }}</div>
            <div class="text-subtitle1 text-weight-bold">{{ $t('Pname') }}:</div>
            <div class="text-subtitle1 text-center bg-white q-mb-md">{{ userinfo.name }}</div>
            <div class="text-subtitle1 text-weight-bold">{{ $t('Pemail') }}:</div>
            <div class="text-subtitle1 text-center bg-white q-mb-md">{{ userinfo.email }}</div>
            <div class="q-my-xxl justify-center text-center items-center align-center">
              <q-btn outline class="q-py-sm q-px-xxl text-subtitle2 q-mr-md" :label="$t('Logout')" color="black" @click='logout' to="/Login"/>
              <q-btn :label="$t('Edit')" class="q-py-sm q-px-xxl text-subtitle2" unelevated color="primary" @click='goEdit()' />
            </div>
          </div>
          </q-card>
          <q-card flat v-else class="q-pa-md flex items-center justify-center text-center">
            <q-form @submit.prevent='editForm()'>
              <div class="text-subtitle1 text-weight-medium">ID:</div>
              <q-input v-model="editinfo._id" readonly :rules='[rules.required]' color="black" />
              <div class="text-subtitle1 text-weight-medium">{{ $t('Paccount') }}:</div>
              <q-input v-model="editinfo.account" readonly  :rules='[rules.required]' color="black" />
              <div class="text-subtitle1 text-weight-medium">{{ $t('Pname') }}:</div>
              <q-input v-model="editinfo.name" :rules='[rules.required]' color="black" />
              <div class="text-subtitle1 text-weight-medium">{{ $t('Pemail') }}:</div>
              <q-input v-model="editinfo.email" :rules='[rules.required]' color="black" />
              <div class="text-subtitle1 text-weight-medium">{{ $t('Pimage') }}:</div>
                <q-file v-model="editinfo.image" standout counter :label="$t('圖片')"></q-file>
              <!-- <q-input v-model="editinfo.email" :rules='[rules.required]' color="black" /> -->
              <div class="q-my-xxl">
                <q-btn outline class="q-py-sm q-px-xxl text-subtitle2 q-mr-md" color="black" :label="$t('Cancel')"
                  @click='changeFlag()' />
                <q-btn type='submit' unelevated class="q-py-sm q-px-xxl text-subtitle2" color="black" :label="$t('Ok')"/>
              </div>
            </q-form>
          </q-card>
        </div>
        <!-- </div> -->
      <!-- </div> -->
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
  image: null,
  idx: -1
})
console.log(userinfo.name)

const editinfo = reactive({
  _id: '',
  account: '',
  email: '',
  name: '',
  image: null,
  submitting: false,
  idx: -1
})

const goEdit = () => {
  openflag.value = false
  editinfo._id = userinfo._id
  editinfo.name = userinfo.name
  editinfo.account = userinfo.account
  editinfo.email = userinfo.email
  editinfo.image = null
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
    userinfo.image = data.result.image
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
  console.log(editinfo)
  const fd = new FormData()

  for (const key in editinfo) {
    if (key === 'image' && editinfo.avatar === null) continue
    else fd.append(key, editinfo[key])
  }

  try {
    const { data } = await apiAuth.patch('/users', fd)

    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '編輯成功'
    })
    init()
    openflag.value = true
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '編輯失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

// const editForm = async () => {
//   try {
//     console.log(editinfo)
//     const { data } = await apiAuth.patch('/users', editinfo)
//     // editinfo._id = data.result._id
//     // editinfo.account = data.result.account
//     editinfo.email = data.result.email
//     editinfo.name = data.result.name
//     editinfo.image = data.result.image
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
// init()

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
