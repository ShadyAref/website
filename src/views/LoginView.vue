<template>
  <the-navigations />

  <h1 class="header">Login Here</h1>
  <form method="post" @submit.prevent="checkForm">
    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input v-model="username" type="text" placeholder="Enter Username" name="uname" class="uname" required>

      <label for="psw"><b>Password</b></label>
      <input v-model="password" type="password" placeholder="Enter Password" name="psw" class="psw" required>

      <button type="submit" class="submit">Login</button>
    </div>
  </form>

  <the-footer />
</template>

<script>
import { useToggleStore } from "../stores/stores";
import '../assets/style/login-form.css'
import data from '@/Login.json'
import TheNavigations from "../components/TheNavigations.vue";
import TheFooter from "../components/TheFooter.vue"
import { mapState } from 'pinia';
export default {
  data() {
    return {
      username: "",
      password: "",
      accounts: data.accounts
    }
  },
  methods: {
    checkForm() {
      useToggleStore.user = this.username;
      useToggleStore.loggedIn = !useToggleStore.loggedIn

      if (this.username === this.accounts[0].username
        &&
        this.password === this.accounts[0].password) {
          alert("You are now logged in");
          this.$router.push('/');
          console.log(useToggleStore.user);
          console.log(useToggleStore.loggedIn);
      }
    }
  },
  components: { TheNavigations, TheFooter },
  computed: {
    ...mapState(useToggleStore , ['loggedIn'])
  }
}
</script>
