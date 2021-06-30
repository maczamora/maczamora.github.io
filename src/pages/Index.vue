<template>
  <div class="index">
    <header-layout>
    </header-layout>
    <div class="jumbotron">
      <b-jumbotron header="Counter Comms" lead="Background in Cybersecurity Defense designated by the NSA and The Department of Homeland Security">
        <hr>
        <p>
          For more information or if you would like to contact me please submit
          a message from the contact page. Please feel free to explore the website and we hope you
          enjoy your time here.
        </p>
      </b-jumbotron>
    </div>
    <b-container fluid class="embed">
      <div class=video>
          <b-embed
            type="video"
            src="pexels-mikhail-nilov-7534239.mp4"
            allowfullscreen
            allow=autoplay 
            autoplay=1
            autopause=0
            muted=true
            loop=1
          ></b-embed>
        </div>
    </b-container>
    <b-container class="main-container">
      <b-row class="pb-4 pt-5">
        <b-col></b-col>
        <b-col cols="10">Welcome! Thank you for visiting Counter Comms. As you begin your journey into this company website and personal blog I hope you find your time valueable.</b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-4 pt-4">
        <b-col></b-col>
        <b-col cols="10">Our Mission, provide reliable services and products while increasing the awareness to Cybersecurity through expert research in order to defend and protect our clients and their assets. Our moto at Counter-Comms, "No business left behind".</b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-4 pt-4">
        <b-col></b-col>
        <b-col cols="10">Please take a look at some of our service offerings for more information. If you would like to get in contact we offer a free 1 hour virtual or in person consult. Due to COVID-19, virtual face to face consult is also available.</b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10"></b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-1 pt-5">
        <b-col></b-col>
        <!-- <b-col cols="12"><b-img-lazy v-bind="imageProps" rounded src="safar-safarov-LKsHwgzyk7c-unsplash.jpg" fluid alt="Responsive image"></b-img-lazy></b-col> -->
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
  background-color: #2475f0;
  color: #FFFFFF;
}

.jumbotron { 
  text-align: center;
  background-color: #BE27CF; 
  color: #2B2129;
  margin-bottom: 0;
}

.embed {
  width: 100%;
  padding: 0;
}

.video {
  width: 100%;
  padding: 0;

}

</style>
