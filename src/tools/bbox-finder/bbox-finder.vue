<script>
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LRectangle } from '@vue-leaflet/vue-leaflet';
import { ref } from 'vue';

const bbox = ref(null);
const json = ref(null);

function setBbox() {
  try {
    const data = JSON.parse(json.value);
    console.log(data);
    // bbox.value = data
  } catch (error) {
    console.log('invalid json');
  }
}

export default {
  components: {
    LMap,
    LTileLayer,
    LRectangle,
  },
  data() {
    return {
      zoom: 2,
      json,
      bbox: bbox,
    };
  },
  methods: {
    setBbox,
  },
};
</script>

<template>
  <div>
    <textarea v-model="json"></textarea>
    <button @click="setBbox">test</button>
  </div>
  <div style="height: 600px; width: 800px">
    <l-map :useGlobalLeaflet="false" v-model:zoom="zoom" ref="map" :center="[47.41322, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-rectangle
        :bounds="[
          [46.334852, -1.509485],
          [46.342596, -1.328731],
        ]"
        :fill="true"
        color="#35495d"
      ></l-rectangle>
    </l-map>
  </div>
</template>
