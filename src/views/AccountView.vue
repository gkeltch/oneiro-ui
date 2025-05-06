<script setup lang="ts">

import SettingsIcon from "@/components/icons/SettingsIcon.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import Chroma from "@/components/Chroma.vue";
import data from "@/data/data.ts";
import {ref} from "vue";
const date=ref(new Date());
</script>

<template>
  <div class="panel">

    <div class="header">
      <Chroma/>
      <div class="profilePic"></div>
      <div class="tags">
        <div class="tag" v-for="tag in data.user.recentEmotions">{{ tag }}</div>
      </div>
      <div class="icon">
        <SettingsIcon/>
      </div>
    </div>
    <div class="controls">
      <div class="plusIcon">
        <PlusIcon/>
      </div>
      <div class="calender">
        <VDatePicker transparent borderless expanded view="weekly" v-model="date"/>
      </div>

    </div>
    <div class="entries">
      <div class="journal" v-for="journal in data.journals">
      {{ journal}}
      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(50vh - 48px);
  position: relative;
  background-color: white;
}

.profilePic {
  background-image: url("/profile.jpg");
  height: 175px;
  width: 175px;
  border-radius: 50%;
  background-position: center 30%;
  background-size: cover;
  z-index: 1;
  position: relative;
  margin: 12px;
}

.panel {
  display: grid;
}

.tags {
  width: 50%;
  display: flex;
  justify-content: center;
}

.tag {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  z-index: 1;
  position: relative;
  height: 45px;
  width: fit-content;
  border-radius: 45px;
  padding: 0 18px;
  border: 2px solid black;
  margin-right: 12px;
}
.controls {
  width: 50%;
  display: flex;
  justify-self: center;
  justify-content: center;

}
.calender {
  width: 100%;
}
</style>
