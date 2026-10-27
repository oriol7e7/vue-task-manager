<script setup lang="ts">
import { type Ref, ref, computed } from 'vue'
import type { Task } from './model/Task'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import { useToast } from 'vue-toastification'
const toast = useToast()

const onlyCompleted = ref(false)
const tasks = ref<Task[]>([])

/**
 * Creates a new task (called when AddTask.vue component emits create-task emit)
 * @param taskName The name of the task
 */
const createTask = (taskName: string) => {
  const lastId = tasks.value.length
  const task: Task = {
    id: lastId + 1,
    name: taskName,
    completed: false,
  }
  tasks.value.push(task)
  toast.success('Tasca creada correctament')
}

/**
 * Deletes a task (called when Task.list.vue emits on-delete emit)
 * @param id The id of the task to delete
 */
const deleteTask = (id: number) => {
  const taskIdxToDelete = tasks.value.findIndex((t) => t.id === id)
  if (taskIdxToDelete === -1) {
    return
  }
  tasks.value.splice(taskIdxToDelete, 1)
  toast.success('Tasca eliminada correctament')
}

/**
 * Completes a task (called when Task.list.vue emits on-complete emit)
 * @param id The id of the task to complete
 */
const completeTask = (id: number) => {
  const taskIdxToComplete = tasks.value.findIndex((t) => t.id === id)
  if (taskIdxToComplete === -1) {
    return
  }
  tasks.value[taskIdxToComplete]!.completed = !tasks.value[taskIdxToComplete]!.completed
  toast.success('Tasca completada correctament')
}
</script>

<template>
  <main>
    <h1>Task Manager</h1>
    <TaskForm @create-task="createTask" />
    <h4>My tasks - {{ tasks.length }}</h4>
    <div class="filter">
      <label for="">Only completed</label>
      <input type="checkbox" v-model="onlyCompleted" />
    </div>

    <!--Totes les tasques-->
    <TaskList
      :only-completed="onlyCompleted"
      :tasks="tasks"
      @on-complete="completeTask"
      @on-delete="deleteTask"
    />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100dvh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}
.tasks {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter {
  display: flex;
  gap: 0.25rem;
}
</style>
