<template>
<div class="login">
    <h1>this is the login screen</h1>
  <div class="container">
      <form  class="loginform">
          <input v-model="username" type="text" placeholder="username">
          <input v-model="password" type="password" placeholder="password">
          <input type="submit" value="login">
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
        width:200px;
        margin:auto;
    }

</style>
