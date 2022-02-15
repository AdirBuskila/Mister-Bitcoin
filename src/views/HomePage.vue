<template>
  <section v-if="currBtcPrice" class="home-page flex column align-center justify-center">
    <h1>Home page</h1>
    <div class="home-container flex">
    <div class="home-page-cover flex column align-center justify-center">
      <h1>Hello {{ user.name }}!</h1>
      <h1>Coins: {{ userCoins }}₿</h1>
      <h1>USD: {{ userAmountDisplay }}$</h1>
      <h1>BTC price: {{ priceDisplay }}$</h1>
    </div>
    <div v-if="chartData.length > 0" class="graph-container">
        <LineChartSingle :chartData="chartData" type="line" />
    </div>
    </div>
    <div v-if="user.moves.length > 0" class="user-moves flex column">
        <MoveList :moves="user.moves" :currBtcPrice="currBtcPrice" />
    </div>
  </section>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service';
import MoveList from '../components/MoveList.vue';
import { utilService } from '../services/util.service';
import LineChartSingle from '../components/LineChartSingle.vue';

export default {
    data() {
        return {
            userBtc: null,
            currBtcPrice: null,
            chartData: [],
        };
    },
    async created() {
        this.chartData = await bitcoinService.getMarketPrice()
        this.currBtcPrice = await bitcoinService.getCurrentPrice();
        this.userBtc = (this.currBtcPrice * this.user.coins).toFixed(1);
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        priceDisplay() {
            return utilService.numberWithCommas(this.currBtcPrice)
        },
        userAmountDisplay() {
            return utilService.numberWithCommas(this.userBtc)
        },
        userCoins() {
            return this.user.coins
        }
    },
    components: {
        MoveList,
        LineChartSingle
        }
};
</script>
