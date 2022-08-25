<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 1000px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <!-- filepicker -->
          <div id="q-app">
            <q-form>
              <div class="img" style="margin:auto;">
                <q-img :src="form.image" spinner-color="white" style="height: 300px;">
                </q-img>
              </div>
              <div>
                <q-file v-model="form.image" show-size label="選擇圖片" filled style="max-width: 400px;margin: auto;"
                  @update:model-value="handleUpload()">
                </q-file>
                <!-- <q-btn flat fab bg-blue icon="mdi-plus"
                  style="width:70px;height:70px;margin-top:15px;border-radius:50%;" @click="openDialog('form._id')">
                </q-btn> -->
                <!-- <q-btn label="上傳" type="submit" color="blue" :loading='form.submitting' @click="openDialog(form._id)" /> -->
                <!-- <q-dialog v-model="form.dialog" persistent>
                  <q-card style="min-width: 350px">
                    <q-form @submit.prevent='submitForm'></q-form>
                      <q-card-section>
                        <q-file v-model="form.image" label="IMAGE" />
                      </q-card-section>

                      <q-card-section class="q-pt-none">
                        <q-input dense v-model="form.name" label="NAME" autofocus @keyup.enter="prompt = false" />
                      </q-card-section>

                      <q-card-actions align="right" class="text-primary">
                        <q-btn flat label="Cancel" v-close-popup />
                        <q-btn flat type="submit" label="SUBMIT" v-close-popup />
                      </q-card-actions>
                    </q-form>
                  </q-card>
                </q-dialog> -->
              </div>
              <q-dialog v-model="form.dialog" persistent>
                <q-card style="min-width: 350px">
                  <q-form @submit.prevent='submitForm'>
                    <q-card-section>
                      <q-file v-model="form.image" label="IMAGE" />
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <q-input dense v-model="form.name" label="NAME" autofocus @keyup.enter="prompt = false" />
                    </q-card-section>

                    <q-card-actions align="right" class="text-primary">
                      <q-btn flat label="Cancel" v-close-popup />
                      <q-btn flat type="submit" label="SUBMIT" v-close-popup />
                    </q-card-actions>
                  </q-form>
                </q-card>
              </q-dialog>
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
              <div class="text-subtitle1 text-weight-medium">照片上傳:</div>
                <q-file v-model="editinfo.image" rounded standout counter :label="$t('圖片')"></q-file>
              <!-- <q-input v-model="editinfo.email" :rules='[rules.required]' color="black" /> -->
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
          <!-- 貼文管理 -->
          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md text-center">貼文管理</div>
            <div class="row bg-blue" style="height:100px">
              <q-btn flat fab round bg-blue color="white" icon="mdi-plus"
                style="width:70px;height:70px;margin-top:15px;border-radius:50%;" @click="openDialog('')"></q-btn>
              <q-dialog seamless v-model="form.dialog" persistent>
                <q-card id="dialog">
                  <!-- <q-toolbar>
          <q-img src="../../assets/LOGO.png" width="35px" style="margin-top:-5px"></q-img>
          <q-toolbar-title class="text-weight-bold text-primary">{{$t('addItinerary')}}</q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar> -->
                  <q-form v-model='form.valid' @submit.prevent='submitForm'>
                    <q-card flat>
                      <div class="row">
                        <div flat class="col" col="10">
                          <q-input rounded flat primary standout v-model="form.name" :label="$t('發文者名稱')"
                            class="q-ma-md"></q-input>
                        </div>
                        <!-- <div class="col" col="10">
                <q-input rounded flat primary standout v-model="form.price" :label="$t('itineraryPrice')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div> -->
                      </div>
                      <div class="row">
                        <div class="col" col="6">
                          <q-input rounded flat primary standout v-model="form.startDay" :label="$t('開始日期')"
                            class="q-ma-md" style="box-shadow:none"></q-input>
                        </div>
                        <div class="col" col="6">
                          <q-input rounded flat primary standout v-model="form.endDay" :label="$t('結束日期')"
                            class="q-ma-md" style="box-shadow:none"></q-input>
                        </div>
                      </div>
                      <div class="col" col="12">
                        <q-input rounded flat primary standout v-model="form.title" :label="$t('標題')" class="q-ma-md"
                          style="box-shadow:none"></q-input>
                      </div>
                      <div class="row">
                        <div class="col" col="12">
                          <q-input v-model="form.description" class="q-ma-md" style="box-shadow:none" rounded standout
                            label="撰寫心得" autogrow type="textarea" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col" col="12">
                          <q-file v-model="form.image" rounded standout counter class="q-ma-md" style="box-shadow:none"
                            :label="$t('心得圖片')"></q-file>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col" col="6">
                          <q-toggle :false-value="false" :label="`On the Shelf - ${form.sell}`" :true-value="true"
                            color="green" toggle-indeterminate="false" v-model="form.sell" />
                        </div>
                      </div>

                      <q-card-action class="text-center">
                        <q-btn type="sumbit" :label="$t('submit')" color='primary' :loading='form.submitting'
                          v-close-popup>
                        </q-btn>
                      </q-card-action>
                    </q-card>
                  </q-form>
                </q-card>
              </q-dialog>
            </div>
            <!-- 上下架用switch -->
            <div class="q-pa-md">
              <q-table :grid="$q.screen.lt.md" :title="$t('社區公告')" :rows="exps" :columns="columns" row-key="name"
                :filter="filter" selection="multiple" v-model:selected="selected">
                <template v-slot:top-right>
                  <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </template>
                <template v-slot:header-selection="scope">
                  <q-toggle v-model="scope.selected" :key="exps.sell" />
                </template>

                <template v-slot:body-selection="scope">
                  <q-toggle v-model="scope.selected" :key="exps.sell" />
                </template>

                <template #body-cell-image="image">
                  <q-td style="text-align:right">
                    <q-avatar>
                      <img :src="image.row.image" alt="">
                    </q-avatar>
                  </q-td>
                </template>

                <template #body-cell-edit="edit">
                  <q-td style="text-align:right">
                    <q-btn round class="bg-accent" style="width:50px;height:50px" @click="openDialog(edit.row._id)"
                      icon="mdi-circle-edit-outline"></q-btn>
                    <q-btn round class="bg-red" style="width:50px;height:50px" @click="confirm = true"
                      icon="mdi-delete">
                    </q-btn>
                  </q-td>

                  <q-dialog v-model="confirm" persistent>
                    <q-card>
                      <q-card-section class="row items-center">
                        <q-avatar icon="mdi-account-arrow-right" color="primary" text-color="white" />
                        <span class="q-ml-sm text-center q-ml-md">{{ $t('Delete') }} ?</span>
                      </q-card-section>

                      <q-card-actions align="right">
                        <q-btn flat color="primary" icon="mdi-check-circle" @click="deleteExp(edit.row._id)"
                          v-close-popup />
                        <q-btn flat color="primary" icon="mdi-close-circle" v-close-popup />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>

                </template>

                <template v-slot:item="card">
                  <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
                    :style="card.selected ? 'transform: scale(0.95);' : ''">
                    <!-- <pre>{{ card }}</pre> -->
                    <q-card :class="card.selected ? 'bg-grey-2' : ''">
                      <q-card-section>
                        <q-checkbox dense v-model="card.selected" :label="card.row.name" />
                      </q-card-section>
                      <q-separator />
                      <!-- <div class="text-center q-mx-auto">
              <q-btn rounded class="text-center" @click="openDialog(card.row._id)" icon="mdi-circle-edit-outline">
                </q-btn>
              <q-btn rounded  @click="confirmSm = true" icon="mdi-delete">
                </q-btn>
              </div> -->
                      <q-list v-for="col in card.cols" :key="col.name">
                        <!-- <pre>{{ col }}</pre> -->
                        <q-item class="text-center">
                          <q-item-section class="text-center q-mx-auto">
                            <q-item>
                              <!-- <q-item-label>{{ col.label }}</q-item-label> -->
                              <!-- card.col => 指 整個data col // col.name => card.cols.name col的name 要相同於 row value 的 name -->
                              <q-item-label caption v-if="col.name !== 'image'" class="text-center q-mx-auto">
                                <!-- {{ card.row[col.name] }} -->
                                {{ col.value }}
                              </q-item-label>
                              <q-avatar v-else-if="col.name == 'image'" square size="200px"
                                class="text-center q-mx-auto">
                                <img :src="card.row[col.name]" alt="">
                                <!-- <img :src="card.row.image" alt=""> -->
                                <!-- <h3>{{ card.row.image }}</h3> -->
                                <!-- <q-btn>1234</q-btn> -->
                                <!-- <h1>{{ row.name }}</h1> -->
                              </q-avatar>
                            </q-item>
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-card-action class="q-mx-auto text-center">
                        <div class="flex" style="justify-content:space-around">
                          <q-btn rounded class="text-center bg-red" @click="confirmSm = true" icon="mdi-delete"
                            style="width:50px;height:50px"></q-btn>
                          <q-btn rounded class="text-center bg-accent" @click="openDialog(card.row._id)"
                            icon="mdi-circle-edit-outline" style="width:50px;height:50px"></q-btn>
                        </div>
                      </q-card-action>
                    </q-card>
                    <q-dialog v-model="confirmSm" persistent>
                      <q-card>
                        <q-card-section class="row items-center">
                          <q-avatar icon="mdi-account-arrow-right" color="primary" text-color="white" />
                          <span class="q-ml-sm text-center q-ml-md">{{ $t('Delete') }} ?</span>
                        </q-card-section>
                        <q-card-actions align="right">
                          <q-btn flat color="primary" icon="mdi-check-circle" @click="deleteExp(card.row._id)"
                            v-close-popup />
                          <q-btn flat color="primary" icon="mdi-close-circle" v-close-popup />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                  </div>
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
import { useUserStore } from '../stores/user'

