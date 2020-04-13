<template>
  <section>
    <h1>Users page</h1>
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user)">{{user.name}}</a>
      </li>
    </ul>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  async fetch({ store }) {
    if (store.getters.users.length === 0) {
      await store.dispatch('getUsers')
    }
  },
  computed: {
    users() {
      return this.$store.getters.users
    }
  },

  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>



