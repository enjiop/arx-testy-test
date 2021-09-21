<template>
  <div v-if="isOpen" class="main-menu"></div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  mounted() {
    document.addEventListener("keydown", this.handleKeydown)
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown)
  },

  methods: {
    handleKeydown(e) {
      if (this.isOpen && e.key === "Escape") {
        this.close()
      }
    },

    open() {
      this.isOpen = true
    },

    close() {
      this.isOpen = false
    }
  }
}
</script>
