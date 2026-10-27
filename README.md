# Gestor de tasques

## Resum visual de la comunicació i jerarquía de components

```text
App.vue
  ├─ constants reactives: tasks, onlyCompleted
  ├─ funcions: createTask, deleteTask, completeTask
  ├─ TaskForm.vue  -> emit: create-task
  └─ TaskList.vue  -> props: tasks, onlyCompleted | emit: on-complete, on-delete
        └─ TaskItem.vue -> props: task
              ├─ emit: on-complete
              └─ emit: on-delete
```
export interface Task {
  id: number
  name: string
  completed: boolean
}
