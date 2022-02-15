<template>
  <section
    v-if="contact"
    class="transfer-funds flex colum align-center justify-center"
  >
    <div class="transfer-funds-cover">
      <h1>Transfer coins to {{ contact.name }}:</h1>
      <form
        @submit.prevent="transferCoins"
        class="transfer-form flex align-center"
      >
        <h1>Amount:</h1>
        <input type="integer" v-model="coins" :max="maxCoins" />
        <button>Transfer</button>
        <h4 class="max-coins">Max:{{ maxCoinsDisplay }}₿</h4>
      </form>
    </div>
  </section>
</template>

<script>
import { eventBus } from '../services/eventBus.service';
import { utilService } from '../services/util.service';

export default {
  props: {
    contact: Object,
    maxCoins: Number,
  },
  data() {
    return {
      coins: 0,
    };
  },
  methods: {
    transferCoins() {
      if (this.coins <= 0) {
        eventBus.emit('show-msg', {
          type: 'error',
          txt: 'Cant Send That amount',
        });
        this.coins = 0;
        return;
      } else if (this.coins > this.maxCoins) {
          eventBus.emit('show-msg', {
            type: 'error',
            txt: 'Insufficient funds',
          });
        this.coins = 0; 
          return;
      }
      this.$emit('transfer-coins', this.coins);
      this.coins = 0;
    },
  },
  computed: {
    maxCoinsDisplay() {
      return utilService.financial(this.maxCoins, 2);
    },
  },
};
</script>

<style></style>
