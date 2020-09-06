<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Welcome to the Cyber Cowboy blog</h1>

    <p class="blog-info">
      The Cyber Cowboy Blog embodies the same values and work ethic described by the Professional Bull Riding Association - Be Cowboy.
    </p>

    <p class="blog-info">
      My name is Mario, and I'm the Cyber Cowboy. I welcome you to the Cyber Cowboy Blog and hope you enjoy the content that I post.

      I've never been extroverted to deliver external content to the Internet and I'm not the quickest to get code right out the door to my Github profile.
    </p>
      
    <p class="blog-info">
      I am passionate about Technology, Cybersecurity and Coding and that's why I decided to deliver this blog in a format that could enhance my skills and teach the world the ins and outs of the digital and cyber landscape. 

      I look forward to each of you reading my content and hope you enjoy what you find. 
    </p>
      
    <p class="blog-info">
      Cheers! 
    </p>

    <p class="blog-info">
      Cyber Cowboy 
    </p>
      

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Cyber Cowboy'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.blog-info {
  text-align: center;
}
</style>
