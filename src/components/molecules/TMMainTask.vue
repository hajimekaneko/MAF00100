<template> 
  <div class="board-main ">
    <TMMainTMP 
    v-bind:name="Task_name"
    @decompress="decompress($event, Task_name)"
    />
    {{Task_show_list}}
    <ul v-show="Task_show_list" class="row">
      <li class="col-12 "
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
  name: 'TMMainTask',

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
    },
    Task_show_list: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    // `click`イベントを発行
    decompress (decompressed, Task_name) {
      // console.log(decompressed)
      // console.log(Task_name)
      this.$emit('decompress', Task_name)
      // this.$emit('decompress', decompressed)
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
