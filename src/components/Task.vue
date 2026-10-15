<script setup lang="ts">
import type { Task } from '@/model/Task'
const emit = defineEmits(['onDelete', 'onComplete'])
const props = defineProps<Task>()
</script>

<template>
  <div>
    <h4>{{ props.name }}</h4>
    <button @click="emit('onComplete', props.id)">Completa</button>
    <button @click="emit('onDelete', props.id)">Elimina</button>
  </div>
</template>

<style scoped></style>
