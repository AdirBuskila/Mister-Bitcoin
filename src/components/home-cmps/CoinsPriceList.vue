<template>
  <div class="coin-price-list-container justify-center flex">
    <ul class="coin-price-list flex">
      <li v-for="coin in coins" :key="coin.id">
        <CoinsPricePreview :coin="coin" />
      </li>
    </ul>
  </div>
</template>

<script>
import CoinsPricePreview from './CoinsPricePreview.vue';
export default {
  props: {
    coins: Array,
  },
  components: {
    CoinsPricePreview,
  },
};
</script>

<style></style>
