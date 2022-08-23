<template>
  <div class="q-pa-md">
    <q-table title="Treats" :rows="members" :columns="columns" :filter="filter" row-key="name" binary-state-sort>
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body-cell-actions="props">
        <!-- <pre>{{ props }}</pre> -->
        <q-td :props="props">
          <q-btn icon="delete" color="blue" @click="confirm = true" />
          <!-- {{ props.row._id }} -->
          <!-- <q-btn unelevated color="red" @click="openCustomDialog('警告！', '確定要刪除貼文？', props.row)">
              <span class="vertical_middle"><q-icon name="delete"></q-icon> 刪除</span>
              </q-btn> -->
          <q-dialog v-model="confirm" persistent>
            <q-card>
              <q-card-section class="row items-center">
                <q-avatar icon="mdi-account-arrow-right" color="primary" text-color="white" />
                <span class="q-ml-sm text-center q-ml-md">{{ $t('Delete') }} ?</span>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" icon="mdi-check-circle" @click="deleteUser(props.row._id)"
                  v-close-popup />
                <q-btn flat color="primary" icon="mdi-close-circle" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'
// import { useUserStore } from '../../stores/user'
const filter = ref('')
const confirm = ref(false)
const members = reactive([])
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: member => member.name,
    sortable: true
  },
  { name: 'account', align: 'center', label: 'account', field: member => member.account, sortable: true },
  { name: 'email', label: 'email', field: member => member.email, required: true, sortable: true },
  { name: 'actions', label: '功能' }
]

const deleteUser = async (userId) => {
  try {
    await apiAuth.delete('/users/' + userId)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    init()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '刪除失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    members.splice(0, members.length)
    // console.log(data)
    members.push(...data.result)
    console.log(members)
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
