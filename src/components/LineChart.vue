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
  mounted() {
    this.lineChartData = graphService.getChartData('line', this.chartData[0])
    this.chartData.forEach((data) => {
      const dataSet = graphService.getDataSet(
        data.label,
        data.data,
        data.backgroundColor,
        data.borderColor
      );
      this.dataSets.push(dataSet)
    });
    this.lineChartData.data.datasets = this.dataSets
    const ctx = document.getElementById('line-chart')
    new Chart(ctx, this.lineChartData)
    Chart.defaults.global.defaultFontColor = "#fff";
  },
};
</script>

<style lang="scss" scoped>

.line-chart-container {
  height: 700px;
}

</style>
