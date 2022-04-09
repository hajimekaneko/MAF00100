<template> 
  <div class="board-main ">
    <ul class="row board-tasks">
      <li class="col-12"
        v-for="task in task_group.Task"
        :key="task.TaskId"
      >
      <!-- <TMMainGroup v-bind="list" :list="list" /> -->
      <!-- <TMMainGroup v-bind="list" /> -->
      <TMMainGroup v-bind="task"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TMMainGroup from '@/components/organisms/TMMainGroup.vue'

export default {
  name: 'TMMainView',

  components: {
    TMMainGroup
  },

  props: {
    task_group: {
      type: Array,
      default: () => []
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
  min-height: 65vh;
  list-style-type: none;
  margin: 16px;
  padding: 0;
}
ul li {
  width: 192px;
  margin-right: 8px;
  border: thin solid black;
  border-radius: 0.5em;
}
</style>
