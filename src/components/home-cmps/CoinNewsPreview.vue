<template>
  <section class="coin-news-container">
    <div class="coin-news-preview flex column align-center">
      <h5>{{ coinNews.title.en }}</h5>
      <p class="coin-name">
        Related coin:
        <span> {{ coinNews.coins[0].name }}</span>
      </p>
      <p class="news-date">{{ dateDisplay }}</p>
      <img :src="coinNews.proof" />
      <div class="coin-news-info flex">
        <div class="categories-container flex">
          <p class="tags">Tags:</p>
          <CategoriesList :categories="coinNews.categories" />
        </div>
        <div class="link-container flex">
          <p>Link:</p>
          <a :href="coinNews.source" target="_blank">
            <div class="img-container flex">
              <img
                src="https://res.cloudinary.com/dubjerksn/image/upload/v1645140766/gjt4ipco7npqnjpvngbk.png"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    <hr />
  </section>
</template>

<script>
import { utilService } from '../../services/util.service';
import CategoriesList from './CategoriesList.vue';

export default {
  components: {
    CategoriesList,
  },
  props: {
    coinNews: Object,
  },
  computed: {
    dateDisplay() {
      return utilService.fixTimestamp(this.coinNews.date_event);
    },
    coinColor() {
      return utilService.stringToColour(this.coinNews.coins[0].name);
    },
  },
};
</script>

<style></style>
