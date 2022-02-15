import contactService from "../../services/contact.service";

export default {
    state: {
        contact: null
    },
    getters: {
        contacts(state) {
            return state.contact;
        }
    },
    mutations: {
        setContact(state, { contact }) {
            state.contact = contact;
        },
        removeContact(state, { id }) {
            const idx = state.contact.findIndex((contact) => contact._id === id);
            state.contact.splice(idx, 1);
        },
        saveContact(state, { contact }) {
            const idx = state.contact.findIndex((currContact) => currContact._id === contact._id);
            if (idx !== -1) state.contact.splice(idx, 1, contact);
            else state.contact.push(contact);
        }
    },
    actions: {
        async loadContacts(context) {
            const contact = await contactService.query();
            context.commit({ type: 'setContact', contact });
        },
        async removeContact({ commit }, { id }) {
            await contactService.remove(id);
            commit({ type: 'removeContact', id });
        },
        async saveContact({ commit }, { contact }) {
            const updatedContact = await contactService.save(contact);
            commit({ type: 'saveContact', contact: updatedContact });
        }
    },
};