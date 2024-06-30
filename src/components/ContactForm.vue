<template>
  <section id="contact">
    <div class="container mt-3">
      <h1 class="text-center">Contact Me</h1>
      <div class="row">
        <div class="col-lg-4 mt-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-center">Contact</h4>
              <p class="card-text text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div class="text-center">
                <a href="#" class="btn btn-success">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 mt-4">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="uname">Username:</label>
              <input v-model="username" type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input v-model="password" type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="form-group form-check">
              <label class="form-check-label">
                <input v-model="agree" class="form-check-input" type="checkbox" name="remember" required> I agree on blabla.
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Check this checkbox to continue.</div>
              </label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      username: "",
      password: "",
      agree: false,
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log("Form submitted:", this.username, this.password, this.agree);
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles for contact section here if needed */
</style>
