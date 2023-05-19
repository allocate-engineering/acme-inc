<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img src="./components/icons/simple_rocket.svg" class="logo"/>
    <h1>Acme Inc</h1>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #E6E6E6;
  min-width: 100%;
  min-height: 80px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 20px;
  gap: 20px;
}

.logo {
  max-width: 60px;
  height: auto;
}
</style>
