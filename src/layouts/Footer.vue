<template>
  <div class="footer-layout">
    <footer class="footer">
        <b-container class=footer-copypright>
            <b-row>
                <b-col>
                    <p class=copyright-text>&copy; 2020, Capshure, Powered by <a href="https://gridsome.org/">Gridsome v0.7.23</a></p>
                </b-col>
            </b-row>
        </b-container>
    </footer>
    <slot/>
  </div>
</template>


<style>

.footer-layout {
  max-width: 100%; 

}
.copyright-text{
  color: #131200;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  text-align: center;
  background-color: #823038;
} 

</style>