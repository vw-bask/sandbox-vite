import { defineStore } from 'pinia'

export const useUserStore = defineStore('user-store', {
  state: () => {
    return {
      loggedIn: [],
      fetching: false
    }
  },

  getters: {
    results(state) {
      return state.loggedIn;
    },

    isFetching(state) {
      return state.fetching;
    }
  },

  actions: {
    async fetchLoggedIn() {
      this.fetching = true;
      const response = await fetch('/data/mockUsers.json');
      try {
        const result = await response.json();
        this.loggedIn = result.users;
      } catch (err) {
        this.loggedIn = [];
        console.error('Error loading logged in users:', err);
        return err;
      }

      this.fetching = false;
    }
  }
})