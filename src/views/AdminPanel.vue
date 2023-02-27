<template>
    <div class="content">
        <div class="admin-content">
            <h1 class="header">Admin Panel</h1>

            <div class="sidenav">
                <router-link id="home" to="/adminPanel/home">Home</router-link>
                <router-link id="resources" to="/adminPanel/resources">Resources</router-link>
                <router-link id="about" to="/adminPanel/about">About</router-link>
                <router-link id="interview-questions" to="/adminPanel/interview-questions">Interview Questions</router-link>
                <router-link id="backToHome" to="/">Back To Home...</router-link>
            </div>

            <div class="inner-content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/style/panel.css"
</script>