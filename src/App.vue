<template>
  <div class="app">
    <AppHeader />
    <RouterView />
    <UserMsg />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import UserMsg from './components/UserMsg.vue';

export default {
  components: {
    AppHeader,
    UserMsg
},
  async created() {
    await this.$store.dispatch({type: 'loadContacts'})
    await this.$store.dispatch({type: 'loadUser'})
  }
}
</script>

<style scoped>

</style>
