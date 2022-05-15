import Vue from 'vue'
import TaskManagement from './TaskManagement.vue'
import router from '@/router'
import store from '@/store'
// import gAuth from 'vue-google-oauth2'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


// ...
library.add(fas, far, fab)

Vue.component('fa-icon', FontAwesomeIcon)

/* import Firebase */
// import firebase from 'firebase'
import { initializeApp } from 'firebase/app';

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyD32vSszxnkAO57Tm2i9rf-cVMf8XKYSis',
  authDomain: 'my-project-95530.firebaseapp.com',
  databaseURL: 'https://my-project-95530.firebaseapp.com',
  projectId: 'my-project-95530',
  storageBucket: 'my-project-95530.appspot.com',
  messagingSenderId: '800278616293'
}
initializeApp(config)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(TaskManagement)
}).$mount('#app')

