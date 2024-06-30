<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark navbarScroll">
    <div class="container">
      <a class="navbar-brand" href="#">7in</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#blog">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <form class="d-flex ms-auto">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit"><i class="fas fa-search"></i></button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
 // Import Bootstrap's JS
import 'bootstrap';

// Import Bootstrap's CSS (adjust path based on your setup)
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default {
  name: "MainNavbar",
  mounted() {
    const header = document.querySelector('.navbar');
    window.onscroll = function() {
      const top = window.scrollY;
      if (top >= 100) {
        header.classList.add('navbarDark');
      } else {
        header.classList.remove('navbarDark');
      }
    };

    const navLinks = document.querySelectorAll('.nav-item');
    const menuToggle = document.getElementById('navbarSupportedContent');

    navLinks.forEach((l) => {
      l.addEventListener('click', () => {
        new bootstrap.Collapse(menuToggle).toggle();
      });
    });
  },
};
</script>

<style scoped>
.navbarScroll.navbarDark {
  background-color: black;
}
</style>
