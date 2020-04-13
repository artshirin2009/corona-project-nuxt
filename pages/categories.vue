<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center" class="grey lighten-5" style="height: 300px;">
            
            <v-card class="mx-auto" max-width="350" v-for="item in categories" :key="item.id" outlined tile>
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>{{item.title}}</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>Share</v-btn>

                <v-btn color="orange" text>Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {
    
  },
  //   data() {
  //     return {
  //       userCity: [],
  //       dialog: this.$store.getters.initial
  //     }
  //   },
  //   methods: {
  //     initial(item) {
  //       this.userCity = item
  //       this.$store.dispatch('initialAction')
  //       let userData = {}
  //       userData.userCity = this.userCity.id
  //       this.$store.dispatch('userData', userData)
  //       this.dialog = false
  //     }
  //   },
  computed: {
    categories() {
      console.log(this.$store.getters.categories)
      return this.$store.getters.categories
    }
  }
}
</script>