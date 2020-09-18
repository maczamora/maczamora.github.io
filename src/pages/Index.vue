<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

<div class="page-container">
  <div class="top-container">
      <h1>Under Construction</h1>
  </div>

  <div class="content-container">
    <p class="about-info">
      Hi my name is Mario, I'm a full time IT Software Engineer working on Smarter-IT initiaitives, automation and building scalable, reliable, bug free software at Keysight Technologies.
    </p>
    <p class="about-info">
       I'm a CIS (Computer Information Systems) under-graduate from CSU-Pueblo 🐺 with an emphais in Cybersecurity.
    </p>
    <p class="about-info">
       I am looking to start contributing more to the open-source space, starting new personal projects (hacker status), build and lead a business (aspiring entrepreneur) and growing both in my technical and business confidence. 
    </p>
  </div>
  
  <div class="bottom-container">
    <section class="contact-info">
      Please feel free to reach out to me via email if you would like to collaborate on a project or if you have any questions and need some consultative work. If not go ahead and scroll to the bottom and give the Twitter a follow or reach out to me via the social sites below.
    </section>
    <footer class="footer">
      <a href="https://github.com/maczamora" target="_blank" rel="noopener"><font-awesome :icon="['fab', 'github']"/></a>
      <a href="https://twitter.com/Mario_Zamora_Co" target="_blank" rel="noopener"><font-awesome :icon="['fab', 'twitter']" width="10"/></a>
    </footer>
  </div>
</div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Mario Zamora'
  }
}

</script>

<style>

.top-container{
  text-align: center;
}

.about-info {
  text-align: center;
}

.contact-info{
  text-align: center;

}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  margin-right: 1rem;
  margin-bottom: 5rem;
}

.footer a { 
  color: black;
  font-size: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 5rem;
}

</style>
