import Vue from 'vue';
import Vuex from 'vuex';
import {articlesModule} from "./modules/articlesModule";
import {filtersModule} from "@/store/modules/filtersModule";
import {cardsModule} from "@/store/modules/cardsModule";
import {showloaderModule} from "@/store/modules/showloader";
import {statisticsModule} from "./modules/statisticsModule";
import createPersistedState from 'vuex-persistedstate';
import {profileModule} from "./modules/profileModule";
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
        cardsModule,
        showloaderModule,
        statisticsModule,
        profileModule
    },
    //плагин для сохранения состояния
    plugins: [
        createPersistedState(),
    ],
});