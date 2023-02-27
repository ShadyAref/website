<template>
  <div>

    <div>
      <input type="checkbox" class="checkbox" id="checkbox" @click="toggle" />
      <label for="checkbox" class="checkbox-label">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <span class="ball"></span>
      </label>
    </div>

    <router-view />
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useToggleStore } from "./stores/stores.js";

export default {
  methods: {
    ...mapActions(useToggleStore, ["toggleDarkMode"]),

    toggle(event) {
      this.toggleDarkMode(event.target.checked);
    },
  }
};
</script>

