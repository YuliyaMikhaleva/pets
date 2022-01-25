import store from '@/store';
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
        ],//все виды животных (коты, собаки, птицы и тд)
        filteredPets: [],//фильтрованные животные
        filters:[],//отмеченные параметры фильтрации с id
        posts:[],//каталог всех постов
    },
    getters:{
        getFilterItems(state){
            return state.filterItems;
        },
        getFilters(state){
            return state.filters;
        },
        getFilteredPets(state){
            return state.filteredPets;
        },
        /**
         * Получение постов
         * @param {Object} state - общее хранилище модуля
         * @returns {Array} - массив объектов постов
         */
        getPosts(state){
            return state.posts;
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
        setPosts(state, payload){state.posts = [ ...payload]},

        addFilteredPets(state){
            state.filteredPets.push(1)
            console.log('!',state.posts)
            console.log(store.getters['filtersModule/getPosts'])
            // if (state.filters.length == 0){
            //     console.log('1')
            //     state.filteredPets = [...state.posts];
            //     console.log(state.posts, state)
            //
            // } else {
            //     console.log('2')
            //     console.log(state)
            //     state.filteredPets = state.posts.filter((el) => {
            //         return state.filters.filter((item) => {
            //             return item.id == el.id
            //         }).length
            //     })
            // }
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
         * Загрузка постов с API
         */
        loadPosts({commit}) {
            return fetch('posts.json')
                .then(response => response.json())
                .then(result => {
                    let array = Object.values(result.animals)
                    commit('setPosts',array);
                })
        },
        /**
         * Экшен для фильтрации
         * @param state
         */
        loadFilteredPets({commit}) {
            commit('addFilteredPets')
        },
    }
}