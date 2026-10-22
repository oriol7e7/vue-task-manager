<script setup lang="ts">
import { computed } from 'vue'
import type { Task } from '../model/Task'
import TaskItem from './TaskItem.vue'
const props = defineProps<{ tasks: Task[]; onlyCompleted: boolean }>()
const completedTasks = computed(() => {
  return props.tasks.filter((t) => t.completed)
})
const emit = defineEmits(['on-complete', 'on-delete'])

/**
 * EMITS EVENT TO COMPLETE TASK
 * @param id Id of the task to complete
 */
const completeTask = (id: number) => {
  emit('on-complete', id)
}

/**
 * EMITS EVENT TO DELETE TASK
 * @param id Id of the task to delete
 */
const deleteTask = (id: number) => {
  emit('on-delete', id)
}
</script>
<template>
  <!--Totes les tasques-->
  <div class="tasks">
    <TaskItem
      v-if="!props.onlyCompleted"
      v-for="task in props.tasks"
      :key="task.id"
      :task="task"
      @on-complete="completeTask(task.id)"
      @on-delete="deleteTask(task.id)"
    />
    <!--Tasques completades-->
    <TaskItem
      v-else
      v-for="task in completedTasks"
      :key="task.id + task.name"
      :task="task"
      @on-complete="completeTask(task.id)"
      @on-delete="deleteTask(task.id)"
    />
  </div>
</template>
<style scoped>
.tasks {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
