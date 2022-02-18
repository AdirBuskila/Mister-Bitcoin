<template>
  <section class="moves-list-container">
          <h1>Last Moves:</h1>
      <ul class="clean-list ">
          <li class="move-preview-container" v-for="move in moves" :key="move._id" >
              <MovePreview :move="move" :currBtcPrice="currBtcPrice" />
          </li>
      </ul>
  </section>
</template>

<script>
import MovePreview from "./MovePreview.vue";
export default {
    props: {
        moves: Array,
        currBtcPrice: Number
    },
    components: { MovePreview }
}
</script>

<style>

</style>