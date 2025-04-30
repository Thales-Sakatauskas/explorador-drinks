<template>
    <div class="card" @click="$emit('open', drink.idDrink)">
      <img :src="drink.strDrinkThumb" alt="Imagem do drink" />
      <h3>{{ drink.strDrink }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: ['drink'],
  };
  </script>
  
  <style scoped>
  .card {
  width: 150px;
  text-align: center;
  cursor: pointer;
  color: #ffcc00;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-8px) scale(1.05);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.card:hover img {
  transform: scale(1.1);
}
  </style>