<template>
    <main class="row">
      <div class="col-1 nav-view">
      <TMNavigation @logout="handleLogout" />
            <p
        v-if="progress"
        class="progress"
      >
        {{ message }}
      </p>
      </div>
       <div class="col-2">
      </div>
      <div class="col-6 board-view">

      <TMMainView :task_groups="task_groups" />
      <!-- タスク詳細モーダル表示用プレースホルダ -->
      <router-view />
      </div>
    </main>
</template>

<script>
// import api from "@/services/api"; //apiに統合する

import { mapState } from 'vuex'
import TMNavigation from '@/components/molecules/TMNavigation.vue'
import TMMainView from '@/components/organisms/TMMainView.vue'

export default {
  name: 'TMMainPage',

  components: {
    TMMainView,
    TMNavigation
  },

  data () {
    return {
      progress: false,
      message: ''

    }
  },

  computed: mapState({
    task_groups: state => state.board.lists
  }),

  created () {
    this.loadLists()
  },

  methods: {
    setProgress (message) {
      this.progress = true
      this.message = message
    },

    resetProgress () {
      this.progress = false
      this.message = ''
    },

    loadLists () {
      this.setProgress('読み込み中...')
      this.$store.dispatch('fetchLists')
        .catch(err => Promise.reject(err))
        .then(() => {
          this.resetProgress()
        })
    },

    handleLogout () {
      this.setProgress('ログオフ中...')

      return this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({ path: '/taskmanagement/login' })
        })
        .catch(err => Promise.reject(err))
        .then(() => {
          this.resetProgress()
        })
    }
  }
}
</script>

<style scoped>

main{

}
.board-view{
  border: medium solid black;
  background-color: #f1f1f1;
  padding-top: 1vh;
  height: 99vh;
}

.nav-view {
  height: 100vh;
  background-color: #D3B48C;
  /* border: medium solid black; */
}


.progress {
  margin: auto;
}
</style>
