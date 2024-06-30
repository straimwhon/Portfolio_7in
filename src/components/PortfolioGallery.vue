<template>
  <section id="portfolio">
    <div class="container mt-3">
      <h1 class="text-center">Portfolio</h1>
      <div class="row">
        <div class="col-lg-4 mt-4" v-for="image in images" :key="image">
          <div class="card">
            <img :src="image" class="card-img-top" alt="Card image" style="width:100%">
            <div class="card-body">
              <h4 class="card-title">CJC</h4>
              <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div class="text-center">
                <a href="#" class="btn btn-success">Click Image</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioGallery",
  data() {
    return {
      images: [
        "../public/images/portfolioImage1.jpg",
        "../public/images/portfolioImage2.jpg",
        "../public/images/portfolioImage3.jpg",
        "../public/images/portfolioImage4.jpg",
        "../public/images/portfolioImage1.jpg",
        "../public/images/portfolioImage3.jpg",
      ],
    };
  },
};
</script>

<style scoped>
/* Add any scoped styles for portfolio section here if needed */
</style>
