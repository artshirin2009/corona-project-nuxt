
export const state = () => ({
  categories: [],
  categoriesPerCity: [],
  initial: { cookies: {} },
  countries: [],
  cities: [],
  users: [],
  cookies: []

})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setCategoriesPerCity(state, categoriesPerCity) {
    state.categoriesPerCity = categoriesPerCity
  },
  setInitial(state, initial) {
    state.initial = initial
  },
  setCountries(state, countries) {
    state.countries = countries
  },
  setCities(state, cities) {
    state.cities = cities
  },
  setUsers(state, users) {
    state.users = users
  },
  setCookies(state, cookies) {
    state.cookies = cookies
  },

}

export const actions = {
  nuxtServerInit({ commit }) {
    return Promise.resolve(
      this.$axios.$get(`/api/countries`)
        .then(countries => {
          commit('setCountries', countries)
        })
        .then(() => {
          return this.$axios.$get(`/api/cities`)
        })
        .then(cities => {
          commit('setCities', cities)
        })
        .then(() => {
          return this.$axios.$get(`/api/categories`)
        })
        .then(categories => {
          commit('setCategories', categories)
        })
        .then(() => {
          return this.$axios.$get(`/api/service/cookies`)
        })

        .then(cookie => {
          if (cookie) {
            let initial = {}
            initial.cookies = this.$cookies.getAll()
            commit('setInitial', initial);
            return initial.cookies.city
          }
        })
        

    );
  },

  getUsers({ commit }) {
    return Promise.resolve(this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      .then(users => { commit('setUsers', users) }))
  },
  getCookies({ commit }, cookies) {
    commit('setCookies', cookies)
  }
}

export const getters = {
  initial: s => s.initial,
  countries: s => s.countries,
  cities: s => s.cities,
  users: s => s.users,
  categories: s => s.categories,
  categoriesPerCity: s => s.categoriesPerCity,
  cookies: s => s.cookies
}

