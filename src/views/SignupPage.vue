<template>
  <section class="signup-page flex column align-center justify-center">
    <div class="signup-container flex column align-center justify-center">
      <img
        src="https://res.cloudinary.com/dubjerksn/image/upload/v1644951527/t6l0nyvqwbhroxubmyft.gif"
      />
      <h1>Please Enter your name</h1>
      <form
        class="signup-form flex column justify-center align-center"
        @submit.prevent="onSignup"
      >
        <input
          v-focus
          v-model="username"
          placeholder="Enter Name"
          type="text"
        />

        <button>Sign-Up</button>
      </form>
    </div>
  </section>
</template>

<script>
import router from '../router';
import { userService } from '../services/user.service';
import { eventBus } from '../services/eventBus.service';
export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    async onSignup() {
      if (!this.username) {
        eventBus.emit('show-msg', {
          type: 'error',
          txt: 'Please enter a valid name',
        });
        return;
      }
      let user = userService.getEmptyUser();
      user.name = this.username;
      await this.$store.dispatch({ type: 'saveUser', user });
      router.push('/');
    },
  },
};
</script>

<style></style>
