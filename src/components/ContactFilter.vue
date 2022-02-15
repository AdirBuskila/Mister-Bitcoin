<template>
  <section class="contact-filter flex justify-center">
    <input class="filter-input" type="text" placeholder="Search contact..." v-model="filterBy.name" @input="setFilter" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        name: '',
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit('set-filter', this.filterBy);
    },
  },
};
</script>

<style>
</style>