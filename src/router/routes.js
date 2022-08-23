import MainLayout from 'layouts/MainLayout.vue'
import AdminLayout from 'layouts/AdminLayout.vue'
import UserLayout from 'layouts/UserLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'Index',
        name: 'Index',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          title: '首頁',
          login: false,
          admin: false
        }
      },
      {
        path: 'Login',
        name: 'Login',
        component: () => import('pages/loginPage.vue'),
        meta: {
          title: '登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'Register',
        name: 'Register',
        component: () => import('pages/RegisterPage.vue'),
        meta: {
          title: '註冊',
          login: false,
          admin: false
        }
      },
      {
        path: 'User',
        name: 'User',
        component: () => import('pages/UserPage.vue'),
        meta: {
          title: '會員管理',
          login: true,
          admin: false
        }
      },
      {
        path: 'Trans',
        name: 'Trans',
        component: () => import('pages/TransPage.vue'),
        meta: {
          title: '交通資訊',
          login: false,
          admin: false
        }
      },
      {
        path: 'Travel',
        name: 'Travel',
        component: () => import('pages/TravelPage.vue'),
        meta: {
          title: '旅遊資訊',
          login: false,
          admin: false
        }
      },
      {
        path: 'Announce',
        name: 'Announce',
        component: () => import('pages/AnnouncePage.vue'),
        meta: {
          title: '公告資訊',
          login: false,
          admin: false
        }
      },
      {
        path: 'Food',
        name: 'Food',
        component: () => import('pages/FoodPage.vue'),
        meta: {
          title: '食宿資訊',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'Member',
        name: 'Member',
        component: () => import('pages/admin/MemberPage.vue'),
        meta: {
          title: '會員管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'Job',
        name: 'Job',
        component: () => import('pages/admin/JobManage.vue'),
        meta: {
          title: '徵才訊息管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'Activity',
        name: 'Activity',
        component: () => import('pages/admin/ActivitiesManage.vue'),
        meta: {
          title: '活動資訊管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'Community',
        name: 'Community',
        component: () => import('pages/admin/CommunityManage.vue'),
        meta: {
          title: '社區公告管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'News',
        name: 'News',
        component: () => import('pages/admin/NewsManage.vue'),
        meta: {
          title: '最新公告管理',
          login: true,
          admin: true
        }
      }
    ]
  },
  {
    path: '/userb',
    component: UserLayout,
    children: [
      {
        path: 'Userback',
        name: 'Userback',
        component: () => import('pages/user/UserbackPage.vue'),
        meta: {
          title: '個人資料管理',
          login: true,
          admin: false
        }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
export default routes
