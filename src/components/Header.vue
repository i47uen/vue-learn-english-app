<template>

    <header class="page-header">
        <button @click="$emit('header-btn-click')" class="header-btn">|||</button>
    </header>

</template>


<script>
    export default {
        name: "WordGenerator",
    }
</script>


<style lang="scss">

    .page-header{
        width: 100%;
        height: 70px;
        max-height: 70px;
        background: #2c3e50;
        box-shadow: 0 0 30px rgba(#2c3e50, 0.5);
    }
    
    .header-btn{
        height: 100%;
        letter-spacing: 2px;
        background: #2c3e50;
        color: #ffffff;
        float: right;
        margin-right: 25px;
        max-height: 100%;
        border-radius: 100px;
        font-size: 40px;
        font-weight: 900;
        transform: rotate(90deg);
        &:hover{

        }
    }

</style>