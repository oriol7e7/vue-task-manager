<script setup lang="ts">
import type { Task } from '@/model/Task'
import { ref } from 'vue'

const emit = defineEmits(['create-task'])
const taskName = ref('')
const onCreateTask = () => {
  emit('create-task', taskName.value)
  taskName.value = ''
}
</script>

<template>
  <form @submit.prevent="onCreateTask">
    <input type="text" v-model="taskName" placeholder="Posa el nom de la tasca" />
    <button type="submit">Crear Tasca</button>
  </form>
</template>

<style scoped></style>
