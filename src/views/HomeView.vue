<script setup lang="ts">

import data from "@/data/data.ts";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import FBIcon from "@/components/icons/FBIcon.vue";
import IGicon from "@/components/icons/IGicon.vue";
import TWicon from "@/components/icons/TWicon.vue";
</script>

<template>


  <div class="contentWrap">

    <div class="navLeft">
      <div class="socials">
        <div class="icon"><FBIcon/></div>
        <div class="icon"><IGicon/></div>
        <div class="icon"><TWicon/></div>
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

</template>
<style scoped lang="scss">

@import "../assets/Library";

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

.icon{
  padding: 8px 0;
}

.socials{
  border-top: 2px solid $light;
  display: flex;
  flex-direction: column;
  padding: 1vw;
  justify-content: center;
  align-items: center;
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

.title{
  position: absolute;
  font-size: $fontBig;
  letter-spacing: 6vw;
  text-align: center;
  justify-self: center;
  align-self: center;
  margin-right: -6vw;
}

.right{
  text-align: right;
}

.button{
  margin-left:auto;
}

.bottom{
  margin-top: auto;
}

.contentGrid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.info{
  padding: 48px;
  height: 80%;
  display: flex;
  flex-direction: column;
}

.infoWrap{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
}
</style>
