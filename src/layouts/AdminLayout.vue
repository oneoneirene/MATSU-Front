<template>
  <q-layout view="hhr lpr fFf">

    <q-header elevated class="bg-blue text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <!-- <q-avatar>
            <img src="../imgs/matsulogo.png">
          </q-avatar> -->
          管理者後台
        </q-toolbar-title>
        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <!-- avatar用不好 -->
            <!-- <q-item-section>
            <q-avatar>
            <img :src=avatar>
            </q-avatar>
            </q-item-section> -->
          <q-item clickable v-ripple to="/admin/Member">
            <q-item-section avatar>
              <q-icon name="mdi-account" />
            </q-item-section>
            <q-item-section>
              會員管理
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/Job">
            <q-item-section avatar>
              <q-icon name="mdi-briefcase-account-outline" />
            </q-item-section>
            <q-item-section>
              徵才資訊
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/Activity">
            <q-item-section avatar>
              <q-icon name="mdi-seesaw" />
            </q-item-section>
            <q-item-section>
              活動資訊
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/Community">
            <q-item-section avatar>
              <q-icon name="mdi-clipboard-file-outline" />
            </q-item-section>
            <q-item-section>
              社區公告
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/News">
            <q-item-section avatar>
              <q-icon name="mdi-alert-decagram" />
            </q-item-section>
            <q-item-section>
              最新公告
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/Userpost">
            <q-item-section avatar>
              <q-icon name="mdi-flag" />
            </q-item-section>
            <q-item-section>
              旅遊心得
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/Atmanage">
            <q-item-section avatar>
              <q-icon name="mdi-note-plus" />
            </q-item-section>
            <q-item-section>
              投稿管理
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
    </q-drawer>
    <!-- <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
    </q-drawer> -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-blue text-white">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          <div> Copyright © 2022 Irene</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
// import { storeToRefs } from 'pinia'
// import { useUserStore } from '@/stores/user'

// const user = useUserStore()
// const { avatar } = storeToRefs(user)
// import 123 from '../pages/123.vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
  // components: {  }
}
</script>
