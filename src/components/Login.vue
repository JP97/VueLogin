<template>
<div class="login">
    <h1>this is the login screen</h1>
  <div class="container">
      <form  class="loginform">
          <input v-model="username" type="text" placeholder="username">
          <input v-model="password" type="password" placeholder="password">
          <input type="submit" value="login">
      </form>
      <!-- <div v-for="item in getUsers" v-bind:key=item.id>
            <p>item.username</p>
            <p>item.password</p>
      </div> -->
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            username: '',
            password: ''
        };
    },
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
