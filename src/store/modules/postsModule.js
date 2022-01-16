export const postsModule = {
    namespaced: true,
    state:{
        posts:[],
    },
    getters:{
        /**
         * Получение постов
         * @param {Object} state - общее хранилище модуля
         * @returns {Array} - массив объектов постов
         */
        getPosts(state){
            console.log('Посты', state.posts)
            return state.posts;
        },
    },
    mutations:{
        /**
         * Добавление постов в общее хранилище
         * @param state
         * @param payload
         */
        setPosts(state, payload){state.posts = [ ...payload]},
    },
    actions:{
        /**
         * Загрузка постов с API
         */
        loadPosts({commit}) {
            return fetch('posts.json')
                .then(response => response.json())
                .then(result => {
                    let array = Object.values(result.animals)
                    console.log(array)
                    commit('setPosts',array);
                })
        },
    }
}