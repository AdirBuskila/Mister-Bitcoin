<template>
  <ul class="coin-news-list flex column">
    <li v-for="coinNews in news" :key="coinNews.id">
      <CoinNewsPreview :coinNews="coinNews" />
    </li>
  </ul>
</template>

<script>
import CoinNewsPreview from './CoinNewsPreview.vue';
export default {
  components: {
    CoinNewsPreview,
  },
  props: {
    news: Array,
  },
};
</script>

<style></style>
