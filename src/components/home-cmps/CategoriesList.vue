<template>
  <section>
    <ul class="coin-list flex">
      <li v-for="coin in categories" :key="coin.id">
        <CategoryPreview :coin="coin" />
      </li>
    </ul>
  </section>
</template>

<script>
import CategoryPreview from './CategoryPreview.vue';
export default {
  components: {
    CategoryPreview,
  },
  props: {
    categories: Array,
  },
};
</script>

<style></style>
