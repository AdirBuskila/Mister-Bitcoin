<template>
  <section
    v-if="currBtcPrice"
    class="home-page flex column align-center justify-center"
  >
    <h1>Home page</h1>
    <div class="home-container flex">
      <div class="coins-list-container" v-if="coinsPrice.length > 0">
        <CoinsPriceList :coins="coinsPrice" />
      </div>
      <div class="home-page-cover flex column align-center justify-center">
        <div class="user-info flex column align-center justify-center">
          <h1>Hello {{ user.name }}!</h1>
          <h2>Coins: {{ userCoins }}₿</h2>
          <h2>USD: {{ userAmountDisplay }}$</h2>
        </div>
        <div class="coin-news flex column align-center">
          <div class="title-container flex align-center">
            <h2 class="title">Coin News</h2>
            <h2>:</h2>
          </div>
          <div class="coin-news-list-container">
            <CoinNewsList :news="coinsNews" />
          </div>
        </div>
      </div>
      <div v-if="chartData.length > 0" class="graph-container">
        <LineChartSingle :chartData="chartData" type="line" />
      </div>
    </div>
    <div class="user-moves flex column" v-if="user.moves.length > 0">
      <MoveList :moves="user.moves" :currBtcPrice="currBtcPrice" />
    </div>
  </section>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service';
import MoveList from '../components/home-cmps/MoveList.vue';
import { utilService } from '../services/util.service';
import LineChartSingle from '../components/home-cmps/LineChartSingle.vue';
import CoinsPriceList from '../components/home-cmps/CoinsPriceList.vue';
import CoinNewsList from '../components/home-cmps/CoinNewsList.vue';

export default {
  components: {
    MoveList,
    LineChartSingle,
    CoinsPriceList,
    CoinNewsList,
  },
  data() {
    return {
      userBtc: null,
      currBtcPrice: null,
      chartData: [],
      coinsPrice: [],
      coinsNews: [],
    };
  },
  async created() {
    this.chartData = await bitcoinService.getMarketPrice();
    this.currBtcPrice = await bitcoinService.getCurrentPrice();
    this.userBtc = (this.currBtcPrice * this.user.coins).toFixed(1);
    this.coinsPrice = await bitcoinService.getCoinsForPreview();
    this.coinsNews = await bitcoinService.getCoinNews();
    console.log('this.coinsNews', this.coinsNews);
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userAmountDisplay() {
      return utilService.numberWithCommas(this.userBtc);
    },
    userCoins() {
      return this.user.coins;
    },
  },
};
</script>
