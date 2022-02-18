<template>
  <div class="app">
    <AppHeader :setMenubarClass="setMenubarClass" />
    <RouterView />
    <UserMsg />
    <MenuBar :setMenubarClass="setMenubarClass" :class="menubarClass" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import UserMsg from './components/UserMsg.vue';
import router from './router';
import MenuBar from './components/MenuBar.vue';

export default {
  components: {
    AppHeader,
    UserMsg,
    MenuBar,
  },
  data() {
    return {
      menubarClass: '',
    };
  },
  methods: {
    setMenubarClass(value) {
      this.menubarClass = value;
    },
  },
  async created() {
    await this.$store.dispatch({ type: 'loadContacts' });
    if (!this.$store.getters.user) router.push('/signup');
  },
};
</script>

<style scoped></style>
