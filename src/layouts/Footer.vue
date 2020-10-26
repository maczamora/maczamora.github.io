<template>
  <div class="layout">
    <footer class="footer">
      <div class="footer-section">
        <b-container class=footer-copypright>
            <b-row>
                <b-col>
                    <p>&copy; 2020, Mario Zamora, Powered by <a href="https://gridsome.org/">Gridsome v0.7.21</a></p>
                </b-col>
            </b-row>
        </b-container>
      </div>
    </footer>
    <slot/>
  </div>
</template>


<style>

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  position: absolute;
  bottom: 0;
} 

</style>