<template>
  <section class="contact-edit flex column justify-center align-center">
    <h1>{{pageTitle}}</h1>
    <form v-if="contactToEdit" @submit.prevent="save" class="contact-edit-form flex column justify-center align-center">
        <input v-model="contactToEdit.name" type="text" placeholder="Name">
        <input v-model="contactToEdit.phone" type="text" placeholder="Phone">
        <input v-model="contactToEdit.email" type="email" placeholder="Email">
        <button>Save</button>
    </form>
  </section>
</template>

<script>
import contactService from '../services/contact.service';
import { eventBus } from '../services/eventBus.service';
export default {
  data() {
    return {
      contactToEdit: null,
    };
  },
  async created() {
      const { id } = this.$route.params;
      if (id) this.contactToEdit = await contactService.get(id);
      else this.contactToEdit = contactService.getEmptyContact()
  },
  methods: {
    async save() {
      if (this.contactToEdit._id) {
        eventBus.emit('show-msg', { type: 'success', txt: 'Saved successfully' });
      } else {
        eventBus.emit('show-msg', { type: 'success', txt: 'Added successfully' });
      }
      await this.$store.dispatch({type: 'saveContact', contact: this.contactToEdit})
      this.$router.push('/contact');
    },

  },
  computed: {
    pageTitle() {
      const { id } = this.$route.params
      return id ?  'Edit Contact' : 'Add Contact'
    }
  }
};
</script>

<style></style>
