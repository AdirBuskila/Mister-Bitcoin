<template>
  <section v-if="!isLogin" class="app-header flex space-around">
    <RouterLink to="/">
      <div
        class="header-title-container flex align-center justify-center pointer"
      >
        <h3>Mister Bitcoin</h3>
        <img
          src="https://res.cloudinary.com/dubjerksn/image/upload/v1644936528/hzzatnqyjswecfqx2ink.png"
        />
      </div>
    </RouterLink>
    <nav>
      <RouterLink to="/contact">Contacts</RouterLink> <span>| </span>
      <RouterLink to="/dashboard">Dashboard</RouterLink> <span>| </span>
      <RouterLink disabled to="/signup">Log out</RouterLink>
    </nav>
  </section>
</template>

<script>
import router from '../router';

export default {
  computed: {
    isLogin() {
      return this.$route.name === 'signup';
    },
  },
};
</script>

<style scoped lang="scss">
.header-title-container {
  img {
    margin-inline-start: 8px;
    width: 28px;
  }
}
</style>
