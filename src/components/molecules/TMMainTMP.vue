<template>
  <div class="task-list-header">
    <div class="title">
      <h2>{{ name }}</h2>
    </div>
    <div class="actions">
      <!-- <KbnButton
        type="text"
        @click="$emit('add')"
      >
        <KbnIcon name="add" />
      </KbnButton> -->
      <TMIconAdd
        type="text"
        @addContent="addContent"
      >
      </TMIconAdd>
      <TMIconBar
        type="text"
        @decompress="decompress"
      >
      </TMIconBar>
      

    </div>
  </div>
</template>

<script>
// import KbnButton from '@/components/atoms/KbnButton.vue'
// import KbnIcon from '@/components/atoms/KbnIcon.vue'
import TMIconBar from '@/components/atoms/TMIconBar.vue'
import TMIconAdd from '@/components/atoms/TMIconAdd.vue'

export default {
  name: 'TMMainTMP',

  components: {
    // KbnButton,
    // KbnIcon,
    TMIconAdd,
    TMIconBar
  },

  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    // `click`イベントを発行
    decompress () {
      this.$emit('decompress')
    },
    addContent() {
      this.$emit('addContent')
    }
  }
}
</script>

<style scoped>
.task-list-header {
  margin: 0px, -10px;
  background-color: rgb(225, 225, 225);
  display: flex;
  border-bottom: thin solid black;
}
.title {
  flex: 1;
}
h2 {
  margin: 0px;
  padding-left: 8px;
  font-size: 1.0em;
  text-align: left;
}
.actions {
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  cursor: pointer;
}
</style>
