<template>
  <button
    class="tm-button"
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

</style>
