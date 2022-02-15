<template>
  <div className="coin-changes flex row">
    <div className="change flex column">
      <p :className="changes.oneHourClass">1H {{changes.oneHour}}%</p>
    </div>
    <div className="change flex column">
      <p :className="changes.oneDayClass">1D {{changes.oneDay}}%</p>
    </div>
    <div className="change flex column">
      <p :className="changes.oneWeekClass">7D {{changes.oneWeek}}%</p>
    </div>
  </div>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service';
export default {
  props: {
    USD: Object,
  },
  data() {
      return {
          changes: null
      }
  },
  created(){
      this.changes = bitcoinService.getChangesData(this.USD)
  },
  computed:{
      
  }
};
</script>

<style>
</style>
