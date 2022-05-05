<template>
  <button
    class="tm_button"
    type="button"
    @click="handleClick"
  >
  <fa-icon icon="trash-can"></fa-icon>
  </button>
</template>

<script>
export default {
  name: 'TMIconDelete',

  props: {
  },

  computed: {
  },

  methods: {
    // `click`イベントを発行
    handleClick () {
      this.$emit('deleteContent')
    }
  }
}
</script>

<style scoped>
.tm_button {
  border: none;
  padding-right: 0;
  padding-left: 0;
}
</style>
