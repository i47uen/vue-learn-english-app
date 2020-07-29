<template>
  <div id="app">
      <Header @header-btn-click="toggleShowStudiedWords" />
      <main>
          <WordGenerator v-if="!showStudiedWords" :arr="words" ref="wordGen" />
          <StudiedWords v-else />
      </main>
      <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import WordGenerator from './components/WordGenerator.vue'
import StudiedWords from './components/StudiedWords.vue'
import Footer from './components/Footer.vue'


export default {
    name: 'App',
    data: function(){
        return{
            showStudiedWords: false,
            words: [
                {word:"Car", word_tr:"Машина"},
                {word:"Banana", word_tr:"Банан"},
                {word:"Door", word_tr:"Дверь"},
                {word:"Home", word_tr:"Дом"},
                {word:"Ice", word_tr:"Лёд"},
                {word:"Apple", word_tr:"Яблоко"},
                {word:"Hi", word_tr:"Привет"},
            ]
        }
    },
    methods: {
        toggleShowStudiedWords: function () {
            this.showStudiedWords = !this.showStudiedWords
        },
    },
    components: {
        Header,
        Footer,
        WordGenerator,
        StudiedWords
    },
}
</script>

<style lang="scss">
    @import "~reset-css/reset.css";
    @import "assets/scss/main";
    body{
        background: #f6f5f4;
    }
    main{
        max-width: 100%;
        width: 90%;
        margin: 0 auto;
    }
    html,body,#app{
        height: 100%;
        max-height: 100%;
        overflow: hidden;
    }
    button{
        padding: 10px;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
    }
    #app {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

</style>
