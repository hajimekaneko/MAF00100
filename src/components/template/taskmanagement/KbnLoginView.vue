<template>
  <div class="login-view">
      <div class="links">
  <a
    v-if="isAuth"
    @click="signOut"
    class="button--grey">signOut</a>
  <a
    v-else
    @click="signIn"
    class="button--green">signIn</a>
</div>
    <h1>Kanban App Login</h1>
    <!-- <KbnLoginForm :onlogin="handleLogin" /> -->
  </div>
</template>

<script>
// import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'
  // import { observable} from 'vue'
  // import { reactive } from "@vue/composition-api";
  // import { initializeApp } from 'firebase/app';
  import { signOut, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'TaskManagement',

  components: {
    // KbnLoginForm
  },
  asyncData () {
    return {
      isAuth: false,
    }
  },
  mounted: function () {
    onAuthStateChanged((user) => this.isAuth = !!user)
  },  

  methods: {
    signIn: function () {
      const provider = new GoogleAuthProvider()
      signInWithRedirect(provider)
    },
    signOut: function () {
      signOut()
    },
  //   async handleSignIn () {
  //     try {
  //       console.log(this.$gAuth)
  //       const googleUser = await this.$gAuth.signIn()
        
  //       if (!googleUser) {
  //         return null
  //       }
  //       console.log(googleUser.getAuthResponse())
  //       this.$store.commit('setUserInfo', googleUser.getAuthResponse())
  //     } catch (error) {
  //       console.error(error)
  //       return null
  //     }
  //   },
  //   async handleSignOut () {
  //     try {
  //       await this.$gAuth.signOut()
  //         this.$store.commit('setUserInfo', {})
  //       window.location.href = '/'
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   },
  //   handleLogin (authInfo) {
  //     return this.$store.dispatch('login', authInfo)
  //       .then(() => {
  //         this.$router.push({ path: '/taskmanagement/' })
  //       })
  //       .catch(
  //         err => this.throwReject(err)
  //         )
  //   },
  //   throwReject (err) { 
  //     return Promise.reject(err) 
  //     }
  }
}
</script>

<style scoped>
.login-view{
  padding-top: 10vh;
  height:80vh;
}


.login-view {
  width: 320px;
  margin: auto;
}
</style>
