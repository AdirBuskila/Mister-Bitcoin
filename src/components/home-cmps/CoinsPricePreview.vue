<template>
  <div class="coin-price-preview flex column align-center">
    <div class="coin-symbol">
      <p>{{ coin.symbol }}</p>
    </div>
    <div class="coin-image flex justify-center">
      <img :src="coin.image" />
    </div>
    <div class="coin-price">
      <h5>{{ coinPrice }}$</h5>
    </div>
  </div>
</template>

<script>
import { utilService } from '../../services/util.service';
export default {
  props: {
    coin: Object,
  },
  computed: {
    coinPrice() {
      return utilService.financial(this.coin.quote.USD.price, 3);
    },
  },
};
</script>

<style></style>
