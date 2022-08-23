<template>
  <q-card class="product-card " flat bordered>
    <!-- <q-img :src='product.image' :ratio="4 / 3" /> -->
    <q-card-section>
      <!-- <router-link :to="'/job/' + product._id" style="text-decoration:none"> -->
        <div class="text-overline text-orange-9">${{ product.job }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ product.jobtitle }}</div>
        <div class="text-caption text-grey">
          {{ product.startDay }} ~ {{ product.endDay }}
        </div>
      <!-- </router-link> -->
    </q-card-section>
    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subitle2">
          {{ product.description }}
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script setup>
// import { useUserStore } from '../stores/user'
import { ref } from 'vue'
const expanded = ref(false)
defineProps(['product'])
// defineProps({
//   product: {
//     type: Object,
//     required: true,
//     default () {
//       return {
//         _id: '',
//         name: '',
//         price: 0,
//         category: '',
//         sell: false,
//         image: '',
//         description: ''
//       }
//     }
//   }
// })
</script>
