<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar id="toolbar" style="background:#7cade7">
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->
        <q-toolbar-title class="text-h4" style="max-width:200px;min-height: 100px;">
          <div class="title" style="max-height: 100px;position: absolute;top:50%;transform: translateY(-50%);">
            {{ $t('Matsu') }}
            <!-- <div class="text-subtitle1 no-margin no-padding">Matsu</div> -->
          </div>
        </q-toolbar-title>

        <!-- <div id="q-app" style="margin: auto;">
        <q-btn flat class="mg-md text-h6">首頁
        </q-btn>
        <q-btn flat class="mg-md text-h6" label="公告資訊">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>公告資訊</q-item-label>
              </q-item-section>
            </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
        </q-btn>
        <q-btn flat class="mg-md text-h6">交通資訊</q-btn>
        <q-btn flat class="mg-md text-h6">食宿資訊</q-btn>
        <q-btn flat class="mg-md text-h6">旅遊資訊</q-btn>
        <q-btn flat class="mg-md text-h6">會員專區</q-btn>
        </div>
<div id="q-app">
  <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="Dropdown Button">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</div> -->
        <div class="gt-md menu row justify-center items-center" style="margin:auto;height: 100px;">
          <q-btn size=20px style="font-weight: bold;" to="/index" stretch flat :label="$t('Index')"></q-btn>
          <!-- 公告資訊 -->
          <q-btn-dropdown size=20px style="font-weight: bold;" stretch flat :label="$t('Announcement')" to="/Announce">
            <q-list>
              <!-- <q-item-label header>Folders</q-item-label> -->
              <q-item v-for="n in 1" :key="`x.${n}`" clickable v-close-popup tabindex="0">
                <!-- <q-item-section avatar>
              <q-avatar icon="folder" color="secondary" text-color="white" />
            </q-item-section> -->
                <q-item-section>
                  <q-item-label>{{ $t('New') }}</q-item-label>
                  <!-- <q-item-label caption>February 22, 2016</q-item-label> -->
                </q-item-section>
                <!-- <q-item-section side>
              <q-icon name="info" />
            </q-item-section> -->
              </q-item>
              <!-- <q-separator inset spaced /> -->
              <!-- <q-item-label header>Files</q-item-label> -->
              <q-item v-for="n in 1" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Activities') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="n in 1" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Community') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="n in 1" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Recruitment') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="n in 1" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Media') }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <!-- 交通資訊 -->
          <q-btn-dropdown size=20px style="font-weight: bold;" stretch flat :label="$t('Transportation')" to="/Trans">
            <q-list>
              <q-item v-for="n in 1" :key="`x.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Airline') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="n in 1" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Vessel') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="n in 1" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Bus') }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <!-- 食宿資訊 -->
          <q-btn-dropdown size=20px style="font-weight: bold;" stretch flat :label="$t('Accommodation')" to="/Food">
            <q-list>
              <q-item v-for="n in 1" :key="`x.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Restaurant') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="n in 1" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Hotel') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="n in 1" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('FamousProduct') }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <!-- 旅遊資訊 -->
          <q-btn-dropdown size=20px style="font-weight: bold;" stretch flat :label="$t('Travel')" to="/Travel">
            <q-list>
              <q-item v-for="n in 1" :key="`x.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Attractions') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="n in 1" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Experience') }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown size=20px style="font-weight: bold;" stretch flat :label="$t('Education')">
            <q-list>
              <!-- 國小 -->
              <q-item-label header>{{ $t('Elementary') }}</q-item-label>
              <q-item href="https://www.djps.matsu.edu.tw/" target="_blank" v-for="n in 1" :key="`x.${n}`" clickable
                v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('DongJyu') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item href="https://www.raps.matsu.edu.tw/" target="_blank" v-for="n in 1" :key="`y.${n}`" clickable
                v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('RenAi') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item href="https://www.tcps.matsu.edu.tw/" target="_blank" v-for="n in 1" :key="`y.${n}`" clickable
                v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('TangChi') }}</q-item-label>
                </q-item-section>
              </q-item>
              <!-- 國中小 -->
              <q-item-label header>{{ $t('ElementaryN') }}</q-item-label>
              <q-item href="https://www.jjps.matsu.edu.tw/" target="_blank" v-for="n in 1" :key="`y.${n}`" clickable
                v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('ChungCheng') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item href="https://www.jsps.matsu.edu.tw/" target="_blank" v-for="n in 1" :key="`y.${n}`" clickable
                v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('JieShou') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item href="https://www.jhjh.matsu.edu.tw/" target="_blank" v-for="n in 1" :key="`y.${n}`" clickable
                v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('JinCheng') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item href="https://www.tyjh.matsu.edu.tw/" target="_blank" v-for="n in 1" :key="`y.${n}`" clickable
                v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('DongYin') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item href="https://www.jshjh.matsu.edu.tw/" target="_blank" v-for="n in 1" :key="`y.${n}`" clickable
                v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('ChungShan') }}</q-item-label>
                </q-item-section>
              </q-item>
              <!-- 高中 -->
              <q-item-label header>{{ $t('SeniorHighSchool') }}</q-item-label>
              <q-item href="https://www.mssh.matsu.edu.tw/" target="_blank" v-for="n in 1" :key="`y.${n}`" clickable
                v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('MatsuH') }}</q-item-label>
                </q-item-section>
              </q-item>
              <!-- 其他 -->
              <q-item-label header>{{ $t('Others') }}</q-item-label>
              <q-item href="https://www.tyjh.matsu.edu.tw/" target="_blank" v-for="n in 1" :key="`y.${n}`" clickable
                v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Resources') }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <!-- 會員專區 -->
          <q-btn-dropdown size=20px style="font-weight: bold;" stretch flat :label="$t('Account')" to="/User">
            <!-- dropdown-icon="none" -->
            <q-list>
              <q-item v-for="n in 1" :key="`x.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('MyAc') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="n in 1" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('Myposts') }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="n in 1" :key="`y.${n}`" clickable v-close-popup tabindex="0">
                <q-item-section>
                  <q-item-label>{{ $t('MyLikes') }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <q-btn size=15px v-if='!isLogin' to="/Login" flat :label="$t('LogIn')"></q-btn>
        <q-btn size=15px v-if='!isLogin' to="/Register" flat style="margin-right:30px" :label="$t('SignIn')"></q-btn>
        <q-btn size=15px v-if='isLogin' @click='logout' flat label="logout"></q-btn>
        <q-btn size=15px v-if='isLogin && isAdmin' to='/admin' flat label="admin"></q-btn>

        <!-- <q-separator dark vertical />
      <q-btn stretch flat label="Link" />
      <q-separator dark vertical />
      <q-btn stretch flat label="Link" /> -->
        <q-select v-model="locale" :options="localeOptions" label="Change Language" emit-value map-options
          style="min-width: 140px" />
        <!-- Drawer -->
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-drawer id="drawermatsu" v-model="drawer" :width="220" :breakpoint="500" side="right" overlay
          class="shadow-2">
          <q-scroll-area class="fit">
            <q-list padding class="menu-list">
              <q-item clickable v-ripple to="/index">
                <q-item-section avatar>
                  <q-icon name="home" />
                </q-item-section>
                <q-item-section>
                  {{ $t('Index') }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/Announce">
                <q-item-section avatar>
                  <q-icon name="mdi-book-open" />
                </q-item-section>
                <q-item-section>
                  {{ $t('Announcement') }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/Trans">
                <q-item-section avatar>
                  <q-icon name="mdi-airplane" />
                </q-item-section>
                <q-item-section>
                  {{ $t('Transportation') }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/Food">
                <q-item-section avatar>
                  <q-icon name="mdi-food" />
                </q-item-section>
                <q-item-section>
                  {{ $t('Accommodation') }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/Travel">
                <q-item-section avatar>
                  <q-icon name="mdi-flag-plus" />
                </q-item-section>
                <q-item-section>
                  {{ $t('Travel') }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="mdi-school" />
                </q-item-section>
                <q-item-section>
                  {{ $t('Education') }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/Userback">
                <q-item-section avatar>
                  <q-icon name="mdi-account" />
                </q-item-section>
                <q-item-section>
                  {{ $t('Account') }}
                </q-item-section>
              </q-item>
              <q-select v-model="locale" :options="localeOptions" label="Change Language" emit-value map-options
                style="padding: 15px;" />
            </q-list>
          </q-scroll-area>
        </q-drawer>
      </q-toolbar>
    </q-header>
    <!-- footer -->
    <q-footer reveal elevated>
      <q-toolbar style="background:#7cade7">
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'
// import EssentialLink from 'components/EssentialLink.vue'

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-TW', label: '繁體中文' }
]
const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin } = storeToRefs(user)
const drawer = ref(false)

const { locale } = useI18n({ useScope: 'global' })
// 這段把預設語言設為偵測到電腦的語言
locale.value = useQuasar().lang.getLocale()

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

defineComponent({
  name: 'MainLayout'

  // components: {
  //   EssentialLink
  // }
})
// const leftDrawerOpen = ref(false)
// const essentialLinks = linksList
// const toggleLeftDrawer = () => {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
</script>
<style>
#drawermatsu {
  color: black;
}

/* pad */
@media (min-width: 1200px) {
  .header {
    padding: 10px;
  }
}

/* mini pad */
@media (min-width: 768px) {
  .header {
    padding: 5px;
  }
}

/* mobile */
@media (max-width: 767px) {
  .header {
    padding: 0px;
  }
}
</style>
