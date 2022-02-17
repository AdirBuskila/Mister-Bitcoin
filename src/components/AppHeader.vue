<template>
  <section v-if="!isLogin" class="app-header flex">
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
    <nav class="nav-link-container">
      <RouterLink to="/contact">Contacts</RouterLink> <span>| </span>
      <RouterLink to="/dashboard">Dashboard</RouterLink> <span>| </span>
      <RouterLink disabled to="/about">About</RouterLink> <span>| </span>
      <RouterLink disabled to="/signup">Log out</RouterLink>
    </nav>
    <div :onclick="openMenu" class="menu-bar-container">
      <img
        class="menu-bar-img"
        src="https://res.cloudinary.com/dubjerksn/image/upload/v1645051716/gc6dpqabpnywvyzghz0f.png"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    setMenubarClass: Function,
    setOpenedLocation: Function,
  },
  computed: {
    isLogin() {
      return this.$route.name === 'signup';
    },
  },
  methods: {
    openMenu() {
      this.setMenubarClass('open');
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
