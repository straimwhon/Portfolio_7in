<template>
  <section class="bgimage" id="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 hero-text">
          <h2 class="hero_title">Hi, it's me 7in</h2>
          <p class="hero_desc">I am a Student</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.bgimage {
  height: 100vh;
  background: url('../public/images/heroImage.jpeg');
  background-size: cover;
  position: relative;
}
.hero_title {
  font-size: 4.5rem;
}
.hero_desc {
  font-size: 2rem;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
