<template>
  <div class="index">
    <header-layout>
    </header-layout>
    <div class="jumbotron">
      <b-jumbotron header="Capshure" lead="Full time IT Software Engineer working on Smarter-IT initiaitives,
        automation and building scalable, reliable, bug free Software products.">
        <hr>
        <hr>
        <p>
          For more information or if you would like to contact me please submit
          a message from the contact page. Please feel free to explore the website and we hope you
          enjoy your time here.
        </p>
        <g-image class="logo" alt="Website Logo" src="~/Capshure-Sec-v1.5.png" width="500" height="500" fit="outside"/>
      </b-jumbotron>
    </div>
    <b-container class="main-container">
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">Welcome! Thank you for visiting Capshure Consulting Firm. As you begin your journey into this company website and personal blog I hope you find your time valueable.</b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">Our Mission, provide reliable services and bring awareness to the subject of cybersecurity in order to defend and protect our clients assets.</b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">This is not only a consulting firm and business but also a brand, overtime please support this business by looking into some of our brand affilicated gear. COMING SOON!</b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">
          <p class=font-weight-bold>Skills and Knowledge</p>
          <ul>
            <li>Cybersecurity</li>
            <li>DevOps</li>
            <li>Networking</li>
            <li>Linux and Windows</li>
            <li>Automation</li>
            <li>Software Development</li>
            <li>AWS</li>
          </ul>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-1 pt-5">
        <b-col></b-col>
        <b-col cols="12"><b-img-lazy v-bind="imageProps" rounded src="safar-safarov-LKsHwgzyk7c-unsplash.jpg" fluid alt="Responsive image"></b-img-lazy></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Mario Zamora",
  },
    data() {
      return {
        imageProps: {}
      }
    }
  };
</script>

<style>
.index {
  background-color: #08080d;
  color: white;
}

.jumbotron { 
  text-align: center;
  background-color: #08080d; 
}

li {
  color: #D1B000;
}
</style>
