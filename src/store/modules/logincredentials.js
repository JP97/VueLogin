//here come som websockets or something else



// the boilerplate for vuex
const state = {
    userCredentials: [
        {
            id: 1,
            username: 'admin',
            password: 'admin'
        },
        {
            id: 2,
            username: 'user',
            password: 'user'
        }
    ]
};

const getters = {
    getUsers: (state) => state.userCredentials
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}