<template>
<body class="contact-page">
<header-layout>
</header-layout>
<div class="contact">
     <b-container class="top-container">
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10"><!--<h1>Meet the Team!</h1>--><b-jumbotron header="Contact US" lead="Please submit a contact form if you would like to setup a free 1 hour consult"></b-jumbotron></b-col>
        <b-col></b-col>
      </b-row>
  </b-container>
  <b-container class="main-container">
  <b-row class="pb-5 pt-5">
        <!-- <h4 class="career">Career Background</h4> -->
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
    </b-row>
    <b-row class="pb-5 pt-5">
        <!-- <h4 class="career">Career Background</h4> -->
        <b-col></b-col>
        <b-col>
          
        </b-col>
        <b-col></b-col>
    </b-row>
    <b-row class="pb-5 pt-5">
        <!-- <h4 class="career">Career Background</h4> -->
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
    </b-row>
    <b-row class="pb-5 pt-5">
        <!-- <h4 class="career">Career Background</h4> -->
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
    </b-row>
    <b-row class="pb-5 pt-5">
        <!-- <h4 class="career">Career Background</h4> -->
        <b-col></b-col>
        <b-col>
            <form
                name="contact"
                method="post"
                v-on:submit.prevent="handleSubmit"
                action="/success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div class="sender-info">
                  <div>
                    <label for="name" class="label" >Your name</label>
                    <input type="text" name="name" v-model="formData.name" />
                  </div>
                  <div>
                    <label for="email">Your email</label>
                    <input type="email" name="email" v-model="formData.email" />
                  </div>
                </div>

                <div class="message-wrapper">
                  <label for="message">Message</label>
                  <textarea name="message" v-model="formData.message"></textarea>
                </div>

                <button type="submit">Submit form</button>
              </form>
        </b-col>
        <b-col></b-col>
    </b-row>
    <b-row class="pb-5 pt-5">
        <!-- <h4 class="career">Career Background</h4> -->
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
    </b-row>
    <b-row class="pb-5 pt-5">
        <!-- <h4 class="career">Career Background</h4> -->
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
    </b-row>
    <b-row class="pb-5 pt-5">
        <!-- <h4 class="career">Career Background</h4> -->
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
    </b-row>
    <b-row class="pb-5 pt-5">
        <!-- <h4 class="career">Career Background</h4> -->
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
    </b-row>
</b-container>
</div>
<footer-layout></footer-layout>
</body>
</template>

<style>

.contact {
    background-color: #2475f0;
  color: #FFFFFF;
}

.jumbotron { 
  text-align: center;
  background-color: #BE27CF; 
}

</style>

<script>
export default {
    data() {
        return {
            formData: {}
        }
    },
methods: {
  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  },
  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': e.target.getAttribute('name'),
        ...this.formData,
      }),
    })
    .then(() => this.$router.push('/success'))
    .catch(error => alert(error))
  }
}
}

</script>
