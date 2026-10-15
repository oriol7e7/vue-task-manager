<script setup lang="ts">
const onCreateTask = () => {
    
}
</script>

<template>
  <form @submit.prevent="onCreateTask">
    <input type="text" placeholder="Posa el nom de la tasca" />
    <button type="submit">Crear Tasca</button>
  </form>
</template>

<style scoped></style>
