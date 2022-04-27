<template> 
  <div class="group-main row">   
    <div class="col px-2">
    <TMMainTMP 
    :name="TaskGroup_name"
    @decompress="taskgroup_decompress"
    @addContent="taskgroup_addTask"
    />

    <ul v-show="TaskGroup_show_task" class="row mx-0 my-2">
      <li class="col-12  my-1"
        v-for="(task, Task_index) in tasks"
        :key="task.TaskId"
      >
      <TMMainTask 
      :lists="task.List"  
      :Task_name="task.Task_name" 
      :Task_show_list="task.Task_show_list"
      :Task_index="Task_index"
      :TaskGroup_index="TaskGroup_index"
      @task_decompress="task_decompress(Task_index, TaskGroup_index)"
      />
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import TMMainTMP from '@/components/molecules/TMMainTMP.vue'
import TMMainTask from '@/components/molecules/TMMainTask.vue'

export default {
  name: 'TMMainGroup',

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
    },
    TaskGroup_show_task: {
      type: Boolean,
      required: true
    },
    TaskGroup_index: {
      type: Number,
      required: true
    }
  },
  methods: {
    // `click`イベントを発行
    task_decompress (Task_index, TaskGroup_index) {
      console.log(Task_index)
      console.log(TaskGroup_index)

      this.$store.dispatch('showlists',{Task_index,TaskGroup_index})
    },
    taskgroup_decompress () {
      this.$emit('taskgroup_decompress')
    },
    taskgroup_addTask(){
      this.$emit('taskgroup_addTask')
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
