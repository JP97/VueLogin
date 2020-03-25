<template>
<div class="login">
    <picture>
        <source media="(min-width: 720px)" srcset="/216x88-SR_full.png">
        <img src="/Spin Robotics_Final.svg" width="325" height="125">
    </picture>
    <div class="container">
        <!-- runs a method when it gets submitted -->
        <form @submit="tryLogin" class="loginform form-group">
            <!-- form controll makes the nice wide textbox around the input -->
            <input class="inputform form-control mb-4" v-model="username" type="text" placeholder="username">
            <input class="inputform form-control mb-3" v-model="password" type="password" placeholder="password">
           <span class="logingspan">
            <input type="checkbox" name="checkbox" id="">
            <label class="pl-2 pr-3" for="checkbox">forbliv logget ind</label>
            <input class="inputbtn btn-primary rounded" type="submit" value="login">
           </span>
        </form>
    </div>

</div>
</template>

<script>
//import the getters and actions from vuex
import { mapGetters, mapActions } from 'vuex';

export default {
    data(){
        return{
            username: '',
            password: ''
        };
    },
    //state needs to be in a computed property
    //make an array that specifies which getters we are going to use
    computed: mapGetters(['getUsers']),
    methods:{
        //spread operator with array that takes the actions from vuex
        ...mapActions(['login']),

        //the method runs and calls the action method from vuex and passes the data to it.
        tryLogin(e){
            e.preventDefault();
            this.login(this.username, this.password);
        }
    }
};
</script>

<style scoped>

    .loginform{
        display:flex;
        flex-direction:column;
        width:300px;
        margin:auto;
    }

    .container{
        margin-top:10px;
    }

    .inputform{
        border-color: #49b1ec;
    }
    
    .inputbtn{
        background-color: #49b1ec;
        border-color: #49b1ec;
        width:40%;
        /* because the container is flex i can align this "self" to the end */
        align-self:flex-end;
    }

</style>
