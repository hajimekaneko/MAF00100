<template>
  <button
    :class="classes"
    type="button"
    @click="handleClick"
  >
  <fa-icon icon="circle-plus" size="lg"></fa-icon>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TMIconAdd',

  props: {
    type: {
      type: String, 
      default: 'button'
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
    handleClick () {
      this.$emit('addContent')
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
