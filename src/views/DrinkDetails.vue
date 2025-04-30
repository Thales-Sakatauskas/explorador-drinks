<template>
  <div class="details">
    <button class="back-button" @click="goHome">⬅ Voltar</button>

    <div v-if="drink">
      <div class="image-container">
        <img :src="drink.strDrinkThumb" alt="Drink" />
      </div>

      <h1>{{ drink.strDrink }}</h1>
      <h2>Ingredientes</h2>
      <ul>
        <li v-for="(ingredient, index) in ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
      <h2>Modo de Preparo</h2>
      <p>{{ drink.strInstructions }}</p>
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        drink: null,
        ingredients: [],
      };
    },
    async created() {
      const { id } = this.$route.params;
      const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      this.drink = data.drinks[0];
      this.ingredients = this.extractIngredients(this.drink);
    },
    methods: {
      extractIngredients(drink) {
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
          if (drink[`strIngredient${i}`]) {
            ingredients.push(drink[`strIngredient${i}`]);
          }
        }
        return ingredients;
      },
    goHome() {
      window.location.href = 'http://localhost:5173/';
  }
    },
  };
  </script>
  
  <style scoped>
  .details {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  border-radius: 10px;
}
.back-button {
  background-color: #ffcc00;
  color: #000;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.back-button:hover {
  background-color: #e6b800;
  transform: scale(1.05);
}
  </style>