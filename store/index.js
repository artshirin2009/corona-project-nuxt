
export const state = () => ({
  token: null,
  countries: [],
  cities: [],
  users: [],
  initial: false,
  userData: {},
  categories:[]
})

export const mutations = {

  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
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
  setInitial(state, initial) {
    state.initial = initial
  },
  setUserData(state, userData) {
    state.userData = userData
  },
  setCategories(state, categories) {
    state.categories = categories
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
    );

  },
  getUsers({ commit }) {
    return Promise.resolve(this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      .then(users => { commit('setUsers', users) }))
  },
  login({ commit }) {
    commit('setToken', 'truetoken')
  },
  logout({ commit }) {
    commit('clearToken')
  },
  initialAction({ commit }) {
    commit('setInitial', false)
  },
  userData({ commit }, userData) {
    commit('setUserData', userData)
  }
}

export const getters = {
  hasToken: s => !!s.token,
  countries: s => s.countries,
  cities: s => s.cities,
  users: s => s.users,
  initial: s => s.initial,
  userData: s => s.userData,
  categories: s => s.categories
}

