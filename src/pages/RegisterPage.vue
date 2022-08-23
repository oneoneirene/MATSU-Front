<template>
  <q-page class="window-height window-width row justify-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Matsu</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1" style="width:500px;color:#7cade7;top: 100px">
          <q-form class="q-gutter-md" v-model='valid' @submit.prevent='register'>
          <q-card-section>
              <q-input square filled clearable hint="請輸入E-mail" hide-hint v-model='form.email' type="email" label="信箱" maxlength="25" :rules='rules.email'/>
              <q-input square filled clearable hint="請輸入名稱" hide-hint v-model='form.name' type="name" label="名稱" maxlength="7" :rules='rules.name'/>
              <q-input square filled clearable hint="請輸入1-15個字元" hide-hint v-model='form.account' type="acccount" label="帳號" maxlength="15" :rules='rules.account'/>
              <q-input square filled clearable v-model="form.password" type="password" label="密碼" maxlength="15" :rules='rules.password'/>
          </q-card-section>
          <q-card-actions class="q-px-md" style="margin-top: -15px;">
            <q-btn unelevated color="blue" size="lg" class="full-width" label="Register" type='submit' :loading='loading'/>
          </q-card-actions>
          </q-form>
              <q-card-actions class="q-px-md q-ma-none">
          <q-btn unelevated color="blue" size="lg" class="full-width" label="LogIn" />
              </q-card-actions>
          <q-card-section class="text-center q-px-md q-pb-none">
            <p class="text-grey-6">Already Registered? Log In</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
// import { isEmail } from 'validator'
import { api } from '../boot/axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()
const valid = ref(false)
const loading = ref(false)

const form = reactive({
  email: '',
  account: '',
  password: ''
  // image: null
})

const rules = reactive({
  email: [
    v => !!v || 'Required',
    v => /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(v) || 'Wrong'
  ],
  account: [
    v => !!v || '帳號必填',
    v => (v.length >= 4 && v.length <= 20) || '帳號長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號只能由英數字組成'
  ],
  password: [
    v => !!v || '密碼必填',
    v => (v.length >= 4 && v.length <= 20) || '密碼長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼只能由英數字組成'
  ],
  name: [
    v => !!v || '名稱必填',
    v => (v.length >= 2 && v.length <= 7) || '長度為 2 到 7 個字'
  ]
})

const register = async () => {
  loading.value = true
  try {
    await api.post('/users', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
  loading.value = false
}
</script>
