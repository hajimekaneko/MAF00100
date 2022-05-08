<template>
  <div class="d-flex justify-content-between">
    <ul class="row mx-0 my-2">
      <li class="col-12  my-1"
        v-for="(list) in lists"
        :key="list.List_Id"
      >
      <div class="row">
        <div class="col">
      {{list.List_name}}
        </div>
      </div>

      </li>
    </ul>
  </div>
</template>

<script>
// import KbnButton from '@/components/atoms/KbnButton.vue'
// import KbnIcon from '@/components/atoms/KbnIcon.vue'
// import TMIconBar from '@/components/atoms/TMIconBar.vue'
// import TMIconAdd from '@/components/atoms/TMIconAdd.vue'
// import TMIconDetail from '@/components/atoms/TMIconDetail.vue'

export default {
  name: 'TMDetailMainLists',

  components: {
    // KbnButton,
    // KbnIcon,
    // TMIconAdd,
    // TMIconBar,
    // TMIconDetail
  },

  props: {
    lists: {
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
/* .task-list-header {
  margin: 0px, -10px;
  background-color: rgb(225, 225, 225);
  display: flex;
  border-bottom: thin solid black;
} */

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
.task-name, .task-description{
  border: thin solid black;
}
</style>
