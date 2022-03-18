<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const newRecipe = ref({
  title: '',
  description: '',
  ingredients: [],
  method: [],
  ingredientRows: 1,
  methodRows: 1
})

const addNewIngredient = () => {
  newRecipe.value.ingredientRows++
}

const addNewStep = () => {
  newRecipe.value.methodRows++
}

const addnewRecipe = () => {
  newRecipe.value.slug = newRecipe.value.title.toLowerCase().replace(/\s/g, '-')

  if (!newRecipe.value.slug) {
    alert('Please Enter a Title')
  } else {
    store.commit('ADD_RECIPE', { ...newRecipe.value })

    newRecipe.value = {
      title: '',
      description: '',
      ingredients: [],
      method: [],
      ingredientRows: 1,
      methodRows: 1
    }
    store.state.popupOpen = false
  }
}

</script>

<template>
  <div class="modal">
    <div class="popup-content">
      <h2>Add new recipe</h2>

      <form @submit.prevent="addnewRecipe">
        <div class="group">
          <label>Title</label>
          <input type="text" v-model="newRecipe.title" />
        </div>

        <div class="group">
          <label>Description</label>
          <textarea v-model="newRecipe.description"></textarea>
        </div>

        <div class="group">
          <label>Ingredients</label>
          <div class="ingredients" v-for="i in newRecipe.ingredientRows" :key="i">
            <input type="text" v-model="newRecipe.ingredients[i - 1]" />
          </div>

          <button type="button" @click="addNewIngredient">Add Ingredients</button>
        </div>

        <div class="group">
          <label>Method</label>
          <div class="method" v-for="i in newRecipe.methodRows" :key="i">
            <textarea v-model="newRecipe.method[i - 1]"></textarea>
          </div>
          <button type="button" @click="addNewStep">Add Step</button>
        </div>

        <button type="submit">Add Recipe</button>
        <button type="button" @click="$store.state.popupOpen = false">Close</button>
      </form>
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal .popup-content {
  background-color: #081c33;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-height: 712px;
  max-width: 765px;
  overflow: scroll;
}
.popup-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.popup-content .group {
  margin-bottom: 1rem;
}
.popup-content .group label {
  display: block;
  margin-bottom: 0.5rem;
}
.popup-content .group input,
.popup-content .group textarea {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  outline: none;
}
.popup-content .group textarea {
  height: 100px;
  resize: none;
}
.popup-content button[type="submit"] {
  margin-right: 1rem;
}

*::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>