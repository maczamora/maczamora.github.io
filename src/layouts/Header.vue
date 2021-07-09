<template>
  <div class="header-layout">
    <slot>
    <b-navbar class="header" toggleable="md" >
       <b-navbar-brand href="/">
       <img class="logo" src="https://i.ibb.co/pnqYJVk/Capshure-Sec-v1-6.png" alt="Logo">
       </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse"  is-nav>
          <b-navbar-nav class="ml-auto">
              <!-- <strong><g-link class="number" to="/">{{ $static.metadata.siteName }}</g-link></strong> -->
              <strong><b-nav-item active  class="nav__link" to="/">Home</b-nav-item></strong>
              <strong><b-nav-item active  class="nav__link" to="/about/">About US</b-nav-item></strong>
              <strong><b-nav-item active  class="nav__link" to="/services/">Services</b-nav-item></strong>
              <strong><b-nav-item active  class="nav__link" to="/contact/">Contact</b-nav-item></strong>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </slot>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.header {
  background-color: #ACBCBD;
  color: #2B2129;
} 

/* .nav{
  position: absolute; top: 45px; right: 250px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  display: block; 
} */

/* .nav__link {
  margin-left: 10px;
  margin-right: 10px;
} */

/* .number {
  position: absolute; top: 55px; right: 700px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  display: block; 
  color: #7435F2
} */

.logo{ 
width: 130px;
height: 130px; 
}


</style>
