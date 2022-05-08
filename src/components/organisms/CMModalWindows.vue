<template>
    <div id="overlay" @click="closeModal">
        <div id="content-window" class="container" @click="stopEvent">
            <slot name="header">
            </slot>
            <slot/>
            <slot name="footer">
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CMModalWindows',
        data() {
            return {
                modal: false,
                message: '',
                showContent: false
            }
        },
        methods: {
            openModal: function(){
            this.showContent = true
            },
            closeModal: function(){
                this.$emit('closeModal')
            },
            stopEvent: function(event){
                event.stopPropagation()
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
#content-window{
  z-index:2;
  width:35%;
  padding: 8px;
  background:#fff;
  border-radius: 4px;
}
.row.content-main{
    margin:0px
}
</style>
