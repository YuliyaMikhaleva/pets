import store from '@/store'
import router from "../../router";
export const articlesModule = {
    namespaced: true,
    state:{
        articles:[],
    },
    getters:{
        /**
         * Получение статей
         * @param {Object} state - общее хранилище модуля
         * @returns {Array} - массив объектов статей
         */
        getArticles(state){
            return state.articles;
        },
    },
    mutations:{
        /**
         * Добавление статей в общее хранилище
         * @param state
         * @param payload
         */
        setArticles(state, payload){state.articles = [ ...payload]},
    },
    actions:{
        /**
         * Загрузка статей с API
         */
        loadArticles({commit}) {
            store.commit('showloaderModule/turnOnShowloader');
            return fetch('message-articles.json')
                .then(response => response.json())
                .then(result => {
                    commit('setArticles',result);
                })
                .then(() => {
                    store.commit('showloaderModule/turnOfShowloader');
                    if (!store.getters['profileModule/getUser']){
                        router.push({path:'/signIn'})
                    }
                })
        },
    }
}