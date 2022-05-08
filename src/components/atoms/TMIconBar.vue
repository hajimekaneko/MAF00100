<template>
  <button
    class="tm-button"
    type="button"
    @click="handleClick(decompressed)"
  >
  <fa-icon icon="bars" size="lg"></fa-icon>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TMIconBar',

  props: {
    decompressed: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    // `type`に応じてクラスを動的に生成する.
    // classes () {
    //   const cls = this.type === 'text' ? ('-' + this.type) : ''
    //   return [`kbn-button${cls}`]
    // }
  },

  methods: {
    // `click`イベントを発行
    handleClick () {
      this.$emit('decompress')
    }
  }
}
</script>

<style scoped>
</style>
