<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Modal from '../components/modal.vue'
import { ref } from 'vue'

const popupOpen = ref(false)


function closeModal() {
  popupOpen.value = !popupOpen.value
}


</script>

<template>
  <div class="home">
    <h1>My Recipes</h1>
    <button @click="$store.state.popupOpen = true">Add new Recipe</button>
    <div class="recipes">
      <div class="card" v-for="recipe in $store.state.recipes" :key="recipe.slug">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
        <RouterLink :to="`/recipe/${recipe.slug}`">
          <button>View Recipe</button>
        </RouterLink>
      </div>
    </div>
    <Modal v-if="$store.state.popupOpen" />
  </div>
</template>

<style>
.home {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 3rem;
  margin-bottom: 32px;
}
.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.recipes .card {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: #081c33;
}
.recipes .card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.recipes .card p {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
</style>