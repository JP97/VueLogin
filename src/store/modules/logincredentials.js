//here come som websockets or something else



// the boilerplate for vuex
const state = {
    userCredentials: [
        {
            id: 1,
            username: 'admin',
            password: 'admin',
            login : false
        },
        {
            id: 2,
            username: 'user',
            password: 'user',
            login : false
        },
    ],
};

const getters = {
    getUsers: (state) => state.userCredentials
};

const actions = {
     login({commit}, inputUser){
         //loops through all users in the state
        state.userCredentials.forEach(user => {

            //to check if the parameters got passed
            console.log('username', inputUser.username);
            console.log('password', inputUser.password);
            console.log('before if statement');

                //checks if the user exists
                if(user.username == inputUser.username && user.password == inputUser.password){
                    console.log('you logged in succesfully in the if statement');
                    console.log('the input is: ' + inputUser.username + inputUser.password );
                    console.log('the compared user is: ' + user.username + user.password );
                    //if exists, commits it to mutations and payloads the matched user
                    commit('setLoginState', user);
                }
        });
    }
};

const mutations = {
    setLoginState: (state, logginUser) => {
        state.userCredentials.forEach(user => {
            // checks the user with the same id and changes the login property to true
            if(user.id === logginUser.id){
                console.log('the user im changing is this one ' + user.username + user.password + 'with the id: ' + user.id);
                user.login = true;
            }
        })
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}