<template> 
  <div class="row">
    <div class="col">
      <div class="row">
          <div class="example-modal-window col">
            <p>ボタンを押すとモーダルウィンドウが開きます!</p>
            <button v-on:click="openModal">Click</button>
          </div>  
      </div>
    </div>
    <TMModalWindows v-show="showContent" @closeModal="closeModal">
      <template slot="header">
        <div class="modal_header">
            <div class="btn" @click="closeModal">
              <fa-icon icon="xmark" size="lg"></fa-icon>
            </div>
        </div> 
      </template>
      usoda
      <template slot="footer">
        <div class="modal_footer">
            <button @click="doSend">送信</button>
        </div> 
      </template>
    </TMModalWindows>
  </div>
</template>

<script>
import TMModalWindows from '@/components/organisms/TMModalWindows.vue'
// import TMMainGroup from '@/components/molecules/TMMainGroup.vue'

export default {
  name: 'TMMainTTaskView',

  components: { 
    TMModalWindows
  },
  data() {
    return {
      message: '',
      showContent: false
    }
  },
  methods: {
    openModal: function(){
      this.showContent = true
      console.log(this.showContent)
    },
    closeModal: function(){
      this.showContent = false
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

