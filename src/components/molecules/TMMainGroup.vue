<template> 
  <div class="group-main row">   
    <div class="col px-2">
    <TMMainTMP 
    :name="TaskGroup_name"
    :edit_content_flg="TaskGroup_edit_taskgroupname_flg"
    :content_status="TaskGroup_status"
    @decompress="taskgroup_decompress"
    @addContent="taskgroup_addTask"
    @edit_content_name="edit_taskgroup_name(TaskGroup_index)"
    @changeStatus="changeTaskGroupStatus($event)"
    
    />

    <ul v-show="TaskGroup_show_task" class="row mx-2 my-2">
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
      :Task_edit_taskname_flg="task.Task_edit_taskname_flg"
      :Task_status="task.Task_status"
      @task_decompress="task_decompress(Task_index, TaskGroup_index)"
      @changeTaskStatus="changeTaskStatus($event, task.TaskId, task.Task_status)"
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
    },
    TaskGroup_status: {
      type: Number,
      required: true
    },
    TaskGroup_edit_taskgroupname_flg: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    // `click`イベントを発行
    task_decompress (Task_index, TaskGroup_index) {
      this.$store.dispatch('showlists',{Task_index,TaskGroup_index})
    },
    taskgroup_decompress () {
      this.$emit('taskgroup_decompress')
    },
    taskgroup_addTask(){
      this.$emit('taskgroup_addTask')
    },
    edit_taskgroup_name(TaskGroup_index){
      console.log("edit_content_name")
      this.$store.dispatch('edittaskgroupname',{TaskGroup_index})
    },
    changeTaskStatus(event, TaskId, Task_Status){
      var status
      status = event.status
      this.$store.dispatch('changetaskstatus',{status, TaskId, Task_Status})
    },
    changeTaskGroupStatus(event) {
      this.$emit('changeTaskGroupStatus', event )
    },


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
