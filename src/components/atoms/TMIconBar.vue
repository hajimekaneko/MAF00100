<template>
  <button
    :class="classes"
    :decompressed="decompressed"
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
    type: {
      type: String, 
      default: 'button'
    },
    decompressed: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    // `type`に応じてクラスを動的に生成する.
    classes () {
      const cls = this.type === 'text' ? ('-' + this.type) : ''
      return [`kbn-button${cls}`]
    }
  },

  methods: {
    // `click`イベントを発行
    handleClick (decompressed) {
      // console.log(decompressed)
      this.$emit('decompress', decompressed)
      decompressed = !decompressed
      // console.log(decompressed)
    }
  }
}
</script>

<style scoped>
.kbn-button {
  padding: .6em 1.3em;
}
.kbn-button-text {
  border: none;
  padding-right: 0;
  padding-left: 0;
}
</style>
