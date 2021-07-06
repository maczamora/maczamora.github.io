<template>
<body class="about-page">
<header-layout>
</header-layout>
<div class="about">
  <b-container class="top-container">
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10"><!--<h1>Meet the Team!</h1>--><b-jumbotron header="About Our Team" lead="Meet the experts at Counter Comms"></b-jumbotron></b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>
  </b-container>
<b-container fluid class="main-container">
      <b-row class="pb-5 pt-5">
        <!-- <h4 class="career">Career Background</h4> -->
        <b-col></b-col>
        <b-col>
          <h1 class="heading">What is Counter Comms?</h1>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-2 pt-2">
        <b-col></b-col>
        <b-col>
          <p>Counter-Comms is a Cybersecurity consulting firm built to deliver results, create value for your business, protect and defend you from digital cyber threats, and educate our partners, clients, and you about Cybersecurity. Our motto here at Counter-Comms, "No business left behind."</p>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-2 pt-2">
        <b-col></b-col>
        <b-col>
          <p>
            With the most recent ransomware events, black hat hackers are gaining speed and traction in supply chain attacks. They won't stop at anything to get what they want. From nation-states to script kiddies and scammers, there is no slowing down for the enemy. Even some of the most robust enterprises can't keep up with company-wide demand and protection, so they need to distribute protective mechanisms and education for their employees to protect themselves. You may ask yourself, when will it end? What more can I do? How do I protect my assets? That's where Counter-Comms comes in.</p>
        </b-col>
        <b-col></b-col>
      </b-row>
       <b-row class="pb-2 pt-2">
        <b-col></b-col>
        <b-col>
          <p>
            We are building a world-class team of consultants, both new and experienced, who have a passion and education for Cybersecurity, Privacy, and Threat Intelligence. Our team consists of a single full-time Software Engineer working on Smarter-IT initiatives, automation, and building scalable, reliable, bug-free Software with a background in Cybersecurity Defense designated by the NSA and The Department of Homeland Security. Counter-Comms hopes to expand the team as our growth continues both with clients and partners. Besides the currently listed service offerings, we also can offer services in the following areas: Networking, Automation, Docker and Kubernetes, Cloud Technologies - AWS or Azure. These will be evaulated on a case-by-case basis. Contact us for more information.
          </p>
          <form action="/contact"><input type="submit" value="Get in Contact" /></form>
        </b-col>
        <b-col></b-col>
      </b-row>
       <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col>
          <h1 class="heading">The Brand</h1>
        </b-col>
        <b-col></b-col> 
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col>
          <g-image class="brand" src="~/Capshure-Sec-v1.6.png" alt="Responsive Logo"/>
        </b-col>
        <b-col></b-col> 
      </b-row>
       <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col>
          The Counter-Comms logo represents the entire lifecycle of Cybersecurity. The red color represents offense, and the blue color represents defense. The white squares represent a keyboard and ethics that an ethical hacker must uphold. We like to call these sophisticated minds white-hat hackers. The gold represents the amount of money that is involved with this industry. Counter-Comms was built with the idea to have a recognized identity within the community, our clients, and our partners. We hope you enjoy learning about our brand and identity as we continue our work with you. 
        </b-col>
        <b-col></b-col>
      </b-row>
       <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>
       <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col>
          <h1 class="heading">Our Team</h1>
        </b-col>
        <b-col></b-col>
      </b-row>
       <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col>
          <div class="info-person-1">
            <b-card
              title="CEO and Lead Cybersecurity Consultant"
              sub-title="Mario Zamora"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 30rem;"
              class="mb-2"
            >
              <b-button href="/services" variant="primary">Services</b-button>
            </b-card>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pt-5">
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
</div>
<footer-layout></footer-layout>
</body>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
  },
    data() {
      return {
        imageProps: {}
      }
    }
  };
</script>

<style>

.about {
  background-color: #2475f0;
  color: white;
}

.jumbotron { 
  text-align: center;
  background-color: #BE27CF; 
}

.info-person-1 {
  color: #BE27CF;
}

.heading {
  border-bottom-style: solid;
}

.brand{
  position: center; top: 0px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  display: block; 
  width: 250px;
  height: 250px;

}

input[type=submit] {
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