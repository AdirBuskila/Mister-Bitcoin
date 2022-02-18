<template>
  <p class="tag-name">{{ coin.name }}</p>
</template>

<script>
export default {
  props: {
    coin: Object,
  },
};
</script>

<style scoped></style>
