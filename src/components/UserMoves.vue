<template>
  <section class="user-moves-container">
      <ul>
          <li v-for="move in moves" :key="move._id" >
              
          </li>
      </ul>
  </section>
</template>

<script>
export default {
    props: {
        moves: Array
    }
}
</script>

<style>

</style>