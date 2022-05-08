<template> 
  <div class="container">
    <TMDetailHeader :TaskGroup="TaskGroup" /> 
    <TMDetailMainTasks :TaskGroup="TaskGroup" /> 
  </div>
</template>

<script>
import TMDetailHeader from '@/components/molecules/TMDetailHeader.vue'
import TMDetailMainTasks from '@/components/molecules/TMDetailMainTasks.vue'

export default {
  name: 'TMAddTaskView',

  components: {
    TMDetailHeader,
    TMDetailMainTasks
  },
  data() {
    return {
      message: '',
      TaskGroup:[],
    }
  },
  props: {
    TaskGroup_index: {
      type: Number,
      required: true
    }
  },
  created: function () {
    this.TaskGroup = this.$store.state.board.lists[this.TaskGroup_index]
    console.log(this.TaskGroup)
  },
  methods: {
  },

}
</script>

<style scoped>
ul {
  display: flex;
  /* min-height: 5vh; */
  list-style-type: none;
  margin: 16px;
  padding: 0;
}
ul li {
  width: 192px;
  /* margin-right: 8px; */
  border: thin solid black;
  border-radius: 0.5em;
}

</style>

