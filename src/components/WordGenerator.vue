<template>
    <div class="page-word_generator">
        <h1 class="word">{{ arr[1].word }}</h1>
        <h5 class="word-translate">{{showTranslate ? arr[1].word_tr : "..."}}</h5>
        <button @click="toggleShowTranslate">{{showTranslate ? "Скрыть перевод" : "Показать перевод"}}</button>
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
                showTranslate: true
            }
        },
        methods: {
            toggleShowTranslate: function () {
                this.showTranslate = !this.showTranslate
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