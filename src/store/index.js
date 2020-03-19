import Vuex from 'vuex';
import Vue from 'vue';
import LoginCredentials from './modules/logincredentials.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        LoginCredentials
    }
});