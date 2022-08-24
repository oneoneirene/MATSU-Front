<template>
  <q-page>
    <div class="text-h4 q-mb-md text-center" style="margin-top:10px">個人資料管理</div>
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
            </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios.js'
// import { useUserStore } from '../stores/user'

// const user = useUserStore()

// const openflag = ref(true)

// const userinfo = reactive({
//   name: '',
//   sex: 2,
//   birthday: '',
//   address: '',
//   phone: '',
//   email: ''
// })

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

const form = reactive({
  _id: '',
  account: '',
  email: '',
  name: '',
  image: null,
  submitting: false,
  post: '',
  category: '',
  title: '',
  description: '',
  idx: -1,
  dialog: false,
  valid: false,
  startDay: '',
  endDay: '',
  sell: false
})
console.log(form.name)

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    // members.splice(0, members.length)
    // 加了{}
    console.log(data.result)
    form._id = data.result._id
    form.account = data.result.account
    form.email = data.result.email
    form.name = data.result.name
    form.image = data.result.image
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
