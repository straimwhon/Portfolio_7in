<template>
  <div id="app">
    <MainNavbar />
    <HeroSection />
    <AboutSection />
    <BlogPosts />
    <ServicesSection />
    <PortfolioGallery />
    <ContactForm />
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from "./components/MainNavbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import BlogPosts from "./components/BlogPosts.vue";
import ServicesSection from "./components/ServicesSection.vue";
import PortfolioGallery from "./components/Portfolio.vue";
import ContactForm from "./components/ContactForm.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",
  components: {
    MainNavbar,
    HeroSection,
    AboutSection,
   BlogPosts,
    ServicesSection,
    PortfolioGallery,
    ContactForm,
    MainFooter,
  },
};
</script>

<style>
/* Add global styles here if needed */
</style>
