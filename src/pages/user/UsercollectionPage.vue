<template>
<div class="q-pa-md">
  <div class="row"></div>
  <div class="row">
    <div class="col col-12 col-sm-6 col-md-4 col-lg-3" v-for="(collection ) in collections" :key="collection._id">
      <q-card class="my-card q-ma-sm" style="">
        <!-- <pre>{{collection}}</pre> -->
        <q-img :src="collection.exp.image" :ratio="4/3">
          <div class="absolute-bottom">
            <div class="text-h6">{{collection.exp.name}}</div>
            <div class="text-subtitle2">${{collection.exp.price}}</div>
            <div class="text-subtitle3">{{collection.exp.startDay}} ~ {{collection.product.endDay}}</div>

            <q-card-actions class="flex justify-right">
              <q-btn round flat icon="mdi-cart" :key="collection._id"  @click="addCart({ exp: collection.exp._id, quantity: 1 });deleteCollection(collection.exp._id)"></q-btn>
              <!-- @click="twoFunction(collection.product._id, 1)" -->
              <!--  @click="addCart({ product: collection.product._id, quantity: 1 });deleteCollection(collection.product._id)" -->
              <q-btn  round flat icon="mdi-delete" :key="collection.exp._id" @click="deleteCollection(collection.exp._id)"></q-btn>
            </q-card-actions>

          </div>.
        </q-img>

      </q-card>
    </div>
  </div>
</div>
</template>
<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'
// import { useUserStore } from '../../stores/user'

import { useUserStore } from '../../stores/user'
const user = useUserStore()
const { addCart } = user

// const columns = [
//   {
//     name: 'name',
//     required: true,
//     label: 'name',
//     align: 'left',
//     field: collections => collections.product.name,
//     sortable: true
//   },
//   { name: 'price', label: 'price', field: collection => collection.product.price },
//   { name: 'startDay', label: 'startDay', field: collections => collections.product.startDay },
//   { name: 'endDay', label: 'endDay', field: collections => collections.product.endDay },
//   { name: 'image', label: 'image' },
//   { name: 'btn', label: 'btn' }

// ]

const collections = reactive([])
// const deleteCollection = async (ExpId) => {
//   try {
//     console.log(expId)
//     await apiAuth.delete('/users/collections/' + expId)
//     await Swal.fire({
//       icon: 'success',
//       title: '成功',
//       text: '刪除成功'
//     })
//     init()
//   } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: '刪除失敗',
//       text: error
//     })
//   }
// }

// const twoFunction = async (productId, quantity) => {
//   try {
//     addCart({ product: productId, quantity })
//     deleteCollection(productId)
//     await Swal.fire({
//       icon: 'success',
//       title: '成功',
//       text: '加入購物車成功'
//     })
//     await init()
//   } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: '加入購物車失敗',
//       text: error
//     })
//   }
// }
const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/collections')
    collections.splice(0, collections.length)
    collections.push(...data.result)
    // console.log(collections[0].product)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error
    })
  }
}
init()
</script>
