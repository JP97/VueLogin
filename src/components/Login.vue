<template>
<div class="login">
    <h1>Spin-Robotics</h1>
    <div class="container mt3">
        <form  class="loginform form-group">
            <!-- form controll makes the nice wide textbox around the input -->
            <input class="inputform form-control mb-3" v-model="username" type="text" placeholder="username">
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
//import the getters from vuex
import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            username: '',
            password: ''
        };
    },
    //state needs to be in a computed property
    //make an array that specifies which getters we are going to use
    computed: mapGetters(['getUsers'])
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
        margin-top:50px;
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

    .loginspan{

    }

</style>
