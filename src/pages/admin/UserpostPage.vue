<template>
  <q-page>
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
                  <q-input rounded flat primary standout v-model="form.name" :label="$t('發文者名稱')" class="q-ma-md">
                  </q-input>
                </div>
                <!-- <div class="col" col="10">
                <q-input rounded flat primary standout v-model="form.price" :label="$t('itineraryPrice')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div> -->
              </div>
              <div class="row">
                <div class="col" col="6">
                  <q-input rounded flat primary standout v-model="form.startDay" :label="$t('開始日期')" class="q-ma-md"
                    style="box-shadow:none"></q-input>
                </div>
                <div class="col" col="6">
                  <q-input rounded flat primary standout v-model="form.endDay" :label="$t('結束日期')" class="q-ma-md"
                    style="box-shadow:none"></q-input>
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
                  <q-toggle :false-value="false" :label="`On the Shelf - ${form.sell}`" :true-value="true" color="green"
                    toggle-indeterminate="false" v-model="form.sell" />
                </div>
              </div>
              <q-card-action class="text-center">
                <q-btn type="sumbit" :label="$t('submit')" color='primary' :loading='form.submitting' v-close-popup>
                </q-btn>
              </q-card-action>
            </q-card>
          </q-form>
        </q-card>
      </q-dialog>
    </div>
    <!-- 上下架用switch -->
    <div>
      <q-table :grid="$q.screen.lt.md" :title="$t('貼文管理')" :rows="exps" :columns="columns" row-key="name"
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
            <q-btn round class="bg-red" style="width:50px;height:50px" @click="confirm = true" icon="mdi-delete">
            </q-btn>
          </q-td>
          <q-dialog v-model="confirm" persistent>
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar icon="mdi-account-arrow-right" color="primary" text-color="white" />
                <span class="q-ml-sm text-center q-ml-md">{{ $t('Delete') }} ?</span>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" icon="mdi-check-circle" @click="deleteExp(edit.row._id)" v-close-popup />
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
                      <q-avatar v-else-if="col.name == 'image'" square size="200px" class="text-center q-mx-auto">
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
                  <q-btn flat color="primary" icon="mdi-check-circle" @click="deleteExp(card.row._id)" v-close-popup />
                  <q-btn flat color="primary" icon="mdi-close-circle" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'

const exps = reactive([])
const filter = ref('')
const selected = ref([])
const confirm = ref(false)
const confirmSm = ref(false)

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
const init = async () => {
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
init()

</script>
<style>
</style>
