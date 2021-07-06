<template>
<body class="services-page">
  <header-layout>
  </header-layout>
    <div class="services">
  <b-container class="top-container">
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10"><!--<h1>Meet the Team!</h1>--><b-jumbotron header="Services" lead="Checkout out our services, More to come"></b-jumbotron></b-col>
        <b-col></b-col>
      </b-row>
  </b-container>
  <b-container class="main-container">
  <div class="service-types">
    <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col>
            <div class="info-person-1">
            <b-card
                title="DevSecOps"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2">
              <g-image src="~/box.svg" width="150" height="150" position="center"/>
              <b-card-text>Develop a framework for your team to increase technical delivery and team collaboration.</b-card-text>
            </b-card>
          </div>
          </b-col>
          <b-col>
            <div class="info-person-1">
              <b-card
                title="Basic Cybersecurity"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2">
              <g-image src="~/shield-lock-fill.svg" width="150" height="150" position="center"/>
              <b-card-text>Let's take it back to the basics of Cybersecurity and analyze and gaps or holes you have may in your defense.</b-card-text>
            </b-card>
          </div>
          </b-col>
          <b-col>
            <div class="info-person-1">
            <b-card
                title="Software Security"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2">
              <g-image src="~/globe2.svg"  width="150" height="150" position="center"/>
              <b-card-text>Let's take a look at securiing your software and making sure it is reliable and robust to handle security flaws.</b-card-text>
            </b-card>
          </div>
          </b-col>
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

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>

<style>

.services-page {
  background-color: #2475f0;
  color: #FFFFFF;
}
</style>