<template>
    <div class="container-xxl py-5 bg-primary hero-header mb-5">
    <nav class="navigations">
        <router-link id="home" to="/">Home</router-link>
        <router-link id="interview-questions" to="/interview">Interview Questions</router-link>
        <router-link id="popular-repos" to="/repos">Popular Repos</router-link>
        <!-- <div class="nav-item dropdown"> -->
            <router-link to="#" class="nav-link dropdown-toggle" @mouseover="mouseover" @mouseleave="mouseleave">
                Resources
                <div class="dropdown-menu m-0" :class="{ isOpen }">
                <router-link id="applications" class="dropdown-item" to="/resources/applications">Applications</router-link>
                <router-link id="websites" class="dropdown-item" to="/resources/websites"> Websites</router-link>
                </div>
            </router-link>
        <!-- </div> -->
        <router-link id="about" to="/about">About</router-link>
        <router-link id="admin-panel" to="/adminPanel">Admin Panel</router-link>
        <router-link id="login" to="/login">{{ this.isLogged ? "Logout" : "Login" }}</router-link>
    </nav>
    <h1>Prepare Well for your Interview</h1>
    <p>All Preperations you need are here</p>
    </div>
</template>
<script>
import { mapState } from 'pinia';
import { useToggleStore } from '../stores/stores';
export default {
    data(){
        return{
            isOpen: false,
            isLogged: useToggleStore.loggedIn
        }
    },
    methods: 
    {
        mouseover: function () {
            this.isOpen = true;
        },
        mouseleave: function () {
            this.isOpen = false;
        },
    },
    computed: {
        ...mapState(useToggleStore , ['loggedIn'])
    }
}
</script>