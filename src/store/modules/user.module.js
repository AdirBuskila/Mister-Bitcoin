import { userService } from "../../services/user.service";

export default {
    state: {
        user: null
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user;
        },
    },
    actions: {
        async loadUser({ commit }) {
            const user = userService.getUser();
            commit({ type: 'setUser', user });
        },
        async saveUser({ commit }, { user }) {
            const updatedUser = userService.setUser(user);
            commit({ type: 'setUser', user: updatedUser });
        },
    },
};