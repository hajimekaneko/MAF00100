<template>
  <nav class=" board-navigation">
    <div class="row">
        <div class="btn1 col-12 actions">
        <KbnButton type="text"
            @click="$emit('logout')"
        >
            ログオフ
        </KbnButton>
        </div>
                <div class="btn1 col-12 actions">
        <KbnButton type="text"
            @click="$emit('logout')"
        >
            ログオフ
        </KbnButton>
        </div>
    </div>
  </nav>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'

export default {
  name: 'TMNavigation',

  components: {
    KbnButton
  }
}
</script>

<style scoped>
.board-navigation {
  display: flex;
  margin: 5px;
}
.btn1{
    margin: 5px;
}
.title {
  flex: 1;
}
h1 {
  margin: 0px;
}
.actions {
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  cursor: pointer;
}
</style>
