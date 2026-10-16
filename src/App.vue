<script setup lang="ts">
import { type Ref, ref, computed } from 'vue'
import type { Task } from './model/Task'
import AddTask from './components/AddTask.vue'
import TaskComponent from './components/TaskComponent.vue'
const onlyCompleted = ref(false)
const tasks = ref<Task[]>([])
const completedTasks = computed(() => {
  return tasks.value.filter((t) => t.completed)
})
const createTask = (taskName: string) => {
  const lastId = tasks.value.length
  const task: Task = {
    id: lastId + 1,
    name: taskName,
    completed: false,
  }
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
  tasks.value[taskIdxToComplete]!.completed = !tasks.value[taskIdxToComplete]!.completed
}
</script>

<template>
  <main>
    <h1>Task Manager</h1>
    <AddTask @create-task="createTask" />
    <h4>My tasks</h4>
    <div class="filter">
      <label for="">Only completed</label>
      <input type="checkbox" v-model="onlyCompleted" />
    </div>

    <!--Totes les tasques-->
    <div class="tasks">
      <TaskComponent
        v-if="!onlyCompleted"
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @on-complete="completeTask(task.id)"
        @on-delete="deleteTask(task.id)"
      />
      <!--Tasques completades-->
      <TaskComponent
        v-else
        v-for="task in completedTasks"
        :key="task.id + task.name"
        :task="task"
        @on-complete="completeTask(task.id)"
        @on-delete="deleteTask(task.id)"
      />
    </div>
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
