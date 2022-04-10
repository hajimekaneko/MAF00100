<template> 
  <div class="board-main ">
    <TMMainTMP v-bind:name="Task_name"/>
    <ul class="row board-tasks">
      <li class="col-12"
        v-for="list in lists"
        :key="list.LitId"
      >
      <TMMainList  v-bind:List_name="list.List_name"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TMMainTMP from '@/components/molecules/TMMainTMP.vue'
import TMMainList from '@/components/molecules/TMMainList.vue'

export default {
  name: 'TMMainView',

  components: {
    TMMainTMP,
    TMMainList
  },

  props: {
    lists: {
      type: Array,
      required: true
    },
    Task_name: {
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
