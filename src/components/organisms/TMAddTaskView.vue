<template> 
  <div class="row">
    <div class="col">
      aaaa
    </div>
  </div>
</template>

<script>
// import TMMainGroup from '@/components/molecules/TMMainGroup.vue'

export default {
  name: 'TMAddTaskView',

  components: { 
  },
  data() {
    return {
      message: '',
    }
  },
  methods: {
  },
  props: {
    // task_groups: {
    //   type: Array,
    //   default: () => []
    // }
  },
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

