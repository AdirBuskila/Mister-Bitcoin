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
import router from './router';

export default {
  components: {
    AppHeader,
    UserMsg
},
  async created() {
    await this.$store.dispatch({type: 'loadContacts'})
    if (!this.$store.getters.user) router.push('/signup')
  }
}
</script>

<style scoped>

</style>
