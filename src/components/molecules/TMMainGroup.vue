<template> 
  <div class="board-main ">
    <TMMainTMP v-bind:name="TaskGroup_name"/>

    <ul class="row ">
      <li class="col-12"
        v-for="task in tasks"
        :key="task.TaskId"
      >
      <TMMainTask v-bind:lists="task.List"  v-bind:Task_name="task.Task_name"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TMMainTMP from '@/components/molecules/TMMainTMP.vue'
import TMMainTask from '@/components/molecules/TMMainTask.vue'

export default {
  name: 'TMMainView',

  components: {
    TMMainTMP,
    TMMainTask
  },

  props: {
    tasks: {
      type: Array,
      required: true
    },
    TaskGroup_name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.col{
  padding:0px
}
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
