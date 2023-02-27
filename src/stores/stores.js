import { defineStore } from 'pinia'

export const useToggleStore = defineStore('toggleStore', {
  state: () => ({
    user: null,
    loggedIn: false
  }),

  actions: {
    toggleDarkMode(darkMode) {
      if (darkMode) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    },
  }
})
