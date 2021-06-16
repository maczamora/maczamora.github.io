<template>

  <div class="header-layout">
    <header class="header">
      <div>
        <g-image class="logo" src="~/Capshure-Sec-v1.6.png" alt="Responsive Logo"/>
      </div>
      <strong>
        <g-link class="number" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <!-- <b-image class="logo" src="~/Capshure-Sec-v1.6.png" fluid alt="Responsive Logo"></b-image> -->
      <b-nav pills class="nav">
        <b-nav-item active  class="nav__link" to="/">Home</b-nav-item>
        <b-nav-item active  class="nav__link" to="/about/">About US</b-nav-item>
        <b-nav-item active  class="nav__link" to="/services/">Services</b-nav-item>
        <b-nav-item active  class="nav__link" to="/contact/">Contact</b-nav-item >
      </b-nav>
    </header>
    <slot/>
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
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  height: 125px;
  background-color: #ACBCBD;
} 

.nav{
  position: absolute; top: 45px; right: 250px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  display: block; 
}

.nav__link {
  margin-left: 10px;
  margin-right: 10px;
}

.number {
  position: absolute; top: 55px; right: 700px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  display: block; 
  color: #7435F2
}

.logo{
position: absolute; top: 0px; left: 250px;
background-repeat: no-repeat;
background-size: contain;
margin: 0 auto;
display: block; 
width: 130px;
height: 125px; 
}


</style>
