<template> 
  <div class="board-main ">
    <ul class="row">
      <li class="col-12"
        v-for="task_group in task_groups"
        :key="task_group.TaskGroupId"
      >
      <TMMainGroup
      :tasks="task_group.Task" 
      :TaskGroup_name="task_group.TaskGroup_name" 
      :TaskGroup_show_task="task_group.TaskGroup_show_task"
      @taskgroup_decompress="taskgroup_decompress(task_group)"
      />
      
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
  },
  methods: {
    // `click`イベントを発行
    taskgroup_decompress (task_group) {
      console.log(task_group.TaskGroup_show_task)
      task_group.TaskGroup_show_task = !task_group.TaskGroup_show_task
      console.log(task_group.TaskGroup_show_task)
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
