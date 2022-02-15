<template>
    <div :class="coinDaily">
        <h1>{{coin.name}}</h1>
        <h2>{{coin.symbol}}</h2>
        <h2>{{coinPrice}}</h2>
          <CoinsChanges :USD="coin.quote.USD" />
    </div>
</template>

<script>
import { bitcoinService } from "../services/bitcoin.service";
import { utilService } from "../services/util.service";
import CoinsChanges from "./CoinsChanges.vue";

export default {
  components:{
    CoinsChanges
  },
  props: {
    coin: Object,
  },
  computed: {
    coinDaily() {
      return this.coin.quote.USD.percent_change_24h > 0 ? 'green coin-preview flex align-center justify-center column' : 'red coin-preview flex align-center justify-center column';
    },
    coinClass() {

    },
    coinPrice() {
        return utilService.financial(this.coin.quote.USD.price, 3)
    }
  },
};
</script>

<style></style>
