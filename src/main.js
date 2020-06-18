import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuetify from "vuetify";
import router from "./router";
import store from './store';
import * as fb from 'firebase';
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  created(){
    fb.initializeApp(
        {
          apiKey: "AIzaSyDohM2v_yPAW4Pb5Wvkr3R80x1kr9fwI5M",
          authDomain: "ads-project-91d2a.firebaseapp.com",
          databaseURL: "https://ads-project-91d2a.firebaseio.com",
          projectId: "ads-project-91d2a",
          storageBucket: "ads-project-91d2a.appspot.com",
          messagingSenderId: "588363751898",
          appId: "1:588363751898:web:17b392bac9306df38ce0e3"
        }
    )
      fb.auth().onAuthStateChanged(user => {
          if (user){
              this.$store.dispatch('autoLoginUser', user)
          }
      })
      this.$store.dispatch('fetchAds')
  },
  render: h => h(App)
}).$mount('#app')
