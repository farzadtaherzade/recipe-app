import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    recipes: [
      
    ],
    popupOpen: false,
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },
  },
});
