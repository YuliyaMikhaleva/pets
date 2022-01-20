import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home";
import Pets from "@/views/Pets";
import Error from "@/views/Error";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/pets',
        name: 'Pets',
        component: Pets,
    },
    {
        path: '/404',
        name: '404',
        component: Error,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;