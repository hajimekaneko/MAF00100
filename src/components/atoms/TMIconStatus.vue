<template>
<div>
  <fa-icon v-if="status=== 0" @click="changeStatus" :icon="['far', 'square']"></fa-icon>
  <fa-icon v-if="status=== 1" @click="changeStatus" :icon="['far', 'square-minus']"></fa-icon>
  <fa-icon v-if="status=== 2" @click="changeStatus" :icon="['far', 'square-check']"></fa-icon>

</div>

</template>

<script>
export default {
  name: 'TMIconStatus',

  props: {
    status: {
      type: Number,
      required: true,
      // validator: value => {
      //   return [0, 1, 2].indexOf(value) !== -1
      // }
    }
  },
  methods: {
    changeStatus(e, status=99) {
      this.$emit('changeStatus',status)
    }
  }
}
</script>
