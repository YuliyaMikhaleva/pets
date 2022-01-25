export const filtersModule = {
    namespaced: true,
    state:{
        pets:[
            {
                name:'Коты',
                img:'images/Filter-cats.svg'
            },
            {
                name:'Собаки',
                img:'images/Filter-dogs.svg'
            },
            {
                name:'Птицы',
                img:'images/Filter-birds.svg'
            },
            {
                name:'Зайцы',
                img:'images/Filter-hares.svg'
            },
            {
                name:'Мыши',
                img:'images/Filter-mouses.svg'
            },
            {
                name:'Другие',
                img:'images/Filter-others.svg'
            },
        ],
        filterPets: []
    },
    getters:{
        getPets(state){
            return state.pets;
        },
        getFilterPets(state){
            return state.filterPets;
        },
    },
    mutations:{
        /**
         * Добавление отмеченных животных в общее хранилище
         * @param state
         * @param payload
         */
        addFilterPets(state, payload){state.filterPets = [...state.filterPets, payload]},
        removeFilterPets(state, payload){
            const idx = state.filterPets.indexOf(payload)
            state.filterPets.splice(idx, 1)

        }
    },
    actions:{
        /**
         * Экшен для добавления животных в фильтры
         * @param state
         * @param payload
         */
        addFilter({commit}, pet) {
            commit('addFilterPets', pet);
        },
        removeFilter({commit}, pet) {
            commit('removeFilterPets', pet);
        },
    }
}