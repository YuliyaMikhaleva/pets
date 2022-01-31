import store from '@/store'
export const filtersModule = {
    namespaced: true,
    state:{
        filterItems:[
            {
                id:1,
                name:'Коты',
                img:'images/Filter-cats.svg'
            },
            {
                id: 2,
                name:'Собаки',
                img:'images/Filter-dogs.svg'
            },
            {
                id:3,
                name:'Птицы',
                img:'images/Filter-birds.svg'
            },
            {
                id:4,
                name:'Зайцы',
                img:'images/Filter-hares.svg'
            },
            {
                id:5,
                name:'Мыши',
                img:'images/Filter-mouses.svg'
            },
            {
                id:6,
                name:'Другие',
                img:'images/Filter-others.svg'
            },
        ],//меню фильтров (коты, собаки, птицы и тд)
        filteredPets: [],//фильтрованные животные
        filters:[],//отмеченные параметры фильтрации с id
        catalog:[],//каталог всех постов
    },
    getters:{
        getFilterItems(state){
            return state.filterItems;
        },
        getFilters(state){
            return state.filters;
        },
        getFilteredPets(state){
            if (!state.filters.length){
                return state.filteredPets
            } else {
                return state.filteredPets.filter((el) => {
                    return state.filters.filter((item) => {
                        return item.id == el.groupID
                    }).length
                })
            }
        },
        /**
         * Получение постов
         * @param {Object} state - общее хранилище модуля
         * @returns {Array} - массив объектов постов
         */
        getCatalog(state){
            return state.catalog;
        },
    },
    mutations:{
        /**
         * Добавление отмеченных животных в общее хранилище
         * @param state
         * @param payload
         */
        addFilterParams(state, payload){state.filters = [...state.filters, payload]},
        /**
         * Удаление отмеченных животных в общее хранилище
         * @param state
         * @param payload
         */
        removeFilterParams(state, payload){
            const idx = state.filters.indexOf(payload)
            state.filters.splice(idx, 1)
        },
        /**
         * Добавление постов в общее хранилище
         * @param state
         * @param payload
         */
        setCatalog(state, payload){state.catalog = [ ...payload]},
        setFilteredPets(state, payload ){
            state.filteredPets.push(...payload)
        },

    },
    actions:{
        /**
         * Экшен для добавления животных в фильтры
         * @param state
         * @param payload
         */
        addFilter({commit}, payload) {
            commit('addFilterParams', payload);
        },
        /**
         * Экшен для удаления животных из фильтров
         * @param state
         * @param payload
         */
        removeFilter({commit}, payload) {
            commit('removeFilterParams', payload);
        },

        /**
         * Загрузка каталога с API
         */
        loadCatalog({commit}) {
            store.commit('showloaderModule/turnOnShowloader');
            return fetch('catalog.json')
                .then(response => response.json())
                .then(result => {
                    let array = Object.values(result.animals)
                    commit('setCatalog',array);
                    commit('setFilteredPets',array);
                })
                .then(() => {
                    store.commit('showloaderModule/turnOfShowloader');
                })
        },
    }
}