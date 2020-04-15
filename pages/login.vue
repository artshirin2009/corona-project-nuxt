
<template>
  <v-card class="mx-auto pb-6" width="550px">
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Авторизация</v-toolbar-title>
    </v-toolbar>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="authData.email" :rules="rules" label="E-mail" required></v-text-field>
      <v-text-field v-model="authData.password" :rules="rules" label="Password" required></v-text-field>
      <v-col class="text-right">
        <v-btn color="success" @click="requestLogin">Авторизация</v-btn>
      </v-col>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    authData: {
      password: 'artshirin2009@gmail.com',
      email: 'artshirin2009@gmail.com'
    },
    valid: true,

    rules: [
      v => !!v || 'Field is required',
      v => /.+@.+\..+/.test(v) || 'Field must be valid'
    ]
  }),

  methods: {
    requestLogin () {
      this.$auth.loginWith('local', {
        data: {
          email: this.authData.email,
          password: this.authData.password
        }
      })
    }
  ,
    validate() {
      this.$refs.form.validate()
    }
  }
}
// export default {
//   layout: 'empty',
//   methods: {
//     onSubmit() {
//       this.$store.dispatch('login')
//       this.$router.push('/')
//     }
//   }
// }
</script>


<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}
</style>