<template>
  <CMModalWindows @closeModal="closeModal">
    <!-- 下記を参考に作り直す -->
    <!-- https://zukucode.com/2020/04/vue-alert-confirm.html -->
      <template slot="header">
        <div class="modal_header row">
          <div class="col d-flex justify-content-center">
            {{List_name}}を削除します。
            <br>よろしいですか。
          </div>
        </div> 
      </template>
      <div class="modal_main row d-flex justify-content-around">
        <button @click="closeModal" type="button" class="btn btn-info">いいえ</button>
        <button @click="deleteContent" type="button" class="btn btn-danger">削除する</button>
      </div>
  </CMModalWindows>
</template>

<script>
import CMModalWindows from '@/components/organisms/CMModalWindows.vue'

    export default {
        name: 'TMModalWindowsDelete',
        components: {
            CMModalWindows,
            // TMMainTMP,
            // KbnTaskCard,
            // KbnTaskForm,
            // draggable
        },
        data() {
            return {
            }
        },
        props: {
          List_name: {
            type: String,
            required: true
          },
        },
        methods: {
            closeModal: function(){
                this.$emit('closeModal')
            },
            deleteContent: function(){
                this.$emit('deleteContent')
            },
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
#content-window{
  z-index:2;
  width:35%;
  padding: 8px;
  background:#fff;
  border-radius: 4px;
}
.row.content-main, .modal_main{
    margin:0px
}

.modal_main{
  margin:0px;
  padding-top:10px

}
</style>
