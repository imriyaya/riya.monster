<template>
  <teleport to="body">
    <div v-show="isVisible" id="sample-modal" class="modal" @click="close"></div>
    <div v-show="isVisible" class="modal-content">ああああああああああああ内容です内容です</div>
  </teleport>
</template>

<script>
export default {
  props: {
    isVisible: {
      required: true,
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {}
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang='sass' scoped>
.modal
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background-color: rgba(0, 0, 0, .5)
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.modal-content
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  background-color: rgba(0, 0, 0, .5)
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  // モーダルの幅や色などはお好きにどうぞ！
  background-color: white
  width: 600px
  height: auto
  border-radius: 20px
  padding: 20px

</style>
