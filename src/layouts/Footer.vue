<template>
  <div class="footer-layout">
    <footer class="footer">
        <b-container class=footer-copypright>
            <b-row>
                <b-col>
                    <p class=copyright-text>&copy; 2020, Counter Comms LLC. Powered by <a href="https://gridsome.org/">Gridsome v0.7.23</a></p>
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
  color: #7435F2;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 125px;
  text-align: center;
  background-color: #ACBCBD;
} 

</style>