<template>
  <RouterLink :to="`/contact/${contact._id}`">
    <section class="contact-preview flex">
      <div class="contact-img-container">
        <img
          class="contact-img"
          :src="contactImg"
        />
      </div>
      <div class="contact-info">
        <p class="contact-name">{{ contact.name }}</p>
        <p class="contact-email">{{ contact.email }}</p>
      </div>
    </section>
  </RouterLink>
</template>

<script>
export default {
  props: {
    contact: Object,
  },
  data() {
    return {
      contactImg: 'https://res.cloudinary.com/dubjerksn/image/upload/v1643293928/Notello/wkyvzzdkw2e4whnbt1lt.png',
    }
  },
  async created() {
    this.contactImg = `https://robohash.org/${this.contact.name}`
  },

};
</script>

<style></style>
