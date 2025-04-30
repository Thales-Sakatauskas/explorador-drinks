<template>
    <select @change="$emit('select', $event.target.value)">
      <option disabled selected>Escolha uma categoria</option>
      <option v-for="category in categories" :key="category.strCategory" :value="category.strCategory">
        {{ category.strCategory }}
      </option>
    </select>
  </template>
  
  <script>
  export default {
    props: ['categories'],
  };
  </script>
  
  <style scoped>
  select {
    padding: 8px;
  }
  </style>
  