<template>
  <q-layout view="lHh Lpr lff" container class="window-height shadow-2 rounded-borders">
    <q-header elevated class="bg-cyan-8">
      <q-toolbar>
        <q-toolbar-title>Header</q-toolbar-title>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item clickable v-ripple to="/userb/Userback">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>
            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="/userb/Userinfo">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/userb/Usercollect">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>
              Drafts
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/Index">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              回前台
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" :src="userinfo.image" style="height: 150px;"></q-img>
        <div class="absolute-bottom bg-transparent">
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      <!-- </q-img> -->
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../stores/user'
import Swal from 'sweetalert2'
import { apiAuth } from '../boot/axios.js'

const user = useUserStore()

const drawer = ref(false)

const userinfo = reactive({
  // _id: '',
  // account: '',
  // email: '',
  // name: '',
  image: null
  // idx: -1
})

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    // userinfo._id = data.result._id
    // userinfo.account = data.result.account
    // userinfo.email = data.result.email
    // userinfo.name = data.result.name
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
</script>
