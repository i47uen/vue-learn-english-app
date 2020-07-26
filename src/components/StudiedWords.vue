<template>
    <div class="studied-words">
        <h4>Изученные слова:</h4>
        <ol class="studied-words_row">
            <li>Car <span>машина</span></li>
            <li>Car <span>машина</span></li>
            <li>Car <span>машина</span></li>
            <li>Car <span>машина</span></li>
            <li>Car <span>машина</span></li>
            <li>Car <span>машина</span></li>
            <li>Car <span>машина</span></li>
            <li>Car <span>машина</span></li>
            <li>Car <span>машина</span></li>
            <li>Car <span>машина</span></li>
            <li>Car <span>машина</span></li>
            <li>Car <span>машина</span></li>
        </ol>
    </div>
</template>

<style lang="scss">
    .studied-words{
        width: 90%;
        margin: 0 auto;
    }
    .studied-words_row{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 1px 1px;
        width: 100%;
        max-height: 50vh;
        overflow: auto;
        padding-top: 20px;
        li{
            list-style-type: decimal;
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