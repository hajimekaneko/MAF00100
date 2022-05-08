<template>
<div>
  <div v-if="!edit_content_flg"  class="task-list row d-flex align-items-center justify-content-end">
    <slot name="top">
    </slot>
    <div class="col" @click="edit_content_name">{{ content_name }}</div>
    <slot name="end">
    </slot>
  </div>
  <input v-else ref="input" type="text" class="form-control" :value="content_name"
    @keyup.enter="edited_content_name($event)"
    @blur="edited_content_name($event)" v-focus> 
</div>

</template>

<script>


export default {
  name: 'CMToInputFiled',

  components: {

  },
  directives: {
    focus: {
        // ディレクティブ定義
        inserted: function (el) {
            el.focus();
        }
    }
  },
  props: {
    content_name: {
      type: String,
      required: true
    },
    edit_content_flg: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      showContent: false
    }
  },

  computed: {

  },

  methods: {
    edit_content_name() {
      this.$emit('edit_content_name')
    },
    edited_content_name(e) {
      var newcontentname
      newcontentname = e.target.value
      this.$emit('edited_content_name',newcontentname)
    },
  }
}
</script>

<style scoped>
.col, .col-1{
  padding:0px
}
.task-list.row {
  margin:0px
}

</style>
