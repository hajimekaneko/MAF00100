<template>
    <main class="row">
      <div class="col-1 nav-view">
      <TMNavigation @logout="handleLogout" />
            
      </div>
       <div :class="[addContent ? 'col-1' : 'col-2']">
      </div>
      <div class="board-view"
      :class="[addContent ? 'col-5' : 'col-6']">

      <TMMainView 
      :task_groups="task_groups"
      @taskgroup_addTask="taskgroup_addTask($event)"
      />
      <TMIconAdd @addContent="addTaskGroup()" />


      <p
        v-if="progress"
        class="progress"
      >
        {{ message }}
      </p>
      {{TaskGroup_index}}
      <!-- タスク詳細モーダル表示用プレースホルダ -->
      <router-view />
      </div>
      <div class="col-4 aaa"
      v-if="addContent">
      <TMAddTaskView :TaskGroup_index=TaskGroup_index />

      </div>
    </main>
</template>

<script>
// import api from "@/services/api"; //apiに統合する

import { mapState } from 'vuex'
import TMNavigation from '@/components/molecules/TMNavigation.vue'
import TMMainView from '@/components/organisms/TMMainView.vue'
import TMAddTaskView from '@/components/organisms/TMAddTaskView.vue'
import TMIconAdd from '@/components/atoms/TMIconAdd.vue'

export default {
  name: 'TMMainPage',

  components: {
    TMIconAdd,
    TMMainView,
    TMNavigation,
    TMAddTaskView
  },

  data () {
    return {
      progress: false,
      message: '',
      addContent: false,
      TaskGroup_index:'',
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
    taskgroup_addTask(TaskGroup_index){
      this.addContent = !this.addContent
      this.TaskGroup_index = TaskGroup_index
      console.log(TaskGroup_index)
    },

    resetProgress () {
      this.progress = false
      this.message = ''
    },
    addTaskGroup () {
      let UserId
      // let list = new Array()
      UserId = this.$store.state.board.lists[0].User
      console.log(UserId)
      this.$store.dispatch('addtaskgroup', UserId)
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

.aaa{
  border: medium solid black;
  background-color: #f1f1f1;
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
