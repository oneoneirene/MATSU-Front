<template>
  <div class="q-pa-md  window-width">
    <q-card>
      <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify">
        <q-tab name="mails" :label="$t('Restaurant')" style="height:80px" />
        <q-tab name="alarms" :label="$t('Hotel')" />
        <q-tab name="movies" :label="$t('FamousProduct')" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails" class="q-pa-none">

          <q-splitter class="window-height" v-model="splitterModel">

            <template v-slot:before>
              <q-tabs v-model="innerTab" vertical class="text-teal">
                <q-tab name="innerMails" icon="mail" label="Mails" />
                <q-tab name="innerAlarms" icon="alarm" label="Alarms" />
                <q-tab name="innerMovies" icon="movie" label="Movies" />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels v-model="innerTab" animated transition-prev="slide-down" transition-next="slide-up">
                <q-tab-panel name="innerMails">
                  <div class="text-h4 q-mb-md">美食餐廳</div>
                  <!-- 美食餐廳 -->
                  <div id="food" class="q-pa-md row q-gutter-md">
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="absolute-bottom text-h6">
                          Title
                        </div>
                      </q-img>
                      <q-card-section>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid quasi possimus
                        perspiciatis libero aliquam voluptatibus, numquam laborum dignissimos quisquam fugit ut nulla
                        explicabo tempore adipisci dolorem officia facilis sapiente.
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="absolute-bottom text-h6">
                          Title
                        </div>
                      </q-img>
                      <q-card-section>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid quasi possimus
                        perspiciatis libero aliquam voluptatibus, numquam laborum dignissimos quisquam fugit ut nulla
                        explicabo tempore adipisci dolorem officia facilis sapiente.
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="absolute-bottom text-h6">
                          Title
                        </div>
                      </q-img>
                      <q-card-section>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid quasi possimus
                        perspiciatis libero aliquam voluptatibus, numquam laborum dignissimos quisquam fugit ut nulla
                        explicabo tempore adipisci dolorem officia facilis sapiente.
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="absolute-bottom text-h6">
                          Title
                        </div>
                      </q-img>
                      <q-card-section>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid quasi possimus
                        perspiciatis libero aliquam voluptatibus, numquam laborum dignissimos quisquam fugit ut nulla
                        explicabo tempore adipisci dolorem officia facilis sapiente.
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="absolute-bottom text-h6">
                          Title
                        </div>
                      </q-img>
                      <q-card-section>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid quasi possimus
                        perspiciatis libero aliquam voluptatibus, numquam laborum dignissimos quisquam fugit ut nulla
                        explicabo tempore adipisci dolorem officia facilis sapiente.
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="absolute-bottom text-h6">
                          Title
                        </div>
                      </q-img>
                      <q-card-section>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid quasi possimus
                        perspiciatis libero aliquam voluptatibus, numquam laborum dignissimos quisquam fugit ut nulla
                        explicabo tempore adipisci dolorem officia facilis sapiente.
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="absolute-bottom text-h6">
                          Title
                        </div>
                      </q-img>
                      <q-card-section>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid quasi possimus
                        perspiciatis libero aliquam voluptatibus, numquam laborum dignissimos quisquam fugit ut nulla
                        explicabo tempore adipisci dolorem officia facilis sapiente.
                      </q-card-section>
                    </q-card>
                    <q-card class="my-card">
                      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                        <div class="absolute-bottom text-h6">
                          Title
                        </div>
                      </q-img>
                      <q-card-section>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquid quasi possimus
                        perspiciatis libero aliquam voluptatibus, numquam laborum dignissimos quisquam fugit ut nulla
                        explicabo tempore adipisci dolorem officia facilis sapiente.
                      </q-card-section>
                    </q-card>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="innerAlarms">
                  <div class="text-h4 q-mb-md">Alarms</div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure
                    quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla
                    ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure
                    quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla
                    ullam. In, libero.</p>
                </q-tab-panel>

                <q-tab-panel name="innerMovies">
                  <div class="text-h4 q-mb-md">Movies</div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure
                    quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla
                    ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure
                    quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla
                    ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure
                    quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla
                    ullam. In, libero.</p>
                </q-tab-panel>
              </q-tab-panels>
            </template>

          </q-splitter>
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="movies">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const tab = ref('mails')
const innerTab = ref('innerMails')
const splitterModel = ref(20)
</script>
<style>
.my-card {
  width: 300px;
  margin: 15px;
}

#food {
  width: 1400px;
  display: flex;
  margin: auto;
  margin-top: -25px;
}

.titleF {
  text-align: center;
  background-color: pink;
  margin: auto;
}
</style>
