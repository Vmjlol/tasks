// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
// import axios from 'axios'
// import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import { createRouter, createWebHistory } from "vue-router";
// import LoginView from './views/LoginView.vue'
// import TasksView from './views/TasksView.vue'
// import RegisterView from './views/RegisterView.vue'
import { format } from 'date-fns';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const timestamp = 1642045200000; // Exemplo de timestamp
const formattedDate = format(new Date(timestamp), 'dd/MM/yyyy'); // Formata o timestamp em formato de data padrão brasileiro

console.log(formattedDate);


const routes = [
    {
        path: '/',
        name: 'login',
        // component: LoginView,
        component: () => import('./views/LoginView.vue')
    },
    {
        path: '/tasks',
        name: 'tasks',
        // component: TasksView,
        component: () => import('./views/TasksView.vue')
    },
    {
        path: '/register',
        name: 'register',
        // component: RegisterView,
        component: () => import('./views/RegisterView.vue')
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

createApp(App).use(router).mount('#app');

