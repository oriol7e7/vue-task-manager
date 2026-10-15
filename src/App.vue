<script setup lang="ts">
import { type Ref, ref, computed } from 'vue'
import type { Task } from './model/Task'

const tasks = ref<Task[]>([])
const completedTasks = computed(() => {
  return tasks.value.filter((t) => t.completed)
})
const createTasks = (task: Task) => {
  tasks.value.push(task)
}
const deleteTask = (id: number) => {
  const taskIdxToDelete = tasks.value.findIndex((t) => t.id === id)
  tasks.value.splice(taskIdxToDelete, 1)
}
const completeTask = (id: number) => {
  const taskIdxToComplete = tasks.value.findIndex((t) => t.id === id)
  if (taskIdxToComplete === -1) {
    return
  }
  tasks.value[taskIdxToComplete]!.completed = true
}
</script>

<template>
  <h1>Task Manager</h1>
</template>

<style scoped></style>
