<template>
  <div class="login-view">
    <h1>Kanban App Login</h1>
    <KbnLoginForm :onlogin="handleLogin" />
  </div>
</template>

<script>
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'

export default {
  name: 'TaskManagement',

  components: {
    KbnLoginForm
  },

  methods: {
    handleLogin (authInfo) {
      return this.$store.dispatch('login', authInfo)
        .then(() => {
          this.$router.push({ path: '/taskmanagement/' })
        })
        .catch(
          err => this.throwReject(err)
          )
    },
    throwReject (err) { 
      return Promise.reject(err) 
      }
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
