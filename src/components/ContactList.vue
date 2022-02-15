<template>
  <section class="contact-list-container">
    <ul class="contact-list clean-list flex justify-center align-center column">
      <li
        v-for="contact in contacts"
        :key="contact._id"
        class="contact-preview-container"
      >
        <ContactPreview :contact="contact" />
      </li>
      <RouterLink to="/contact/edit">
        <li class="contact-preview-container">
          <div class="contact-preview flex align-center justify-center">
            <h1>Add new contact</h1>
            <div class="add-container">
              <img
                src="https://res.cloudinary.com/dubjerksn/image/upload/v1644846986/hqt2knwhkaozup3lci63.png"
              />
            </div>
          </div>
        </li>
      </RouterLink>
    </ul>
  </section>
</template>

<script>
import ContactPreview from '@/components/ContactPreview.vue';
export default {
  props: {
    contacts: Array,
  },
  components: {
    ContactPreview,
  },
};
</script>

<style></style>
