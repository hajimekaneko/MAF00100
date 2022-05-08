<template>
<div>
  <CMToInputFiled 
  :content_name="List_name"
  :edit_content_flg="List_edit_listname_flg"
  @edit_content_name="edit_list_name"
  @edited_content_name="edited_list_name($event)"
  >
    <template slot="top">
      <TMIconStatus :status=List_Status class="status" @changeStatus="changeStatus($event)" />
    </template>
    <template slot="end">
      
      <TMIconDelete @deleteContent="openModal" />
      <TMListDetail @changeStatus=changeStatus($event) 
      :List_name="List_name" 
      :List_Status="List_Status"
      :List_Memo="List_Memo"
      />
    </template>
   </CMToInputFiled>
  <TMModalWindowsDelete 
  :List_name="List_name" 
  v-show="showContent" 
  @closeModal="closeModal"
  @deleteContent="deleteContent">
  </TMModalWindowsDelete>
</div>

</template>

<script>
import TMIconStatus from '@/components/atoms/TMIconStatus.vue'
import TMIconDelete from '@/components/atoms/TMIconDelete.vue'
import TMListDetail from '@/components/molecules/TMListDetail.vue'
import TMModalWindowsDelete from '@/components/organisms/TMModalWindowsDelete.vue'
import CMToInputFiled from '@/components/molecules/CMToInputFiled.vue'




export default {
  name: 'TMMainList',

  components: {
    TMIconStatus,
    TMIconDelete,
    TMListDetail,
    TMModalWindowsDelete,
    CMToInputFiled

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
    List_Status: {
      type: Number,
      required: true
    },
    List_Index: {
      type: Number,
      required: true
    }, 
    List_name: {
      type: String,
      required: true
    },
    List_edit_listname_flg: {
      type: Boolean,
      required: true
    },
    List_Memo: {
      type: String,
      required: false
    },
  },

  data () {
    return {
      shown: false,
      showContent: false
    }
  },

  computed: {

  },

  methods: {
    edit_list_name() {
      this.$emit('edit_list_name')
    },
    changeStatus(event) {
      this.$emit('changeStatus', event )
    },
    edited_list_name(newlistname) {
      this.$emit('edited_list_name',newlistname)
    },
    closeModal: function(){
      this.showContent = false
    },
    openModal(){
      // confirm('削除してよろしいですか?')
      this.showContent = true
    },
    deleteContent(){
      this.$emit('deleteContent')
    },
    // handleRemove ({ taskId, list }) {
    //   return this.$store.dispatch('removeTask', { taskId, list })
    //     .catch(err => Promise.reject(err))
    // },

    // handleChange ({ added, removed }) {
    //   if (added) {
    //     return this.$store.dispatch('moveToTask', {
    //       taskId: added.element.taskId,
    //       ListId: this.ListId,
    //       tolist: this.list
    //     }).catch(err => Promise.reject(err))
    //   } else if (removed) {
    //     return this.$store.dispatch('moveTaskFrom', {
    //       taskId: removed.element.taskId,
    //       ListId: this.ListId
    //     }).catch(err => Promise.reject(err))
    //   }
    // },

    // handleEnd () {
    //   if (this.canMove) {
    //     return this.$store.dispatch('performTaskMoving')
    //       .catch(err => Promise.reject(err))
    //   }
    // }
  }
}
</script>

<style scoped>
.col, .col-1 {
  padding:0px
}
.status{
  padding:1px 5px 1px 8px 
}
.list{
  padding:1px 0px
}
.tm-button {
  border: none;
  margin-right: 0px;
  padding-left: 0px;
}
#overlay{
  /*要素を重ねた時の順番*/
  z-index:1;
  /*画面全体を覆う設定*/
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  /*画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;
}
#content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}
.modal_header, .modal_footer{
  text-align: right;
}
</style>
