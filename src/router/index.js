import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home/Home";
import Pets from "@/views/Pets/Pets";
import Error from "@/views/Error/Error";
import Blog from "@/views/Blog/Blog";
import Chat from "@/views/Chat/Chat";
import Profile from "@/views/Profile/Profile";
import Pet from "@/views/Pet/Pet";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
            icon:'HomeIcon',
            menu:true
        }
    },
    {
        path: '/pets',
        name: 'Pets',
        component: Pets,
        meta:{
            icon:'PetsIcon',
            menu:true
        },
        props:true

    },
    {
        path: '/pets/:name',
        name: "Pets\\",
        component: Pet,
        meta:{
            namePage:'Pets/name'
        },
        props: true
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        meta:{
            icon:'BlogIcon',
            menu:true
        }
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat,
        meta:{
            icon:'ChatIcon',
            menu:true
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta:{
            icon:'PersonIcon',
            menu:true
        }
    },
    {
        path: '/404',
        name: '404',
        component: Error,
    },
    {
        path: '*',
        redirect: '/404'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;