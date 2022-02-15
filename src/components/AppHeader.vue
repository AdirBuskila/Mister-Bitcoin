<template>
  <section class="app-header flex space-around">
      <RouterLink to="/">
    <div class="header-title-container flex align-center justify-center pointer">
      <h3>Mister Bitcoin</h3>
      <img src="https://res.cloudinary.com/dubjerksn/image/upload/v1644936528/hzzatnqyjswecfqx2ink.png" />
    </div>
      </RouterLink>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/contact">Contacts</RouterLink> |
      <RouterLink to="/dashboard">Dashboard</RouterLink>
    </nav>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header-title-container {
  img{
    margin-inline-start: 8px;
    width: 28px;
  }
}
</style>
