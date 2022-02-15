<template>
  <div class="contacts-page">
    <h1>This is the contacts page</h1>
    <ContactFilter @set-filter="setFilter" />
    <ContactList :contacts="contactsToShow" />
  </div>
</template>

<script>
import contactService from "../services/contact.service"
import ContactList from "../components/ContactList.vue"
import ContactFilter from "../components/ContactFilter.vue"
  export default {
    components: {
    ContactList,
    ContactFilter
},
    data() {
      return {
        filterBy: null
      }
    },
    methods: {
      setFilter(filterBy){
        this.filterBy = filterBy
      }
    },
    computed: {
      contacts() {
        return this.$store.getters.contacts
      },
      contactsToShow() {
        if (!this.filterBy) return this.contacts
        const regex = new RegExp(this.filterBy.name, 'i');
        return this.contacts.filter((contact) => regex.test(contact.name))
      }
    }
  }
</script>

<style>

</style>
