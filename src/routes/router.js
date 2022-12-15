import { createRouter, createWebHistory } from "vue-router";

// Components
import HomeView from '@/views/HomeView.vue';

const history = createWebHistory();
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            title: 'Navigating Intellectual Property Law With Ease | Virtual IP Law',
            description: 'Virtual IP Law has over 60+ years of combined intellectual property law experience.'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: HomeView,
    }
];

export const router = createRouter({
    routes,
    history
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    document.querySelector('meta[name="description"]').content = `${to.meta.description}`;
    next();    
});
