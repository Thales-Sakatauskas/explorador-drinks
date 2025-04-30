<template>
    <input v-model="query" @input="$emit('search', query)" placeholder="Buscar drinks..." />
  </template>
  
  <script>
  export default {
    data() {
      return { query: '' };
    },
  };
  </script>
  
  <style scoped>
  input {
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  