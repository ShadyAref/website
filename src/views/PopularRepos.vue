<template>
  <the-navigations />

  <div>
    <h1 class="header">Repos Can Help</h1>

    <div class="container">
      <div class="repo" v-for="repo in repos" :key="repo.name">
        <h2 class="repo-name">{{ repo.name }}</h2>
        <h5 class="repo-author">By : {{ repo.author }}</h5>
        <p class="repo-description">
          {{ repo.description }}
        </p>
        <a :href="repo.url" target="_blank" class="repo-url">Link to repo</a>
      </div>
    </div>

  </div>

  <the-footer />
</template>

<script>
import '../assets/style/popular-repos.css'
import data from '@/PopularRepos.json'
import TheNavigations from '../components/TheNavigations.vue';
import TheFooter from "../components/TheFooter.vue"
export default {
  data() {
    return {
      repos: data.repos,
    }
  },
  methods: {
  },
  components: { TheNavigations, TheFooter }
}
</script>