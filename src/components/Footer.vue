<template>
    <footer class="page-footer">
        <button class="footer-btn footer-btn__iknow">Я знаю это слово</button>
        <button class="footer-btn footer-btn__next">Показать другое слово</button>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss">

    .page-footer{
        width: 100%;
        height: 70px;
        max-height: 70px;
        box-shadow: 0 0 30px rgba(#2c3e50, 0.5);
    }

    .footer-btn{
        font-weight: 500;
        height: 100%;
        width: 50%;
        background: #2c3e50;
        color: #fff;
        &:hover{
            filter: brightness(1.2);
        }
    }
</style>