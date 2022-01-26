import Vue from 'vue';
import Vuex from 'vuex';
import {articlesModule} from "./modules/articlesModule";
import {filtersModule} from "@/store/modules/filtersModule";
import {postsModule} from "@/store/modules/postsModule";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {

    },
    actions: {
    },
    modules: {
        articlesModule,
        filtersModule,
        postsModule
    },
});