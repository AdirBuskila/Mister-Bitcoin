<template>
  <div class="app">
    <AppHeader
      :setOpenedLocation="setOpenedLocation"
      :setMenubarClass="setMenubarClass"
    />
    <RouterView />
    <UserMsg />
    <MenuBar
      :openedLocation="openedLocation"
      :setMenubarClass="setMenubarClass"
      :class="menubarClass"
    />
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
    await this.$store.dispatch({
      type: 'saveUser',
      user: { name: 'sauske', coins: 20, moves: [] },
    });
    // if (!this.$store.getters.user) router.push('/signup')
  },
};
</script>

<style scoped></style>
