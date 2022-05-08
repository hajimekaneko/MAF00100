<template>
  <div class="task-list-header  d-flex justify-content-between">
    <div> 
      {{TaskGroup.TaskGroup_name}}
      ({{TaskGroup.TaskGroup_status.TaskStatus_name}})
    </div>
    <div class="fix_btns d-flex">
      <fa-icon class="btn" @click="changeStatus(0)" :icon="['far', 'square']" size="lg"></fa-icon>
      <fa-icon class="btn" @click="changeStatus(1)" :icon="['far', 'square-minus']" size="lg"></fa-icon>
      <fa-icon class="btn" @click="changeStatus(2)" :icon="['far', 'square-check']" size="lg"></fa-icon>
      <fa-icon class="btn" @click="closeModal" icon="xmark" size="lg"></fa-icon>
    </div>
     <!-- {{TaskGroup}} -->
    <!-- <div class="title">
      <h2>{{ name }}</h2>
    </div>
    <div class="actions d-flex justify-content-center ">
      <TMIconDetail @openDetail="openDetail" />
      <TMIconAdd @addContent="addContent" />
      <TMIconBar @decompress="decompress" />    

    </div> -->
  </div>
</template>

<script>
// import KbnButton from '@/components/atoms/KbnButton.vue'
// import KbnIcon from '@/components/atoms/KbnIcon.vue'
// import TMIconBar from '@/components/atoms/TMIconBar.vue'
// import TMIconAdd from '@/components/atoms/TMIconAdd.vue'
// import TMIconDetail from '@/components/atoms/TMIconDetail.vue'

export default {
  name: 'TMDetailHeader',

  components: {
    // KbnButton,
    // KbnIcon,
    // TMIconAdd,
    // TMIconBar,
    // TMIconDetail
  },

  props: {
    TaskGroup: {
      type: Object,
      required: true
    }
  },
  methods: {
    // `click`イベントを発行
    decompress () {
      this.$emit('decompress')
    },
    addContent() {
      this.$emit('addContent')
    },
    openDetail() {
      // this.$emit('addContent')
    },
  }
}
</script>

<style scoped>
.task-list-header {
  margin: 0px, -10px;
  background-color: rgb(225, 225, 225);
  border-bottom: thin solid black;
}

h2 {
  margin: 0px;
  padding-left: 8px;
  font-size: 1.0em;
  text-align: left;
}

button {
  cursor: pointer;
}
.tm-button {
  border: none;
  margin-right: 1px;
  padding-left: 1px;
}
.fix_btns{
 padding: 0
}
.btn{
  padding:5px
}
</style>
