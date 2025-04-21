<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Card from "@/components/Card.vue";
import CardReverse from "@/components/CardReverse.vue";
import data from "@/data/data.ts";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
</script>

<template>

  <div class="app">

    <div class="titleBar">
      <div class="">
        SOMNA
      </div>

      <div class="navbar">
        <div>home</div>
        <div>log in</div>
        <div>about</div>
      </div>

      <div class="buttons">
        <SearchIcon/>
        <MenuIcon/>
      </div>
    </div>

      <div class="contentWrap">

        <div class="navLeft">
          <div class="socials">
            <div>Fb</div>
            <div>In</div>
            <div>Tw</div>
          </div>
        </div>

        <div class="contentGrid">

          <div class="infoWrap">
            <div class="info">
              <div class="bottom">{{data.aboutDescLong}}</div>
            </div>
          </div>

          <div class="imageWrap">
            <div class="title">SOMNA</div>
            <div class="image"/>
          </div>

          <div class="infoWrap">
            <div class="info right">
              <div>{{data.aboutDescLong2}}</div>
              <div class="button bottom">SIGN UP</div>
            </div>
          </div>

        </div>

      </div>


  </div>

  <RouterView />
</template>

<style scoped lang="scss">

@import "assets/Library";


.titleBar {
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid $light;
  padding: 0 1vw;
}

.right{
  text-align: right;
}
.button{
  margin-left:auto;
}
.app{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.imageWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 2;
  position: relative;
}

.image{
  background-image: url("/dream4.jpg");
  background-size: cover;
  background-position: 100% 50%;
  width: 100%;
  height: 80%;
  justify-self: center;
}

.infoWrap{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
}

.info{
  padding: 48px;
  height: 80%;
  display: flex;
  flex-direction: column;
}

.bottom{
  margin-top: auto;
}

.infoWrap2{
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.info2{
  padding: 48px;
  height: 80%;
}

.contentWrap{
  display: flex;
  height: 100%;
}

.navLeft{
  border: 2px solid $light;
  border-top: none;
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.socials{
  border-top: 2px solid $light;
  display: flex;
  flex-direction: column;
  padding: 1vw;
  justify-content: center;
  align-items: center;
}

.title{
  position: absolute;
  font-size: $fontBig;
  letter-spacing: 6vw;
  text-align: center;
  justify-self: center;
  align-self: center;
  margin-right: -6vw;
}

.name{
  font-size: $fontMed;
}

.navbar{
  display: flex;
  justify-content: space-evenly;
  justify-self: center;
  width: 60%;
}

.contentGrid{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
}


</style>
