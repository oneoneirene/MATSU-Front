<template>
  <div class="q-pa-md">
    <h5 style="text-align:center">飛機航班</h5>
    <div class="q-gutter-y-md" style="max-width: 600px" id="airplane">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="松山機場" />
          <q-tab name="alarms" label="台中機場" />
          <q-tab name="movies" label="北竿機場" />
          <q-tab name="nangan" label="南竿機場" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="nangan">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
  <h5 style="text-align:center">船運資訊</h5>
  <h5 style="text-align:center">公車時刻表</h5>
</template>
<script setup>
import { ref } from 'vue'

const tab = ref('mails')
</script>

<style>
  #airplane {
    margin: auto;
  }
</style>
