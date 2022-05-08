<template> 
  <div class="">
    <div class="example-modal-window">
    <TMIconDetail @openDetail="openModal" />
    </div>  
    <CMModalWindows v-show="showContent" @closeModal="closeModal">
      <template slot="header">
        <div class="modal_header row">
          <TMIconStatus :status=List_Status class="List_Status" @changeStatus="changeStatus" />
          <input ref="input_listname" type="text" class="modal_listname form-control" :value="List_name"> 
          <div class="fix_btns d-flex">
            <fa-icon class="btn" @click="changeStatus(0)" :icon="['far', 'square']" size="lg"></fa-icon>
            <fa-icon class="btn" @click="changeStatus(1)" :icon="['far', 'square-minus']" size="lg"></fa-icon>
            <fa-icon class="btn" @click="changeStatus(2)" :icon="['far', 'square-check']" size="lg"></fa-icon>
            <fa-icon class="btn" @click="closeModal" icon="xmark" size="lg"></fa-icon>
          </div>
        </div> 
      </template>
      <div class="modal_main row">
        <div class="memo col-auto d-flex align-items-center">
          Memo：
        </div>
        <div class="col list">
          <input ref="modal_memo" type="text" class="form-control" :value="List_Memo"> 
        </div>
      </div>
  </CMModalWindows>
  </div>
</template>

<script>
import TMIconStatus from '@/components/atoms/TMIconStatus.vue'
import TMIconDetail from '@/components/atoms/TMIconDetail.vue'
import CMModalWindows from '@/components/organisms/CMModalWindows.vue'

export default {
  name: 'TMListDetail',

  components: { 
    CMModalWindows,
    TMIconStatus,
    TMIconDetail
  },
  data() {
    return {
      message: '',
      showContent: false
    }
  },
  props: {
    List_name: {
      type: String,
      required: true
    },
    List_Status: {
      type: Number,
      required: true
    },
    List_Memo: {
      type: String,
      required: false
    },
  },
  methods: {
    openModal: function(){
      this.showContent = true
      this.$nextTick(() => this.$refs.modal_memo.focus())      
    },
    closeModal: function(){
      this.showContent = false
    },
    changeStatus(status) {
      var newmemo
      newmemo = this.$refs.modal_memo.value
      this.$emit('changeStatus',{status, newmemo})
      // 上のボタンでのみクローズするように変更
      if(status!=99){
        this.closeModal()
      }
    }
  },
}
</script>

<style scoped>
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
.List_Status, .memo {
  padding-left:0px;
  padding-right: 5px

}
.status{
  padding:1px 5px 1px 8px 
}
.list{
  padding:1px 0px
}
.btn{
  padding:5px
}
.tm-button {
  border: none;
  margin-right: 5px;
  padding-left: 5px;
}
.modal_listname{
  width:60%;
  height:1.5em;
}
.modal_header{
  margin:0px;  
}
.modal_main{
  margin:0px;
  padding-top:10px

}
.fix_btns{
margin-left: auto
}
</style>

