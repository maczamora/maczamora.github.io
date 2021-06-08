<template>

  <div class="header-layout">
    <header class="header">
      <div>
        <g-image class="logo" src="~/Capshure-Sec-v1.6.png" alt="Responsive Logo"/>
      </div>
      <strong>
        <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
      </strong>
      <b-image class="logo" src="~/Capshure-Sec-v1.6.png" fluid alt="Responsive Logo"></b-image>
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
  align-items: center;
    max-width: 100%;
  /* margin-bottom: 20px; */
  height: 80px;
  background-color: #ACBCBD;
} 

.nav__link {
  margin-left: 10px;
  margin-right: 10px;
  color: #7435F2;
}

.logo{
float: left;
display: block; 
margin-left: auto; 
width:250px;
height: 50px;
height: auto; 
}


</style>
