<script setup lang="ts">
import { ref } from 'vue'
//Emit to send to the father when a task is created
const emit = defineEmits(['create-task'])
const taskName = ref('')

/**
 * Send an emit to the father of the task and clear the input
 */
const onCreateTask = () => {
  if (taskName.value.trim() === '') {
    return
  }
  emit('create-task', taskName.value)
  taskName.value = ''
}
</script>

<template>
  <div>
    <input type="text" v-model="taskName" placeholder="Posa el nom de la tasca" />
    <button @click="onCreateTask">Crear Tasca</button>
  </div>
</template>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
</style>
