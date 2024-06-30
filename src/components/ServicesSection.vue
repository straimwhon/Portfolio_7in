<template>
  <section id="services">
    <div class="container">
      <h1 class="text-center">Services</h1>
      <div class="row">
        <div class="col-lg-4 mt-4" v-for="service in services" :key="service.title">
          <div class="card servicesText">
            <div class="card-body">
              <i :class="service.icon" class="servicesIcon"></i>
              <h4 class="card-title mt-3">{{ service.title }}</h4>
              <p class="card-text mt-3">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        { icon: "fas fa-clock", title: "Website Development", description: "Some quick example text..." },
        { icon: "fas fa-layer-group", title: "Website Design", description: "Some quick example text..." },
        { icon: "far fa-check-circle", title: "Website Deployment", description: "Some quick example text..." },
        { icon: "fas fa-search", title: "SEO", description: "Some quick example text..." },
        { icon: "fas fa-shield-alt", title: "DevOps", description: "Some quick example text..." },
        { icon: "fas fa-wrench", title: "QA", description: "Some quick example text..." },
      ],
    };
  },
};
</script>

<style scoped>
.servicesText.card {
  height: 280px;
  cursor: pointer;
}
.servicesIcon {
  font-size: 36px;
  text-align: center;
  width: 100%;
}
.card-title {
  text-align: center;
}
.card:hover .servicesIcon {
  color: #008000;
}
.servicesText:hover {
  border: 1px solid #008000;
}
</style>
