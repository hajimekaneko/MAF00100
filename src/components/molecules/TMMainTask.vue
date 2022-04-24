<template> 
  <div class="task-main row px-2">
    <div class="col">
      <TMMainTMP 
      :name="Task_name"
      @decompress="task_decompress"
      />
      <ul v-show="Task_show_list" class="row">
        <li class="col-12"
          v-for="(list, index) in lists"
          :key="list.LitId"
          @click="doEditArray1(list, index)"
        >
        <TMMainList v-if="!list.valueChecker" v-bind:List_name="list.List_name" />
        <!-- <input v-else type="text" class="form-control" v-model="list.List_name"
            > -->
        <input v-else type="text" class="form-control" v-model="list.List_name"
            @blur="list.valueChecker = false" v-focus>
        {{list.valueChecker}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TMMainTMP from '@/components/molecules/TMMainTMP.vue'
import TMMainList from '@/components/molecules/TMMainList.vue'
// import _ from 'lodash'

export default {
  name: 'TMMainTask',

  components: {
    TMMainTMP,
    TMMainList
  },
  // data () {
  //   return {
  //     hoge: 'test'
  //   }
  // },
    
  props: {
    lists: {
      type: Array,
      required: true
    },
    Task_name: {
      type: String,
      required: true
    },
    Task_show_list: {
      type: Boolean,
      required: true
    }
  },
  directives: {
    focus: {
        // ディレクティブ定義
        inserted: function (el) {
            el.focus();
        }
    }
  },
  created: function () {
    for(let i = 0; i < this.lists.length; i++){
      var val = this.lists[i];
      //チェック用データを足す
      console.log("vm")
      // if (typeof val.List_name != 'undefined' && typeof val.valueChecker == 'undefined'){
      if (typeof val.List_name != 'undefined'){
        this.$set(val, 'valueChecker', false);
      }
      console.log(val)
    }
  },
  methods: {
    // `click`イベントを発行
    task_decompress () {
      this.$emit('task_decompress')
    },
    doEditArray1(list) {
      this.$set(list, 'valueChecker', true)
      console.log(list.valueChecker)
    },
  }
}
</script>

<style scoped>
.form-control{
  padding:0px
}
.col{
  padding:0px
}
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
</style>
