<script setup lang="ts">
import EditIcon from "@/components/icons/EditIcon.vue";

const props = defineProps(["name"])
</script>

<template>
<div class="journal">
<div class="name">{{name}}</div>
  <div class="button">
    edit <EditIcon/>
  </div>
</div>
</template>

<style scoped lang="scss">
@import"../assets/Colors";
.journal {
  background-color:lighten($secondary,10%);
  height: 180px;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 6px;
  text-align: center;
}
.button {
  background-color: $light;
  color:black;
  width:fit-content;
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
margin-left:auto;
}
.name{
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
