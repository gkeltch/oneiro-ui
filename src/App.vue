<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Card from "@/components/Card.vue";
import CardReverse from "@/components/CardReverse.vue";
import data from "@/data/data.ts";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>

  <div class="app">
    <Navbar/>
    <RouterView />
  </div>


</template>

<style scoped lang="scss">

@import "assets/Library";


.app{
  display: grid;
  position: relative;
  width: 100%;
  height: 100vh;
}

.name{
  font-size: $fontMed;
}

</style>
