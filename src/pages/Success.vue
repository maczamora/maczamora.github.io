<template>
<body class="success-page">
<header-layout>
</header-layout>
<div class="contact">
     <b-container class="top-container">
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10"></b-col>
        <b-col></b-col>
      </b-row>
  </b-container>
  <b-container class="main-container">
  <div class="form">
    <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col></b-col>
          <b-col cols="3">
            <h1 class="heading">Submitted!</h1>
          </b-col>
          <b-col>
          </b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col></b-col>
          <b-col cols="5">
              <b-img class="thumbs-up" src="good-157436_1280.png" fluid alt="Responsive Image"></b-img>
          </b-col>
          <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col></b-col>
          <b-col cols="6">
              <p>Form submitted successfully, please wait 24-48 hours for a response. If you do not hear from our team within this time frame we are with busy assiting other clients or business partners. Thank you.</p>
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
  </div>
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

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #2B2129;
  border-radius: 4px;
}

input[type=text]:focus {
  background-color: lightblue;
}

input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #2B2129;
  border-radius: 4px;
}

input[type=email]:focus {
  background-color: lightblue;
}

input[type=tel] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #2B2129;
  border-radius: 4px;
}

input[type=tel]:focus {
  background-color: lightblue;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  /* border: 2px solid #ccc; */
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
  border: 2px solid #2B2129;
  border-radius: 4px;
}

button {
  background-color: #7435F2;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  width: 100%;
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
    },
  }
}

</script>
