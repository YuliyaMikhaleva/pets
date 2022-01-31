import store from '@/store'
export const cardsModule = {
    namespaced: true,
    state:{
        cards:[],
    },
    getters:{
        /**
         * Получение постов
         * @param {Object} state - общее хранилище модуля
         * @returns {Array} - массив объектов постов
         */
        getCards(state){
            return state.cards;
        },
    },
    mutations:{
        /**
         * Добавление постов в общее хранилище
         * @param state
         * @param payload
         */
        setCards(state, payload){state.cards = [ ...payload]},
    },
    actions:{
        /**
         * Загрузка постов с API
         */
        loadCards({commit}) {
            store.commit('showloaderModule/turnOnShowloader');
            return fetch('posts.json')
                .then(response => response.json())
                .then(result => {
                    let array = Object.values(result.animals)
                    commit('setCards',array);
                })
                .then(() => {
                    store.commit('showloaderModule/turnOfShowloader');
                })
        },
    }
}