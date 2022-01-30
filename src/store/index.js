import Vue from 'vue';
import Vuex from 'vuex';
import {articlesModule} from "./modules/articlesModule";
import {filtersModule} from "@/store/modules/filtersModule";
import {postsModule} from "@/store/modules/postsModule";
import {showloaderModule} from "@/store/modules/showloader";
import {statisticsModule} from "./modules/statisticsModule";
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
        postsModule,
        showloaderModule,
        statisticsModule
    },
});