// 修改資料
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
  editinfo.image = userinfo.image
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
    fd.append(key, editinfo[key])
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
init()

const exps = ([])
const $q = useQuasar()
const tab = ref('mails')
const splitterModel = ref(20)
const image = ref(null)
const imageUrl = ref('')

// const Account = ref(null)
const AccountRef = ref(null)
// const Password = ref(null)
const PasswordRef = ref(null)
// const Name = ref(null)
const NameRef = ref(null)
// const Email = ref(null)
const EmailRef = ref(null)
const accept = ref(false)
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

// const openDialog = (_id) => {
//   form._id = _id
//   form.name = ''
//   form.image = null
//   form.dialog = true
//   form.submitting = false
// }

// table貼文管理

const columns = [
  {
    name: 'image',
    label: 'Image'
  },
  {
    name: 'name',
    required: true,
    label: 'Name',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'title',
    label: 'Title',
    field: row => row.title,
    sortable: true
  },
  // { name: 'price', field: row => row.price, label: 'Price', sortable: true },
  // { name: 'people', field: row => row.people, label: 'People', sortable: true },
  { name: 'startDay', field: row => row.startDay, label: 'Start Day', sortable: true },
  { name: 'endDay', label: 'End Day', field: row => row.endDay, sortable: true },
  { name: 'edit', label: 'Edit' }
  // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const openDialog = (_id) => {
  form._id = _id
  const idx = _id === '' ? -1 : exps.findIndex(exp => exp._id === _id)
  if (idx > -1) {
    form.name = exps[idx].name
    // form.price = activities[idx].price
    // form.category = products[idx].category
    form.sell = exps[idx].sell
    form.description = exps[idx].description
    form.title = exps[idx].title
    form.startDay = exps[idx].startDay
    form.endDay = exps[idx].endDay
  } else {
    form.name = ''
    // form.price = 0
    // form.category = ''
    form.sell = false
    form.description = ''
    form.startDay = ''
    form.endDay = ''
    form.title = ''
  }
  form.image = null
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

const submitForm = async () => {
  form.submitting = true
  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    // else if (key === 'image') fd.append(key, form[key][0])
    else fd.append(key, form[key])
  }
  console.log(fd)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/exp/', fd)
      exps.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/exp/' + form._id, fd)
      console.log('1234')
      exps[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
      init()
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'success',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const deleteExp = async (expId) => {
  try {
    await apiAuth.delete('/exp/' + expId)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '活動刪除成功'
    })
    init()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '活動刪除失敗',
      text: '活動刪除失敗'
    })
  }
}

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

// 心得
const init2 = async () => {
  try {
    const { data } = await apiAuth.get('/exp/all')
    exps.splice(0, exps.length)
    // console.log(data.result)
    // console.log(typeof (data.result))
    exps.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
console.log(exps)
init2()

</script>
<style>
q-input {
  width: 100px;
}
</style>
