<template> 
  <div class="board-main ">
    <ul class="row board-tasks">
      <li class="col-12"
        v-for="list in lists"
        :key="list.ListId"
      >
      <!-- <TMMainList v-bind="list" :list="list" /> -->
      <!-- <TMMainList v-bind="list" /> -->
      <TMMainList v-bind="list" v-bind:TaskGroup_name="list.Task.TaskGroup.TaskGroup_name" v-bind:Task_name="list.Task.Task_name"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TMMainList from '@/components/organisms/TMMainList.vue'

export default {
  name: 'TMMainView',

  components: {
    TMMainList
  },

  props: {
    lists: {
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
