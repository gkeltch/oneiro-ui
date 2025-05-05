<script setup lang="ts">
import {GoogleLogin} from "vue3-google-login";
import router from "@/router";

const callback = (response) => {

  console.log("Handle the response", response)
}
const loginClick=function (){
  router.push("/account")
}

</script>

<template>


  <div class="login">
    <div class="loginImage"></div>
    <div class="loginForm">

      <div class="formBody">
        <div class="title">LOGIN</div>
        <div>Login in to track dreams, discover hidden meanings, and uncover complex emotions.</div>
        <GoogleLogin :callback="callback"/>
        <div v-for="color in colors" :key="color">{{color}}</div>
        <RouterLink to="/account">
          <div class="button">Log In with Google</div>
        </RouterLink>
      </div>

    </div>
  </div>

</template>

<style scoped lang="scss">

@import "../assets/Library";

.login{
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3,1fr);
}

.loginImage{
  background-image: url("/dream3.jpg");
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
}

.loginForm{
  margin-top: 48px;
  position: relative;
  z-index: 1;
  grid-column: 2;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  color: $secondary;
}

.formBody{
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  justify-self: center;
  background-color: $light;
  border-radius: 24px;
  padding: 1vw;
}

.title{
  font-size: $fontMed;
  margin-right: -4vw;
  letter-spacing: 4vw;
  padding-bottom: 12px;
}

.button{
  padding: 6px;
  height: 24px;
  border-radius: 24px;
  text-align: center;
  background-color: $secondary;
}

</style>
