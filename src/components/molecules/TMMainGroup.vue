<template> 
  <div class="board-main ">
    <TMMainTMP :name="TaskGroup_name"/>
{{TaskGroup_show_task}}
    <ul v-show="TaskGroup_show_task" class="row ">
      <li class="col-12"
        v-for="task in tasks"
        :key="task.TaskId"
      >
      <TMMainTask 
      :lists="task.List"  
      :Task_name="task.Task_name" 
      :Task_show_list="task.Task_show_list"
      @decompress="decompress(task)"
      />
      </li>
    </ul>
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
    }
  },
  methods: {
    // `click`イベントを発行
    decompress (task) {
      console.log(task.Task_show_list)
      task.Task_show_list = !task.Task_show_list
      console.log(task.Task_show_list)
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
