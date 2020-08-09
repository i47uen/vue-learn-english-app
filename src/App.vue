<template>
  <div id="app">
      <Header @header-btn-click="toggleShowStudiedWords" />
      <main class="row">

        <div class="word_generator col-lg-6">
          <template v-if="notStudiedWords.length > 0">
            <h1 class="word">{{ currentItem.word }}</h1>
            <h5 class="word-translate">{{ showTranslate ? currentItem.word_tr : "..." }}</h5>
            <button @click="showTranslate = !showTranslate">{{ showTranslate ? "Скрыть" : "Показать" }} перевод</button>
          </template>
          <div v-else><h2>Вы изучили все доступные слова!</h2></div>
        </div>

        <div class="studied-words col-lg-6">
          <h4>Изученные слова: {{ studiedWords.length }} / {{ words.length }}</h4>
          <ul class="studied-words_row">
            <li v-for="(word, index) in studiedWords" :key="index">{{ word.word }} <span>{{ word.word_tr }}</span></li>
          </ul>
        </div>

      </main>
      <Footer @leftBtnClicked="studyWord" @rightBtnClicked="nextWord" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
    name: 'App',
    data: function(){
      return{
        showStudiedWords: false,
        showTranslate: true,
        currentItem: {word: "Word"},
        currentItemNumber: 0,
        words: [
            {id: 0, word:"Car", word_tr:"Машина", studied: false},
            {id: 1, word:"Banana", word_tr:"Банан", studied: false},
            {id: 2, word:"Door", word_tr:"Дверь", studied: false},
            {id: 3, word:"Home", word_tr:"Дом", studied: false},
            {id: 4, word:"Ice", word_tr:"Лёд", studied: false},
            {id: 5, word:"Cat", word_tr:"Кот", studied: false},
            {id: 6, word:"Apple", word_tr:"Яблоко", studied: false},
            {id: 7, word:"Mouse", word_tr:"Мышь", studied: true},
        ]
      }
    },
  computed:{
      notStudiedWords(){
        return this.words.filter(item => {
          return !item.studied
        })
      },
      studiedWords(){
        return this.words.filter(item => {
          return item.studied
        })
      }
    },
  methods: {
      toggleShowStudiedWords() {
        this.showStudiedWords = !this.showStudiedWords
      },
      getRandomEl(){
        this.currentItemNumber = Math.floor(Math.random() * this.notStudiedWords.length);
      },
      getCurrentWord(){
          this.getRandomEl()
          this.currentItem = this.words[this.currentItemNumber]
      },
      studyWord(){
        if (this.notStudiedWords.length > 0) {
          this.notStudiedWords[this.currentItemNumber].studied = true
          this.nextWord()
        }
      },
      nextWord(){
        if (this.notStudiedWords.length > 0) {
          this.getCurrentWord()
        }
      }
  },
  components: {
    Header,
    Footer,
  },
  created() {
    this.getCurrentWord()
  }
}
</script>



<style lang="scss">
  @import "assets/scss/main";
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
  .word_generator{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .word-translate{
      font-weight: 400;
    }
  }
  .studied-words{
    width: 90%;
    margin: 0 auto;
  }
  .studied-words_row{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1px 1px;
    width: 100%;
    max-height: 50vh;
    overflow: auto;
    padding-top: 20px;
    li{
      list-style-type: none;
      border: 1px solid #ccc;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      background: #fff;
      padding: 12px;
      padding-top: 16px;
      border-radius: 4px;
      font-weight: 600;
      margin: 7px 5px;
      span{
        font-weight: 300;
        &:before{
          content: "- ";
        }
      }
    }
  }
</style>
