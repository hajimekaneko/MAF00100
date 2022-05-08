<template>
  <button class="tm-button" type="button" @click="openDetail">
    <fa-icon icon="file-pen" ></fa-icon>
  </button>
</template>

<script>
export default {
  name: 'TMIconDetail',

  props: {
  },

  computed: {
  },

  methods: {
    // `click`イベントを発行
    openDetail () {
      this.$emit('openDetail')
    }
  }
}
</script>

<style scoped>
</style>
