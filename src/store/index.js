import Vue from 'vue';
import Vuex from 'vuex';
import {postsModule} from "./modules/postsModule";
import {articlesModule} from "./modules/articlesModule";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        postsModule,
        articlesModule
    },
});