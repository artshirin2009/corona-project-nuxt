
<template>
<v-card class="mx-auto  pb-6" width="550px">
  <v-toolbar
      color="indigo"
      dark
    >
    <v-toolbar-title>Регистрация</v-toolbar-title>
    </v-toolbar>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="email" :rules="rules" label="E-mail" required></v-text-field>
    <v-text-field v-model="password" :rules="rules" label="Password" required></v-text-field>
<v-col class="text-right">
    <v-btn color="success" @click="validate">Регистрация</v-btn>
</v-col>
  </v-form>
</v-card>
  
</template>
<script>
export default {
  data: () => ({
    valid: true,
    password: '',
    email: '',
    rules: [
      v => !!v || 'Field is required',
      v => /.+@.+\..+/.test(v) || 'Field must be valid'
    ]
  }),

  methods: {
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