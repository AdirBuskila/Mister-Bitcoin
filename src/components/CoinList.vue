<template>
        <div class="coin-list-container flex ">
        <ul class="coin-list">
            <li
            v-for="coin in coins"
            :key="coin.id"
            >
            <CoinPreview :coin="coin" />
            </li>
        </ul>
        </div>
</template>

<script>
import CoinPreview from "./CoinPreview.vue";
export default {
    components: {
    CoinPreview,

},
    props:{
        coins: Array
    }

}
</script>

<style>

</style>