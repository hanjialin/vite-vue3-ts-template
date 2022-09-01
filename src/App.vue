<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue3 + TypeScript + Vite2 + Pinia Template 中文" />
</template>

<style>
@font-face {
  font-family: 'HarmonyOS';
  src: url('/src/assets/font/HarmonyOS_Sans_SC_Regular.ttf') format('truetype');
}
#app {
  font-family: HarmonyOS, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
