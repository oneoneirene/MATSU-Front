<template>
  <q-page>
      <div class="row q-mt-none q-mt-lg-xl">
        <div class="col-2 gt-md">
          <div class="text-h6">我的帳戶</div>
          <router-link :to="'/user'">
            <div class="text-subtitle1 q-my-lg">個人資料</div>
          </router-link>
          <router-link :to="'/order'">
            <div class="text-subtitle1 q-my-lg">訂單查詢</div>
          </router-link>
        </div>
        <div class="col-12 col-lg-10">
          <div class="flex items-center text-center q-mb-lg q-mt-lg q-mt-lg-none">
            <div class="text-h4 text-weight-medium" v-if='openflag'>個人資料</div>
            <div class="text-h4 text-weight-medium" v-if='!openflag'>修改資料</div>
            <q-space />
          </div>
          <div class="text-body1 q-mb-md">個人資訊頁面</div>
          <q-card flat bordered v-if="openflag" class="q-pa-md">
            <div class="text-subtitle1 text-weight-bold">名字:</div>
            <div class="text-subtitle1 q-mb-md">{{ userinfo.name }}</div>
            <div class="text-subtitle1 text-weight-bold">性別:</div>
            <div class="text-subtitle1 q-mb-md">{{ userinfo.sex }}</div>
            <div class="text-subtitle1 text-weight-bold">生日:</div>
            <div class="text-subtitle1 q-mb-md">{{ new Date(userinfo.birthday).toLocaleDateString() }}</div>
            <div class="text-subtitle1 text-weight-bold">地址:</div>
            <div class="text-subtitle1 q-mb-md">{{ userinfo.address }}</div>
            <div class="text-subtitle1 text-weight-bold">電話:</div>
            <div class="text-subtitle1 q-mb-md">{{ userinfo.phone }}</div>
            <div class="text-subtitle1 text-weight-bold">電子郵件信箱:</div>
            <div class="text-subtitle1 q-mb-md">{{ userinfo.email }}</div>
            <div class="q-my-xxl">
              <q-btn outline class="q-py-sm q-px-xxl text-subtitle2 q-mr-md" label="登出" color="black" @click='logout' />
              <q-btn label="修改" class="q-py-sm q-px-xxl text-subtitle2" unelevated color="black" @click='goEdit()' />
            </div>
          </q-card>
          <q-card flat bordered v-else class="col-3 row q-pa-md">
            <q-form @submit.prevent='editForm()'>
              <div class="text-subtitle1 text-weight-medium">名字:</div>
              <q-input v-model="editinfo.name" :rules='[rules.required]' color="black" />
              <div class="text-subtitle1 text-weight-medium">性別:</div>
              <div class="q-my-md">
                <q-radio class="text-weight-medium" v-model="editinfo.sex" val="1" label="男" color="black" />
                <q-radio class="text-weight-medium" v-model="editinfo.sex" val="0" label="女" color="black" />
              </div>
              <div class="text-subtitle1 text-weight-medium">生日:</div>
              <q-input v-model="editinfo.birthday" :rules='[rules.required]' color="black" />
              <div class="text-subtitle1 text-weight-medium">地址:</div>
              <q-input v-model="editinfo.address" :rules='[rules.required]' color="black" />
              <div class="text-subtitle1 text-weight-medium">手機:</div>
              <q-input v-model="editinfo.phone" :rules='[rules.required]' color="black" />
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
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../boot/axios.js'
import { useUserStore } from '../stores/user'

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

const userinfo = reactive({
  name: '',
  sex: 2,
  birthday: '',
  address: '',
  phone: '',
  email: ''
})

const editinfo = reactive({
  name: '',
  sex: 2,
  birthday: '',
  address: '',
  phone: '',
  email: ''
})

const rules = reactive({
  required (v) {
    return !!v || '必填'
  }
})

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    user.email = data.result.email
    user.name = data.result.name
    user.sex = data.result.sex
    user.birthday = data.result.birthday
    user.address = data.result.address
    user.phone = data.result.phone
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}

const goEdit = () => {
  openflag.value = false

  editinfo.email = userinfo.email
  editinfo.name = userinfo.name
  editinfo.sex = userinfo.sex
  editinfo.birthday = userinfo.birthday
  editinfo.address = userinfo.address
  editinfo.phone = userinfo.phone
}

const editForm = async () => {
  try {
    const { data } = await apiAuth.patch('/users', editinfo)
    // editinfo.email = data.result.email
    // editinfo.name = data.result.name
    // editinfo.sex = data.result.sex
    // editinfo.birthday = data.result.birthday
    // editinfo.address = data.result.address
    // editinfo.phone = data.result.phone
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

</script>
