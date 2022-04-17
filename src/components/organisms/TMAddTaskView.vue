<template> 
  <div class="row">
    <div class="col">
    <div class="row">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>
    </div>
  </div>
</template>

<script>
// import TMMainGroup from '@/components/molecules/TMMainGroup.vue'

export default {
  name: 'TMMainView',

  components: {
    // TMMainGroup,
  },

  // data: store.state,

  // data () {
  //   return {
  //     store.state
  //   }
  // },

  props: {
    // task_groups: {
    //   type: Array,
    //   default: () => []
    // }
  },
  methods: {
  //   // `click`イベントを発行
  //   taskgroup_decompress (TaskGroup_index) {
  //     this.$store.dispatch('showtasks',TaskGroup_index)
  //   },
  //   taskgroup_addTask(TaskGroupId, Task) {
  //     this.$emit('taskgroup_addTask')
  //     this.$store.dispatch('addTask', {TaskGroupId, Task})
  //   }
  }
}
</script>

<style scoped>
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
