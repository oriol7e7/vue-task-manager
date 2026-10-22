<script setup lang="ts">
import type { Task } from '@/model/Task'
//Emit to father when task delete and task completed are clicked
const emit = defineEmits(['on-delete', 'on-complete'])

//Prop of the task to display
const { task } = defineProps<{ task: Task }>()
</script>

<template>
  <div class="task">
    <h4 :class="task.completed ? 'completed' : 'not-completed'">{{ task.name }}</h4>
    <button class="completa" @click="emit('on-complete', task.id)">Completa</button>
    <button @click="emit('on-delete', task.id)">Elimina</button>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}

.task {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.completa {
  background-color: transparent;
  color: rgb(250, 185, 100);
}
</style>
