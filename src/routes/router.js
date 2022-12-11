import { createRouter, createWebHistory } from "vue-router";

// Components
import HomeView from '@/views/HomeView.vue';

const history = createWebHistory();
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/contact',
        name: 'Contact',
        component: HomeView
    }
];

export const router = createRouter({
    routes,
    history
});