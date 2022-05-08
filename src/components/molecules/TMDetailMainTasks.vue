<template>
  <div class="d-flex justify-content-between">
    <ul class="row mx-0 my-2">
      <li class="col-12  my-1"
        v-for="(task, Task_index) in TaskGroup.Task"
        :key="task.TaskId"
      >
      <div class="row">
        <div class="col task-name">
      {{task.Task_name}}
        </div>
      </div>
      <div class="row">
        <div class="col task-description">
          説明：
      {{task.Task_description}}
        </div>
      </div>
      <div class="row">
        <div class="col">
      {{Task_index}}
        </div>
      </div>


      <TMDetailMainLists :lists="task.List"/>



      </li>
    </ul>
     <!-- {{TaskGroup}} -->
    <!-- <div class="title">
      <h2>{{ name }}</h2>
    </div>
    <div class="actions d-flex justify-content-center ">
      <TMIconDetail @openDetail="openDetail" />
      <TMIconAdd @addContent="addContent" />
      <TMIconBar @decompress="decompress" />    

    </div> -->
  </div>
</template>

<script>
import TMDetailMainLists from '@/components/molecules/TMDetailMainLists.vue'
// import KbnIcon from '@/components/atoms/KbnIcon.vue'
// import TMIconBar from '@/components/atoms/TMIconBar.vue'
// import TMIconAdd from '@/components/atoms/TMIconAdd.vue'
// import TMIconDetail from '@/components/atoms/TMIconDetail.vue'

export default {
  name: 'TMDetailMainTasks',

  components: {
    TMDetailMainLists
    // KbnButton,
    // KbnIcon,
    // TMIconAdd,
    // TMIconBar,
    // TMIconDetail
  },

  props: {
    TaskGroup: {
      type: Object,
      required: true
    }
  },
  methods: {
    // `click`イベントを発行
    decompress () {
      this.$emit('decompress')
    },
    addContent() {
      this.$emit('addContent')
    },
    openDetail() {
      // this.$emit('addContent')
    },
  }
}
</script>

<style scoped>
/* .task-list-header {
  margin: 0px, -10px;
  background-color: rgb(225, 225, 225);
  display: flex;
  border-bottom: thin solid black;
} */

h2 {
  margin: 0px;
  padding-left: 8px;
  font-size: 1.0em;
  text-align: left;
}

button {
  cursor: pointer;
}
.tm-button {
  border: none;
  margin-right: 1px;
  padding-left: 1px;
}
.fix_btns{
 padding: 0
}
.btn{
  padding:5px
}
.task-name, .task-description{
  border: thin solid black;
}
</style>
