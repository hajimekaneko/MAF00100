<template> 
  <div class="">
    <div class="example-modal-window">
      <button class="tm-button-text" @click="openModal">
         <fa-icon icon="file-pen" ></fa-icon>
      </button>
    </div>  
    <TMModalWindows v-show="showContent" @closeModal="closeModal">
      <template slot="header">
        <div class="modal_header">
          <fa-icon class="btn" @click="changeStatus(0)" :icon="['far', 'square']" size="lg"></fa-icon>
          <fa-icon class="btn" @click="changeStatus(1)" :icon="['far', 'square-minus']" size="lg"></fa-icon>
          <fa-icon class="btn" @click="changeStatus(2)" :icon="['far', 'square-check']" size="lg"></fa-icon>
          <fa-icon class="btn" @click="closeModal" icon="xmark" size="lg"></fa-icon>
        </div> 
      </template>
      <TMIconStatus :status=List_Status class="col-1, status" @changeStatus="changeStatus" />
      <div class="col list">
          {{List_name}}
      </div>
    </TMModalWindows>
  </div>
</template>

<script>
import TMIconStatus from '@/components/atoms/TMIconStatus.vue'
import TMModalWindows from '@/components/organisms/TMModalWindows.vue'

export default {
  name: 'TMListDetail',

  components: { 
    TMModalWindows,
    TMIconStatus
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
  },
  methods: {
    openModal: function(){
      this.showContent = true
      console.log(this.showContent)
    },
    closeModal: function(){
      console.log(this.showContent)
      this.showContent = false
    },
    changeStatus(status) {
      this.$emit('changeStatus',status)
      this.closeModal()
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('メッセージを入力してください')
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
.col, .col-1 {
  padding:0px
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
.modal_header, .modal_footer{
  text-align: right;
}
.tm-button-text {
  border: none;
  margin-right: 5px;
  padding-left: 5px;
}
</style>

