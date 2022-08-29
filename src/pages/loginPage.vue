<template>
  <q-page class="window-height window-width row justify-center">
    <!-- item-center -->
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Matsu</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1" style="width:500px;color:#064984;top: 100px;">
          <q-form class="q-gutter-md" v-model='valid' @submit.prevent='login'>
          <div class="icon" style="text-align:center">
            <i class="fa-solid fa-circle-user" style="font-size:80px"></i>
          </div>
          <q-card-section>
              <q-input square filled clearable hint="請輸入1-20個字元" hide-hint v-model='form.account' type="acccount" label="帳號" maxlength="20" :rules='rules.account'/>
              <q-input square filled clearable v-model="form.password" type="password" label="密碼" maxlength="20" :rules='rules.password'/>
          </q-card-section>
          <q-card-actions class="q-px-md" style="margin-top:-15px">
            <q-btn unelevated color="accent" size="lg" class="full-width" :label="$t('LogIn')" type='submit' :loading='loading'/>
          </q-card-actions>
          </q-form>
              <q-card-actions class="q-px-md">
          <q-btn unelevated to="/Register" color="accent" size="lg" class="full-width" :label="$t('SignIn')" />
              </q-card-actions>
          <q-card-section class="text-center q-px-md q-pb-none">
            <p class="text-grey-6">{{ $t('Hint') }}</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<!-- <script setup>
import { reactive, ref } from 'vue'
</script>  -->
<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../stores/user'

const user = useUserStore()
const loading = ref(false)
const valid = ref(false)

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
