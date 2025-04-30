<template>
    <div class="alphabet">
      <span v-for="letter in alphabet" :key="letter" @click="$emit('select', letter)">
        {{ letter }}
      </span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') };
    },
  };
  </script>
  
  <style scoped>
  .alphabet-wrapper {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.alphabet {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

span {
  cursor: pointer;
  font-weight: bold;
  color: #ffcc00;
  padding: 6px;
  font-size: 18px;
  transition: transform 0.2s ease-in-out;
  padding: 10px;
}

span:hover {
  transform: translateY(-3px) scale(1.2);
  text-shadow: 0 0 5px #ffcc00;
  
}

  </style>
