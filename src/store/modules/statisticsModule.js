import store from '@/store'
export const statisticsModule = {
    namespaced: true,
    state:{
        statistic:[],
    },
    getters:{
        /**
         * Получение массива статистики по котам
         * @param {Object} state - общее хранилище модуля
         * @returns {Array} - массив объектов
         */
        getStatistic(state){
            return state.statistic;
        },
        /**
         * Получение массива графиков
         * @param {Object} state - общее хранилище модуля
         * @returns {Array} - массив объектов
         */
        getGraphics(state){
            return state.statistic.map(el => el.graphic)
        }
    },
    mutations:{
        /**
         * Добавление статистики в общее хранилище
         * @param state
         * @param payload
         */
        setStatistic(state, payload){state.statistic = [ ...payload]},
    },
    actions:{
        /**
         * Загрузка статистики с API
         */
        loadStatistic({commit}) {
            store.commit('showloaderModule/turnOnShowloader');
            return fetch('statistic.json')
                .then(response => response.json())
                .then(result => {
                    commit('setStatistic',result);
                })
                .then(() => {
                    store.commit('showloaderModule/turnOfShowloader');
                })
        },
    }
}