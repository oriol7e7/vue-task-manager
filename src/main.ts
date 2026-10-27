import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

//Importació de llibreria per mostrar toasts per donar feedback a l'usuari
app.use(Toast, {
  position: 'bottom-right',
  timeout: 2000,
  closeOnClick: true,
  pauseOnHover: false,
  maxToasts: 5,
})
app.mount('#app')
