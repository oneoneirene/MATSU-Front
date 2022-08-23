<template lang="pug">
v-row#login
  v-col(cols='12')
    h1.text-center 登入
  v-divider
  v-col(cols='12')
    v-form(v-model='valid' @submit.prevent='login')
      v-text-field(
        type='text'
        label='帳號'
        v-model='form.account'
        :rules='rules.account'
        counter='20'
        maxlength="20"
      )
      v-text-field(
        type='password'
        label='密碼'
        v-model='form.password'
        :rules='rules.password'
        counter='20'
        maxlength="20"
      )
      v-btn.mx-auto(color='success' type='submit' :loading='loading') 登入
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const valid = ref(false)
const loading = ref(false)

const form = reactive({
  account: '',
  password: ''
})

const rules = reactive({
  account: [
    v => !!v || '帳號必填',
    v => (v.length >= 4 && v.length <= 20) || '帳號長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號只能由英數字組成'
  ],
  password: [
    v => !!v || '密碼必填',
    v => (v.length >= 4 && v.length <= 20) || '密碼長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼只能由英數字組成'
  ]
})

const login = () => {
  user.login(form)
}
</script>
