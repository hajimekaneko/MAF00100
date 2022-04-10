<template> 
  <div class="board-main ">
    <ul class="row">
      <li class="col-12"
        v-for="task_group in task_groups"
        :key="task_group.TaskGroupId"
      >
      <TMMainGroup  v-bind:tasks="task_group.Task" v-bind:TaskGroup_name="task_group.TaskGroup_name"/>
      
      </li>
    </ul>
  </div>
</template>

<script>
import TMMainGroup from '@/components/molecules/TMMainGroup.vue'

export default {
  name: 'TMMainView',

  components: {
    TMMainGroup,
  },

  props: {
    task_groups: {
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
