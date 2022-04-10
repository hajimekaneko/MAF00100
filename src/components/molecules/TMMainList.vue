<template>
  <div class="task-list">
    <h6>{{ List_name }}</h6>
    <!-- <TMMainTMP
      v-bind:name="List_name"
      @add="shown = true"
    /> -->
    <!-- <ul class="task-list-items"> -->
      <!-- <draggable
        v-model="draggableItems"
        :options="{ group: 'items' }"
        @change="handleChange"
        @end="handleEnd"
      >
        <li
          v-for="task in draggableItems"
          :key="task.taskId"
        >
        
          <KbnTaskCard
            v-bind="task"
            @remove="handleRemove"
          />
        </li>
      </draggable> -->
    <!-- </ul> -->
    <!-- <KbnTaskForm
      v-if="shown"
      :list="list"
      @close="shown = false"
    /> -->
  </div>
</template>

<script>
// import TMMainTMP from '@/components/molecules/TMMainTMP.vue'
// import KbnTaskCard from '@/components/molecules/KbnTaskCard.vue'
// import KbnTaskForm from '@/components/molecules/KbnTaskForm.vue'
// import { mapState } from 'vuex'
// import draggable from 'vuedraggable'

export default {
  name: 'TMMainGroup',

  components: {
    // TMMainTMP,
    // KbnTaskCard,
    // KbnTaskForm,
    // draggable
  },

  props: {
    // ListId: {
    //   type: Number,
    //   required: true
    // },
    List_name: {
      type: String,
      required: true
    }, 
    // tasks: {
    //   type: Array,
    //   default: () => []
    // },
    // list: {
    //   type: Array,
    //   default: () => []
    // },
    // tolist: {
    //   type: Array,
    //   default: () => []
    // },
  },

  data () {
    return {
      shown: false,
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

</style>
