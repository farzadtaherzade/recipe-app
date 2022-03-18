<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore();

const route = useRoute();

const recipe = computed(() => {
    return store.state.recipes.find(recipe => recipe.slug === route.params.slug)
})

</script>

<template>
    ّ
    <div class="recipe">
        <RouterLink to="/">&lt; Back</RouterLink>
        <h1>{{ recipe.title }}</h1>
        <p>{{ recipe.description }}</p>
        <hr />
        <div class="ingredient">
            <h3>Ingredient</h3>
            <ul>
                <li v-for="(ingredient, i) in recipe.ingredients" :key="i">{{ ingredient }}</li>
            </ul>
        </div>
        <div class="method">
            <h3>Method</h3>
            <ol>
                <li v-for="(step, i) in recipe.method" :key="i">{{ step }}</li>
            </ol>
        </div>
    </div>
</template>

<style scoped>
.recipe {
    padding: 1rem;
    max-width: 768px;
    margin: 0 auto;
}
.desc {
    font-size: 1.12rem;
    line-height: 1.4;
    margin-bottom: 1rem;
}
hr {
    margin-bottom: 1rem;
}
h3,
h1,
p {
    margin-bottom: 1rem;
}
.ingredient {
    padding: 1rem;
    background-color: #081c33;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
}
.method ol li {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    list-style-position: inside;
    border-bottom: 1px solid #eee;
}
</style>
