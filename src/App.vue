<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Task } from './model/Task'
//Variable auxiliar per saber si mostrar les tasques completades o totes
const onlyCompleted = ref(false)

//Array de tasques generades
const tasks = ref<Task[]>([])

/**
 * Variable computada de tasques completades
 */
const completedTasks = computed(() => {
  return tasks.value.filter((t) => t.completed)
})

//Variable linkejada a l'input d'afegir tasca
const taskName = ref('')

/**
 * Crea una tasca amb la variable reactiva linkejada al input
 */
const createTask = () => {
  const lastId = tasks.value.length
  const task: Task = {
    id: lastId + 1,
    name: taskName.value,
    completed: false,
  }
  tasks.value.push(task)
}
/**
 * Esborra una tasca
 * @param id Id de la tasca a esborrar
 */
const deleteTask = (id: number) => {
  const taskIdxToDelete = tasks.value.findIndex((t) => t.id === id)
  tasks.value.splice(taskIdxToDelete, 1)
}
/**
 * Marca una tasca com a completada
 * @param id L'id de la tasca a completar
 */
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
    <form @submit.prevent="createTask">
      <input type="text" v-model="taskName" placeholder="Posa el nom de la tasca" />
      <button type="submit">Crear Tasca</button>
    </form>
    <h4>My tasks</h4>
    <div class="filter">
      <label for="">Only completed</label>
      <input type="checkbox" v-model="onlyCompleted" />
    </div>

    <!--Totes les tasques-->
    <div class="tasks">
      <div class="tasks" v-if="!onlyCompleted">
        <div class="task" v-for="task in tasks" :key="task.id">
          <h4 :class="task.completed ? 'completed' : 'not-completed'">{{ task.name }}</h4>
          <button class="completa" @click="completeTask(task.id)">
            {{ task.completed ? 'Desmarca' : 'Completa' }}
          </button>
          <button @click="deleteTask(task.id)">Elimina</button>
        </div>
      </div>
      <!--Tasques completades-->
      <div v-else>
        <div class="task" v-for="task in completedTasks" :key="task.id">
          <h4 :class="task.completed ? 'completed' : 'not-completed'">{{ task.name }}</h4>
          <button class="completa" @click="completeTask(task.id)">
            {{ task.completed ? 'Desmarca' : 'Completa' }}
          </button>
          <button @click="deleteTask(task.id)">Elimina</button>
        </div>
      </div>
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
form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
</style>
