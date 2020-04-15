<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-row class="grey lighten-5" style="height: 300px;" justify="center">
            <v-card
              class="mb-10 mx-auto"
              max-width="350"
              v-for="(item, id) in categoriesData"
              :key="id"
              outlined
              tile
            >
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
            <v-card
              class="mb-10 mx-auto"
              max-width="350"
              v-for="(item, id) in categories"
              :key="id"
              outlined
              tile
            >
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
  data() {
    return {
      categoriesData: []
    }
  },
  created() {
    typeof this.$cookies.get('city') !== 'undefined'
      ? this.$axios
          .$get(`/api/categories/${this.$cookies.get('city')}`)
          .then(result => {
            this.categoriesData = result
          })
      : console.log('computed')
  },
  computed: {
    categories: function() {
      typeof this.$cookies.get('city') === 'undefined'
        ? this.$store.getters.categories
        : console.log('created')
    }
  }
}
</script>