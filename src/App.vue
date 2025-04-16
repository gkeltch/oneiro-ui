<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Card from "@/components/Card.vue";
import CardReverse from "@/components/CardReverse.vue";
import data from "@/data/data.ts";
</script>

<template>

  <div class="title">
    Oneiro
  </div>

  <div class="navbar">
    <div>home</div>
    <div>log in</div>
    <div>about</div>

  </div>
  <div class="contentGrid">

    <component
      v-for="(card, index) in data.about"
      :key="index"
      :is="index % 2 === 0 ? Card : CardReverse"
      :name="card.name"
      :desc="card.desc"
      :image="card.image"
    />

  </div>

  <RouterView />
</template>

<style scoped lang="scss">

@import "assets/Colors";
@import "assets/Text";

.title{
  color:$light;
  font-size:$fontBig;
  text-align: center;
  font-family: "Bungee Shade", sans-serif;
}

.name{
  font-size: $fontMed;
}

.navbar{
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  justify-self: center;
}

.contentGrid{
  display: grid;
  grid-template-columns: 1fr;
}


</style>
