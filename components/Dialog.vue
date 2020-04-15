<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <v-card max-width="500" class="mx-auto">
      <v-card-title class="headline grey lighten-2" primary-title>Выберите страну и город обучения</v-card-title>
      <v-list>
        <v-list-group v-for="item in countries" :key="item.title" eager no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="subItem in item.cities" :key="subItem.title">
            <v-list-item-content>
              <v-list-item-title
                v-model="userCity"
                @click="initial(subItem)"
                v-text="subItem.title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      userCity: [],
      dialog: this.$store.getters.initial.cookies.city ? false : true
    }
  },
  computed: {
    countries() {
      return this.$store.getters.countries
    }
  },
  methods: {
    initial(item) {
      this.userCity = item
      return Promise.resolve(this.$cookies.set('city', item.alias)).then(() => {
        this.dialog = false;
        let cookies = {}
        cookies.city = this.$cookies.get('city')
        this.$store.dispatch('getCookies', cookies)
      })
    }
  }
}
</script>