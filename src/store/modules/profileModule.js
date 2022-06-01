import router from "../../router";
export const profileModule = {
    namespaced: true,
    state:{
        user:{},
        users:[
            {
                name:'test',
                email:'test@mail.ru',
                password:'12345678'
            }
        ],
        authorization:false,//авторизован ли пользователь
        location:""
    },
    getters:{
        getUser(state){
            return state.user;
        },
        getUsers(state){
            return state.users;
        },
        getAuthorization(state){
            return state.authorization
        },
        /**
         * Проверка наличия такого юзера в массиве зарегистрированных пользователей
         * @param {state, id}
         * @returns {Boolean}
         */
        getUserInUsers: state => (payload) => {
            let find = state.users.find(element => element.email === payload.email && element.password === payload.password);
            if (find) {
                return find
            } else {
                return false
            }
        },
    },
    mutations:{
        setUser(state, payload){state.user = payload},
        setUsers(state, payload){state.users.push(payload)},
        setAuthorization(state, payload){state.authorization = payload},
        // setLocation(state, payload){state.location = payload},
    },
    actions:{
        //Зарегистрироваться
        signUp({commit}, userData) {
            commit('setAuthorization', true)
            commit('setUser', userData);
            commit('setUsers', userData)
            router.push({path: "/"}).catch((err) => console.log(err))
        },
        //Авторизоваться
        signIn({commit}, userData){
            commit('setAuthorization', true)
            commit('setUser', userData);
            router.push({path: "/"}).catch((err) => console.log(err))
        },
        //Выйти
        signOut({commit}){
            commit('setAuthorization', false)
            commit('setUser', "");
        },
    }
}