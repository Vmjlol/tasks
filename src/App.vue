<template>
  <LoginView />
  <router-view></router-view>

  <!-- <router-link to="/">Login</router-link>

  <router-link to="/register">Registro</router-link>
  <router-link to="/tasks">Tasks</router-link> -->

</template>

<script>
import LoginView from './components/LoginView.vue';

export default {
  name: 'App',
  components: {
    LoginView,
  }
}
</script>

<style></style>