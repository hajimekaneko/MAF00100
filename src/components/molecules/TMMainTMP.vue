<template>

  <div class="task-list-header ">
  <CMToInputFiled 
  :content_name="name"
  :edit_content_flg="edit_content_flg"
  @edit_content_name="edit_content_name"
  @edited_content_name="edited_content_name($event)"
  >
    <template slot="top">
      <TMIconStatus :status=content_status class="status" @changeStatus="changeStatus($event)" />
    </template>
    <template slot="end">
      <div class="btns">
        <TMIconDetail @openDetail="openDetail" />
        <TMIconAdd @addContent="addContent" />
        <TMIconBar @decompress="decompress" />    
      </div>
    </template>
   </CMToInputFiled>
  </div>
</template>

<script>
// import KbnButton from '@/components/atoms/KbnButton.vue'
// import KbnIcon from '@/components/atoms/KbnIcon.vue'
import TMIconStatus from '@/components/atoms/TMIconStatus.vue'
import TMIconBar from '@/components/atoms/TMIconBar.vue'
import TMIconAdd from '@/components/atoms/TMIconAdd.vue'
import TMIconDetail from '@/components/atoms/TMIconDetail.vue'
import CMToInputFiled from '@/components/molecules/CMToInputFiled.vue'


export default {
  name: 'TMMainTMP',

  components: {
    // KbnButton,
    // KbnIcon,
    TMIconStatus,
    TMIconAdd,
    TMIconBar,
    TMIconDetail,
    CMToInputFiled
  },

  props: {
    name: {
      type: String,
      required: true
    },
    edit_content_flg: {
      type: Boolean,
      required: true
    },
    content_status: {
      type: Number,
      required: true
    },
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
    edit_content_name() {
      this.$emit('edit_content_name')
    },
    changeStatus(event) {
      this.$emit('changeStatus', event )
    },
    edited_content_name(newcontentname) {
      this.$emit('edited_content_name',newcontentname)
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
</style>
