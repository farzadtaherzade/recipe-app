<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

a {
  color: #2aeb74;
  text-decoration: none;
}

button {
  appearance: none;
  border: none;
  background-color: none;
  cursor: pointer;

  background-color:#2aeb74;
  font-size: 1.12rem;
  color: #030e1b;
  padding:.5rem 1rem;
  border-radius:.5rem;
}

</style>
