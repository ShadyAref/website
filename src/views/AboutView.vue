<template>
    <the-navigations />

    <h1 class="header">ABOUT US</h1>
    
    <div class="about-section">
        <h5>Welcome to Our Website!</h5>
        <p>
            Our mission is to provide you with all the tools and resources you need to prepare for job interviews and get
            the job you deserve.<br />
            We provide access to a comprehensive library of interview questions, practice sessions, and suggested answers to
            help you practice and perfect your interviewing skills.<br />
            Our website is updated regularly and offers detailed questions, topics, and industries to help you understand
            the potential questions you may be asked in an interview, along with key tips to improve your performance during
            the interview.<br />
            Whether you’re a seasoned professional looking for a job change or just starting out in the world of work, our
            team of experts are here to help you leave a lasting impression during your interview.<br />
            On our website, you can find out more about us, browse our library of questions, access tips and advice to help
            prepare for your interview, and also connect with other job-hunters for shared learning and insights.<br />
            If there
        </p>
    </div>

    <the-footer />
</template>

<script>
import TheFooter from "../components/TheFooter.vue"
import TheNavigations from '../components/TheNavigations.vue';
import '../assets/style/about.css';

export default {
    components: { TheNavigations, TheFooter }
}
</script>
