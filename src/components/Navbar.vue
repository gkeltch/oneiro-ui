<script setup lang="ts">

import SearchIcon from "@/components/icons/SearchIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import MGIcon from "@/components/icons/MGIcon.vue";
</script>

<template>
  <nav>
    <div class="titleBar">
      <div class="">
        <div class="icon"><MGIcon/></div>
      </div>
      <div class="navbar">
        <RouterLink to="/"><div class="link">home</div></RouterLink>
        <RouterLink to="/login"><div class="link">log in</div></RouterLink>
       <RouterLink to="/about"><div class="link">about</div></RouterLink>
      </div>

      <div class="buttons">
        <SearchIcon/>
        <MenuIcon/>
      </div>
  </div>
  </nav>
</template>

<style scoped lang="scss">
@import "../assets/Library";

.titleBar {
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid $light;
  padding-right: 1vw;
}
.navbar{
  display: flex;
  justify-content: space-evenly;
  justify-self: center;
  width: 60%;
}
nav{
  position: fixed;
  z-index: 1;
  display: grid;
  width: 100%;
}

a{
  color: $light;
  transition: 0.5s;
  text-decoration: none;
}

a:hover{
  font-weight: 600;
  transition: 0.5s;
}

.icon{
  cursor: pointer;
}

</style>
