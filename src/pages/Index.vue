<template>
<body class=index-page>
  <header-layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
  </header-Layout>
  <div>
  <b-jumbotron header="Under Construction" lead="The website and blog are not complete!!!">
    <p>For more information or if you would like to contact me please submit a message from the contact page</p>
  </b-jumbotron>
</div>
  <div class="main-content">
        <h1 class="primary-heading"></h1>
      </div>

      <div class="content-container">
        <p class="about-info">
          Hello! My name is Mario
        </p>
        <p class="about-info">
          I'm a full time IT Software Engineer working on Smarter-IT initiaitives, automation and building scalable, reliable, bug free software at Keysight Technologies.
        </p>
        <p class="about-info">
          In addtion to that, I'm a husband to my beautiful Wife Elizabeth, Dog Dad to Yoda the Yorkie Poodle, eldest of three, and Coloradan by nature not by choice. 
        </p>
        <p class="about-info">
          Please feel free to explore my personal website and blog and hope you enjoy your time here.
        </p>
      </div>
    <footer-layout></footer-layout>
</body>
</template>

<footer-layout></footer-layout>
<script>
export default {
  metaInfo: {
    title: 'Mario Zamora'
  }
}

</script>

<style>

.index-page {
  background-color: #60656F;
}

.primary-heading{
  text-align: center;
}

.top-container{
  text-align: center;
}

.about-info {
  text-align: center;
  font-size: x-large;
  color: #131200;
}

.contact-info{
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
