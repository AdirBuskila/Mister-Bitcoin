<template>
  <div class="menu-bar-links-container">
    <div class="menu-bar flex column">
      <div :onclick="() => goTo('')" class="link-container">
        <p>Home</p>
      </div>

      <div :onclick="() => goTo('contact')" class="link-container">
        <p>Contacts</p>
      </div>

      <div :onclick="() => goTo('dashboard')" class="link-container">
        <p>Dashboard</p>
      </div>

      <div :onclick="() => goTo('about')" class="link-container">
        <p>About</p>
      </div>

      <div :onclick="() => goTo('signup')" class="link-container">
        <p>Log out</p>
      </div>
    </div>
    <div :onclick="closeMenu" class="overlay"></div>
  </div>
</template>

<script>
import router from '../router';

export default {
  props: {
    setMenubarClass: Function,
  },
  methods: {
    closeMenu() {
      this.setMenubarClass('');
    },
    goTo(location) {
      router.push(`/${location}`);
      this.closeMenu();
    },
  },
  computed: {
    currLocation() {},
  },
};
</script>

<style></style>
