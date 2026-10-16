<script setup lang="ts">
import type { Task } from '@/model/Task'
const emit = defineEmits(['onDelete', 'onComplete'])
const { task } = defineProps<{ task: Task }>()
</script>

<template>
  <div class="task">
    <h4 :class="task.completed ? 'completed' : 'not-completed'">{{ task.name }}</h4>
    <button class="completa" @click="emit('onComplete', task.id)">Completa</button>
    <button @click="emit('onDelete', task.id)">Elimina</button>
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
