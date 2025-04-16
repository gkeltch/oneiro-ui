<script setup lang="ts">

import {computed} from "vue";

const props = defineProps(['name','desc','image']);

const imageUrl = computed(()=> 'url("'+props.image+'")').value;


</script>

<template>
  <div class="card">
    <div class="image"></div>
    <div class="info">
      <div class="name">{{name}}</div>
      <div class="desc">{{desc}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@import "../assets/Colors";
@import "../assets/Text";

.image{
  background-image: v-bind(imageUrl);
  background-size: cover;
  background-position: 100% 100%;
  height: 100%;
  min-width: 50%;
  aspect-ratio: 3/2;
}

.card{
  display: flex;
  grid-column: span 2;
  height:50vh;
}

.info{
  padding: 2rem;
  text-align: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name{
  font-size: $fontMed;
}

</style>
