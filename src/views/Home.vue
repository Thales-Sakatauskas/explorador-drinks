<template>
    <div>
      <SearchBar @search="searchDrinks" />
      <CategoryFilter :categories="categories" @select="filterByCategory" />
      <AlphabetFilter @select="filterByLetter" />
      <div class="drinks">
        <DrinkCard v-for="drink in drinks" :key="drink.idDrink" :drink="drink" @open="openDrink" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import SearchBar from '../components/SearchBar.vue';
  import CategoryFilter from '../components/CategoryFilter.vue';
  import AlphabetFilter from '../components/AlphabetFilter.vue';
  import DrinkCard from '../components/DrinkCard.vue';
  
  export default {
    components: { SearchBar, CategoryFilter, AlphabetFilter, DrinkCard },
    data() {
      return {
        drinks: [],
        categories: [],
      };
    },
    created() {
      this.fetchCategories();
    },
    methods: {
      async fetchCategories() {
        const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        this.categories = data.drinks;
      },
      async searchDrinks(query) {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
        this.drinks = data.drinks || [];
      },
      async filterByCategory(category) {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        this.drinks = data.drinks || [];
      },
      async filterByLetter(letter) {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
        this.drinks = data.drinks || [];
      },
      openDrink(id) {
        this.$router.push(`/drink/${id}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .drinks {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
  }
  </style>
  