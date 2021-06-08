// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import HeaderLayout from '~/layouts/Header.vue'
import FooterLayout from '~/layouts/Footer.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BEmbed } from 'bootstrap-vue'



config.autoAddCss = false;
library.add(faGithub, faTwitter)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('header-layout', HeaderLayout)
  Vue.component('footer-layout', FooterLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.use(BootstrapVue)
  Vue.component('b-embed', BEmbed)
}
