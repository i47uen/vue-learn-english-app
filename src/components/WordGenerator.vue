<template>
    <div class="page-word_generator">
        <h1 class="word">{{ arr[currentWord].word }}</h1>
        <h5 class="word-translate">{{showTranslate ? arr[currentWord].word_tr : "..."}}</h5>
        <button @click="toggleShowTranslate">{{showTranslate ? "Скрыть перевод" : "Показать перевод"}}</button>
        <button @click="getNewWord">new</button>
    </div>
</template>



<script>
    export default {
        name: "WordGenerator",
        props: {
            arr: Array
        },
        data: function() {
            return {
                showTranslate: true,
                currentWord: this.getRandomElArr()
            }
        },
        methods: {
            toggleShowTranslate: function () {
                this.showTranslate = !this.showTranslate
            },
            getRandomElArr(){
                let el = Math.floor(Math.random() * this.arr.length)
                // return {word, word_tr}
                return el
            },
            getNewWord(){
                this.currentWord = this.getRandomElArr()
            }
        }
    }
</script>



<style>
    .word{

    }
    .word-translate{
        font-weight: 300;
    }
</style>