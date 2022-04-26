<template> 
  <div class="board-main row">
    <div class="col">
    <ul class="row">
      <li class="col-12 my-2"
        v-for="(task_group, TaskGroup_index) in task_groups"
        :key="task_group.TaskGroupId"
      >
      <TMMainGroup
      :tasks="task_group.Task" 
      :TaskGroup_name="task_group.TaskGroup_name" 
      :TaskGroup_show_task="task_group.TaskGroup_show_task"
      :TaskGroup_index="TaskGroup_index"
      @taskgroup_decompress="taskgroup_decompress(TaskGroup_index)"
      @taskgroup_addTask="taskgroup_addTask(task_group.TaskGroupId, task_group.Task)"
      />
      
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import TMMainGroup from '@/components/molecules/TMMainGroup.vue'

export default {
  name: 'TMMainView',

  components: {
    TMMainGroup,
  },

  // data: store.state,

  // data () {
  //   return {
  //     store.state
  //   }
  // },

  props: {
    task_groups: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // `click`イベントを発行
    taskgroup_decompress (TaskGroup_index) {
      this.$store.dispatch('showtasks',TaskGroup_index)
    },
    taskgroup_addTask(TaskGroupId, Task) {
      this.$emit('taskgroup_addTask')
      this.$store.dispatch('addTask', {TaskGroupId, Task})
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
