<template>
  <div class="index">
    <header-layout>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
      <!-- Use gopher image in the Header-->
    </header-layout>
    <div class="jumbotron">
      <b-jumbotron header="Mario Zamora - Engineered Hustle" lead="Full time IT Software Engineer working on Smarter-IT initiaitives,
        automation and building scalable, reliable, bug free software at
        Keysight Technologies.">
        <p>
          For more information or if you would like to contact me please submit
          a message from the contact page. Please feel free to explore my personal website and blog and hope you
          enjoy your time here.
        </p>
      </b-jumbotron>
    </div>
    <div class="main-content">
      <h1 class="primary-heading"></h1>
    </div>

    <div class="content-container">
      <p class="about-info">
      </p>
    </div>
    <footer-layout></footer-layout>
  </div>
</template>

<footer-layout></footer-layout>
<script>
export default {
  metaInfo: {
    title: "Mario Zamora",
  },
};
</script>

<style>
.index {
  background-color: #60656f;
}

.primary-heading {
  text-align: center;
}

.top-container {
  text-align: center;
}

.about-info {
  text-align: center;
  font-size: x-large;
  color: #131200;
}

.contact-info {
  text-align: center;
}

/* .footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  margin-right: 1rem;
  margin-bottom: 5rem;
} */

/* .footer a { 
  color: black;
  font-size: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 5rem;
} */
</style>
