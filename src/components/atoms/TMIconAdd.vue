<template>
  <button
    class="tm-button"
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
  },

  computed: {
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
</style>
