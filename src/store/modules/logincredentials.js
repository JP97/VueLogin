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

const actions = {
     login(/*{commit}, */username, password){
        this.userCredentials.forEach(user => {
            if(user.username === username && user.password === password){
                console.log('you succesfully logged in');
            }
            else{
                console.log('wrong username or password');
            }
        });
    }
};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}