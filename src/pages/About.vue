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
          <p>Counter-Comms is a new and future proof Cybersecurity consulting firm built to deliver results and create value for your business, protect and defend you from digital cyber threats, and educate our partners, clients and you about Cybersecurity. Our motto here at Counter-Comms, "No business left behind."</p>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-2 pt-2">
        <b-col></b-col>
        <b-col>
          <p>
            If you haven't heard, now a days, even the Meat (JBS Foods) we consume is being targeted by attackers or nefarious unethical black hat hackers who won't stop at anything to get what they want. From nation states to script kiddies and scammers, there is no slowing down for them. Even some of the robust enterprises can't keep up with 
            company wide demand and protection so they have to learn to distribute protective mechanisms and education for their employees. You may ask yourself when will it end? What more can I do? How do I protect my assets? This is where Counter-Comms comes in.</p>
        </b-col>
        <b-col></b-col>
      </b-row>
       <b-row class="pb-2 pt-2">
        <b-col></b-col>
        <b-col>
          <p>
            We are building a world-class team of consultants both new and experienced that have a passion and education for Cybersecurity. Our team consists currenlty of a single full time Software Engineer working on Smarter-IT initiaitives, automation and building scalable, reliable, bug free Software products with a background in Cybersecurity Defense designated by the NSA and The Department of Homeland Security.
            Counter-Comms hopes to expand the team as our growth continues both with clients and partners. Besides the currently listed service offerings we also can offer services in the following areas: DevOps, Networking, Linux and Windows, Automation, Software Devleopment and Engineering, Docker and Kubernetes, Cloud Technologeis - Azure. These additional services will evaluated on a case by case basis.
            Please contact us for more information.
          </p>
          <form action="/contact"><input type="submit" value="Get in Contact" /></form>
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
              <b-card-text>
                I have a yorkie poodle named Yoda and I enjoy fishing.
              </b-card-text>

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

.logo-2 {
  width: 500px;
  height: 500px;

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