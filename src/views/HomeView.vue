<template>
  <the-navigations />

  <div class="home-content">
    <h1 class="header">We Provide</h1>
    <div class="row g-4">
      <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
        <div class="service-item d-flex flex-column justify-content-center text-center rounded">
          <div class="service-questions-icon flex-shrink-0"></div>
          <h5 class="mb-3">Interview's Questions</h5>
          <p>All questions in html, css and javascript included.</p>
          <router-link class="btn px-3 mt-auto mx-auto" to="/interview">Read More</router-link>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
        <div class="service-item d-flex flex-column justify-content-center text-center rounded">
          <div class="service-repos-icon flex-shrink-0"></div>
          <h5 class="mb-3">Popular Repos</h5>
          <p>Popular repos you need to strengthens your abillities.</p>
          <router-link class="btn px-3 mt-auto mx-auto" to="/repos">Read More</router-link>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
        <div class="service-item d-flex flex-column justify-content-center text-center rounded">
          <div class="service-about-icon flex-shrink-0"></div>
          <h5 class="mb-3">About Our Website</h5>
          <p>All you need to know about our website is here.</p>
          <router-link class="btn px-3 mt-auto mx-auto" to="/about">Read More</router-link>
        </div>
      </div>
    </div>
  </div>

  <the-footer />
</template>

<script>
import TheFooter from "../components/TheFooter.vue"
import TheNavigations from "../components/TheNavigations.vue";
import '../assets/style/cards.css'

export default {
  components: { TheNavigations, TheFooter }
}
</script>

