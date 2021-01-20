<template>
  <div class="index">
    <header-layout>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
      <!-- Use gopher image in the Header-->
    </header-layout>
    <div class="jumbotron">
      <b-jumbotron header="Engineered for Hustle" lead="Full time IT Software Engineer working on Smarter-IT initiaitives,
        automation and building scalable, reliable, bug free software at
        Keysight Technologies.">
        <p>
          For more information or if you would like to contact me please submit
          a message from the contact page. Please feel free to explore my personal website and blog and hope you
          enjoy your time here.
        </p>
      </b-jumbotron>
    </div>
    <b-container class="main-container">
      <b-row class="pb-5">
        <b-col></b-col>
        <b-col cols="10">As you begin your journey into my website and personal blog I hope you find your time valueable.</b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">My Mission, provide reliable and valueable content while building a consumer base that utilizes what I publish and looks to me as their first choice for consulting.</b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">I'm also building a brand and a business, if you have a need for technical consulting let me provide that to you. First hour will be offered pro-bono with each additional hour at a given rate. See below for areas of knowledge.</b-col>
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
            <li>Kali Linux</li>
            <li>Ansible</li>
            <li>AWS</li>
            <li>Digital Lifestyle</li>
          </ul>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">Image Here!</b-col>
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
};
</script>

<style>
.index {
  background-color: #0d0d0e;
  color: white;
}

.jumbotron { 
  text-align: center;
  background-color: #0d0d0e; 
}

</style>
