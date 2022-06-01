import store from "@/store";

export const locationsModule = {
    namespaced: true,
    state:{
        countries:[],
        cities:[]
    },
    getters:{
        /**
         * Получение всех стран
         * @param state
         * @returns {boolean}
         */
        getCountries(state){
            return state.countries.map((el, index) => {
                return {
                    value: index,
                    text: el.name
                }
            }).sort((a,b) =>{
                if (a.text < b.text) { return - 1}
                if (a.text < b.text) { return 1}
                return 0
            })
        },
        getCities(state){
            return state.cities.map((el, index) => {
                return {
                    value: index,
                    text: el.name
                }
            }).sort((a,b) =>{
                if (a.text < b.text) { return - 1}
                if (a.text < b.text) { return 1}
                return 0
            })
        },
    },

    mutations:{
        setCountries(state, payload){state.countries = [ ...payload]},
        setCities(state, payload){state.cities = [ ...payload]},
    },
    actions:{
        /**
         * Загрузка стран с API
         */
        loadCountries({commit}) {
            store.commit('showloaderModule/turnOnShowloader');
            return fetch('https://yvladandmir.github.io/data/countries.json')
                .then(response => response.json())
                .then(result => {
                    commit('setCountries',result);
                })
                .then(() => {
                    store.commit('showloaderModule/turnOfShowloader');
                })
        },
        /**
         * Загрузка городов с API
         */
        loadCities({commit}) {
            store.commit('showloaderModule/turnOnShowloader');
            return fetch('https://yvladandmir.github.io/data/cities.json')
                .then(response => response.json())
                .then(result => {
                    commit('setCities',result);
                })
                .then(() => {
                    store.commit('showloaderModule/turnOfShowloader');
                })
        },


    }
}