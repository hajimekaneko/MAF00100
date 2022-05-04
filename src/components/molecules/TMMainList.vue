<template>
  <div class="task-list row">
    <TMIconStatus :status=List_Status class="col-1, status" @changeStatus="changeStatus($event)" />
    <div class="col list" @click="edit_list_name">{{ List_name }}</div>
    <TMListDetail @changeStatus=changeStatus($event) :List_name="List_name" :List_Status="List_Status" />
  </div>
</template>

<script>
import TMIconStatus from '@/components/atoms/TMIconStatus.vue'
import TMListDetail from '@/components/molecules/TMListDetail.vue'

// import KbnTaskCard from '@/components/molecules/KbnTaskCard.vue'
// import KbnTaskForm from '@/components/molecules/KbnTaskForm.vue'
// import { mapState } from 'vuex'
// import draggable from 'vuedraggable'

export default {
  name: 'TMMainList',

  components: {
    TMIconStatus,
    TMListDetail,
    // TMMainTMP,
    // KbnTaskCard,
    // KbnTaskForm,
    // draggable
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
  },

  data () {
    return {
      shown: false,
      showContent: false
    }
  },

  computed: {
    // draggableItems: {
    //   get () { 
    //     return this.tasks 
    //     },
    //   set () {
    //     // console.log(value)
    //     // NOTE:
    //     //  本来なら、Vue.Draggrableから処理されたデータをitemsに反映すれば可能だが、
    //     //  フロントエンドとバックエンドの状態を整合とるために、ここでは何もしない。
    //   },
    // },
    // ...mapState({
    //   canMove: state => state.dragging.target !== null &&
    //     state.dragging.from !== null &&
    //     state.dragging.to !== null
    // })
  },

  methods: {
    edit_list_name() {
      this.$emit('edit_list_name')
    },
    changeStatus(status) {
      this.$emit('changeStatus', status)
    }
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
