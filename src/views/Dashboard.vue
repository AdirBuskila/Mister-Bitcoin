<template>
  <section class="dashboard-container flex column align-center justify-center">
    <div class="dashboard-title">
      <h1>Dashboard</h1>
      <div class="chart-picker flex"></div>
    </div>
    <div
      v-if="chartData !== null && coinsData !== null"
      class="graphs-container flex column"
    >
      <h1>Graphs</h1>
      <LineChart :chartData="chartData" type="line" />
      <CoinList :coins="coinsData" />
    </div>
  </section>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service';
import LineChart from '@/components/LineChart.vue';
import CoinList from '../components/CoinList.vue';

export default {
  components: {
    LineChart,
    CoinList,
  },
  data() {
    return {
      chartData: null,
      coinsData: null,
    };
  },
  async created() {
    this.coinsData = await bitcoinService.getCoinData();
    // const numOfCoins = coinData.map((coin, idx) => {
    //   if (idx >= 50) return
    //   return coin
    // });
    // this.coinsData = numOfCoins
    this.chartData = await bitcoinService.getGraphData();
  },
  methods: {},
};
</script>

<style></style>
