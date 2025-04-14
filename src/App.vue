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

    <div class="card">
      <div class="image1"></div>
      <div class="info">
        <div class="name">Discover Dream meanings </div>
        <div class="desc">Dreams are hidden messages  </div>
      </div>
    </div>

    <div/>
    <div/>

    <div class="card">
      <div class="image2"></div>
      <div class="info">
        <div class="name">Discover Dream meanings </div>
        <div class="desc">Dreams are hidden messages  </div>
      </div>
    </div>

    <div class="card">
      <div class="image3"></div>
      <div class="info">
        <div class="name">Discover Dream meanings </div>
        <div class="desc">Dreams are hidden messages  </div>
      </div>
    </div>

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

body{
  font-family: "Ubuntu Condensed", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #552424 !important;
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
.contents{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
}
.card{
  display: flex;
  grid-column: span 2;
  height:30vh;
}

.image1,.image2,.image3{
  background-size: cover;
  background-position: 100% 100%;
  height: 100%;
  width: 50%;
  aspect-ratio: 1/1;
}

.image1{
  background-image: url("/dream1.jpg");
}

.image2{
  background-image: url("/dream2.jpg");
}

.image3{
  background-image: url("/dream3.jpg");
}

</style>
