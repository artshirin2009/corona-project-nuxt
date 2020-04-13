<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item nuxt to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Главная</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="/categories">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Категории</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="/protected">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Protected link</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="/about">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>О нас</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item nuxt to="/users">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Проект Корона</v-toolbar-title>
      <v-spacer />

      <v-btn-toggle background-color="#4caf50" v-if="$auth.loggedIn">
        <v-btn text nuxt to="/user" color="white">artshirin2009@gmail.com</v-btn>
        <v-btn text nuxt to="/logout" color="white" @click="logout">Logout</v-btn>
      </v-btn-toggle>
      <v-btn-toggle background-color="#4caf50" class="mr-4">
        <v-btn text nuxt to="/login" color="white">Login</v-btn>
        <v-btn text nuxt to="/register" color="white">Register</v-btn>
      </v-btn-toggle>
    </v-app-bar>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data: () => ({
    drawer: true
  }),
  computed: {
    countries() {
      return this.$store.getters.countries
    },
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      console.log(this.$auth)
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.dropdown-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  padding-top: 50px;
}
</style>

