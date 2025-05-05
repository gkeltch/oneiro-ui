<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

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
