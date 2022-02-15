<template>
  <div class="line-chart-container">
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import lineChartData from '../line-chart-data';
import { graphService } from '../services/graph.service';

export default {
  name: 'LineChart',
  props: {
    chartData: Array,
    type: String,
  },
  data() {
    return {
      lineChartData,
      dataSets: [],
    };
  },
  async mounted() {
    const dates = this.chartData.map(obj => obj.x)
    this.lineChartData = graphService.getChartData('line', dates)
    const dataset = graphService.getDataSet('Market Cap',this.chartData, '#b667f166','#9C51E0')
    this.lineChartData.data.datasets.push(dataset)
    const ctx = document.getElementById('line-chart')
    new Chart(ctx, this.lineChartData)
    Chart.defaults.global.defaultFontColor = "#fff";
  },
};
</script>

<style lang="scss" scoped>

.line-chart-container{
  border-radius: 3px;
  border-left: 1px solid white;
  background-color: rgba(78, 76, 76, 0.76);
  height: 400px;
  width: 450px;
}

</style>
