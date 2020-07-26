import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wordList: [
      {word:"Car", word_tr: "Машина", studied: false},
      {word:"Apple", word_tr: "Яблоко", studied: false},
    ],
    isShowStudiedWords: false
  },
  mutations: {
  },
  actions: {
  },
  getters:{
    WORDLIST: state => {
      return state.wordList
    }
  },
  modules: {
  }
})
