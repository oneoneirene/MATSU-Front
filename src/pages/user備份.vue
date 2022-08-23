<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 1000px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <!-- filepicker -->
          <div id="q-app">
          <q-form>
            <div class="img" style="margin:auto;background: black;">
              <q-img :src="members.image" spinner-color="white" style="height: 300px;">
              </q-img>
            </div>
            <div class="img" style="margin:auto;background: black;">
              <q-img :src="imageUrl" spinner-color="white" style="height: 300px;">
              </q-img>
            </div>
          <div>
            <q-file v-model="image" show-size label="選擇圖片" filled style="max-width: 400px;margin: auto;"
              @update:model-value="handleUpload()">
            </q-file>
            <q-btn label="上傳" type="submit" color="blue" />
          </div>
          </q-form>
          </div>
          <!-- picker -->
          <q-tab name="mails" icon="mail" label="修改個人資料" />
          <q-tab name="alarms" icon="alarm" label="貼文管理" />
          <q-tab name="movies" icon="movie" label="我收藏的文章" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
          <!-- 個人資料管理 -->
          <q-tab-panel name="mails">
            <div class="text-h4 q-mb-md text-center" style="margin-top:10px">個人資料管理</div>
            <div class="q-pa-md" style="max-width:300;margin: auto;">
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <span>ID</span>
                <q-input disable filled v-model="members._id" label="Your ID *"/>
                <span>帳號</span>
                <q-input disable filled v-model="members.account" label="Your Account *" lazy-rules maxlength="20"
                  :rules='rules.account' />
                <span>會員暱稱</span>
                <q-input filled type="text" v-model="members.name" label="Your Name *" lazy-rules :rules='rules.name' />
                <span>電子信箱</span>
                <q-input disable illed type="text" v-model="members.email" label="Your Email *" lazy-rules :rules='rules.email' />
                <q-toggle v-model="accept" label="I accept the license and terms" />
                <div>
                  <q-btn label="修改" type="submit" color="primary" />
                  <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </q-form>
            </div>
          </q-tab-panel>
          <!-- 貼文 -->
          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md text-center">貼文管理</div>
            <div class="q-pa-md">
              <q-table title="My Post" :rows="rows" :columns="columns" row-key="name">
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <q-btn icon="mode_edit" @click="onEdit(props.row)"></q-btn>
                    <q-btn icon="delete" @click="onDelete(props.row)"></q-btn>
                    <!-- <q-btn unelevated color="red" @click="openCustomDialog('警告！', '確定要刪除貼文？', props.row)">
              <span class="vertical_middle"><q-icon name="delete"></q-icon> 刪除</span>
              </q-btn> -->
                  </q-td>
                </template>
              </q-table>
            </div>
            <!-- <q-btn unelevated color="green-7" @click="editDialog(props.row)">
              <span class="vertical_middle"><q-icon name="edit"></q-icon> 編輯</span>
            </q-btn> -->
          </q-tab-panel>
          <!-- 收藏 -->
          <q-tab-panel name="movies">
            <div class="text-h4 q-mb-md text-center">收藏的文章</div>
            <div class="q-pa-md">
              <q-table title="My Likes" :rows="rows2" :columns="columns2" row-key="name2">
                <template v-slot:body-cell-actions="props">
                  <q-td :props="props">
                    <q-btn icon="mdi-heart" @click="onEdit(props.row)"></q-btn>
                    <!-- <q-btn icon="delete" @click="onDelete(props.row)"></q-btn> -->
                  </q-td>
                </template>
              </q-table>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>
<script setup>
import { useQuasar } from 'quasar'
import { reactive, ref } from 'vue'
import { apiAuth } from '../boot/axios'
import Swal from 'sweetalert2'

const $q = useQuasar()
const tab = ref('mails')
const splitterModel = ref(20)
const image = ref(null)
const imageUrl = ref('')
const handleUpload = () => {
  console.log('handleUpload is triggered')
  if (image.value) { imageUrl.value = URL.createObjectURL(image.value) }
}
const Account = ref(null)
const AccountRef = ref(null)
const Password = ref(null)
const PasswordRef = ref(null)
const Name = ref(null)
const NameRef = ref(null)
const Email = ref(null)
const EmailRef = ref(null)
const accept = ref(false)
const form = reactive({
  image: []
})

const rules = reactive({
  account: [
    v => !!v || '帳號必填',
    v => (v.length >= 4 && v.length <= 20) || '帳號長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號只能由英數字組成'
  ],
  password: [
    v => !!v || '密碼必填',
    v => (v.length >= 4 && v.length <= 15) || '密碼長度為 4 到 20 個字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼只能由英數字組成'
  ],
  email: [
    v => !!v || 'Required',
    v => /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(v) || 'Wrong'
  ],
  name: [
    v => !!v || '名稱必填',
    v => (v.length >= 2 && v.length <= 7) || '長度為 2 到 7 個字'
  ]
})

// submit不會動
const onSubmit = () => {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first'
    })
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted'
    })
  }
}

const onReset = () => {
  Account.value = null
  Password.value = null
  Name.value = null
  Email.value = null

  AccountRef.value.resetValidation()
  PasswordRef.value.resetValidation()
  NameRef.value.resetValidation()
  EmailRef.value.resetValidation()
}
// table貼文管理
const columns = [
  {
    name: 'name',
    required: true,
    label: '文章分類',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: '文章標題', field: 'calories', sortable: true },
  { name: 'fat', label: '回覆', field: 'fat', sortable: true },
  { name: 'actions', label: '功能', field: 'actions' }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0
  }
]
// 我收藏的文章
const columns2 = [
  {
    name: 'names2',
    required: true,
    label: '文章分類',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: '文章標題', field: 'calories', sortable: true },
  { name: 'fat', label: '回覆', field: 'fat', sortable: true },
  { name: 'actions', label: '功能', field: 'actions' }
]

const rows2 = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0
  }
]

const members = reactive({
  _id: '',
  acccount: '',
  name: '',
  email: '',
  image: ''
})

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    // members.splice(0, members.length)
    // 加了{}
    console.log(data.result)
    members._id = data.result._id
    members.account = data.result.account
    members.email = data.result.email
    members.name = data.result.name
    members.image = data.result.image
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

</script>
<style>
q-input {
  width: 100px;
}
</style>
