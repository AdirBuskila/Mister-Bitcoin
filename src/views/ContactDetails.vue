<template>
  <div
    v-if="contact"
    class="contact-details flex column align-center justify-center"
  >
    <h1>Contact Details</h1>
    <div class="contact-info flex column justify-center align-center">
      <div class="contact-info-cover flex column justify-center align-center">
        <img :src="contactImg" />
        <h1>{{ contact.name }}</h1>
        <h1>{{ contact.email }}</h1>
        <h1>{{ contact.phone }}</h1>
        <div class="actions">
          <RouterLink :to="`/contact`">Back</RouterLink> |
          <RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
        </div>
      </div>
      <TransferFund
        @transfer-coins="transferCoins"
        :contact="contact"
        :maxCoins="user.coins"
      />
    </div>
  </div>
</template>

<script>
import contactService from '../services/contact.service';
import TransferFund from '../components/TransferFund.vue';
import { userService } from '../services/user.service';
import { eventBus } from '../services/eventBus.service';
export default {
  components: {
    TransferFund,
  },
  data() {
    return {
      contact: null,
      contactImg: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.contact = await contactService.get(id);
    this.contactImg = `https://robohash.org/${this.contact.name}`;
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    async transferCoins(coins) {
      const move = userService.getMove(this.contact, coins);
      const newAmount = this.user.coins - coins;
      const newMoves = [...this.user.moves, move];
      const newUser = { ...this.user, coins: newAmount, moves: newMoves };
      await this.$store.dispatch({ type: 'saveUser', user: newUser });
      eventBus.emit('show-msg', {
        type: 'success',
        txt: `${coins}₿ Transferred to: ${this.contact.name}`,
      });
    },
  },
};
</script>

<style></style>
