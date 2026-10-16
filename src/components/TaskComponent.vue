<script setup lang="ts">
import type { Task } from '@/model/Task'
const emit = defineEmits(['onDelete', 'onComplete'])
const { task } = defineProps<{ task: Task }>()
</script>

<template>
  <div>
    <h4 :class="task.completed ? 'completed' : 'not-completed'">{{ task.name }}</h4>
    <button @click="emit('onComplete', task.id)">Completa</button>
    <button @click="emit('onDelete', task.id)">Elimina</button>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
