<template>
  <div v-if="isOpen" class="main-menu"></div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
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
      let resolve
      let reject

      const promise = new Promise((ok, fail) => {
        resolve = ok
        reject = fail
      })

      this.$options.popupController = { resolve, reject }
      this.isOpen = true

      return promise;
    },

    close() {
      this.$options.popupController.resolve(true)
      this.isOpen = false
    }
  }
}
</script>
