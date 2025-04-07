<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
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
  <div class="contents">
    <div>
      <div></div>
      <div></div>
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
.title{
  color:#A888B5;
  font-size:10vw;
  text-align: center;
  font-family: "Bungee Shade", sans-serif;
}

body{
  font-family: "Ubuntu Condensed", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar{
  display: flex;
  width: 50%;
  justify-content: space-evenly;
}
.contents{
  display: flex;
}

</style>
