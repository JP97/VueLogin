import VueRouter from 'vue-router';
import Vue from 'vue';

//used components for vue-routing
import First from '../components/First.vue';
import Login from '../components/Login.vue';  
import Second from '../components/Second.vue';

Vue.use(VueRouter);


const routes = [
        { path: '/', component: Login, children: [
            {path: '/first', component: First},
            {path: '/second', component: Second}
        ]},
];


const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;