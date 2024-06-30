<template>
  <section id="about">
    <div class="container mt-4 pt-4">
      <h1 class="text-center">About Me</h1>
      <div class="row mt-4">
        <div class="col-lg-4">
          <img src="../public/images/about.jpeg" class="imageAboutPage" alt="About Image">
        </div>
        <div class="col-lg-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <div class="row mt-3">
            <div class="col-md-6">
              <ul>
                <li>Name: 7in Gal</li>
                <li>Age: 22</li>
                <li>Address: Philippines</li>
              </ul>
            </div>
          </div>
          <div class="row mt-3">
            <p>Lorem Ipsum has been the industry's standard dummy text...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.imageAboutPage {
  width: 100%;
}
</style>
