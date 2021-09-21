<template>
  <div class="o-container">
    <content-block
      ref="block"
      v-for="block in data"
      :key="block._uid"
      :id="`block-${block._uid}`"
      :data="block"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      observer: null,
      blockInView: null
    }
  },

  watch: {
    blockInView() {
      this.$emit('change', this.blockInView)
    }
  },

  mounted() {
    if (window && window.IntersectionObserver) {
      const callback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio < 1) {
            this.blockInView = entry.target
          }
        });
      }

      const options = {
        rootMargin: '0px',
        threshold: 1.0
      }

      this.observer = new window.IntersectionObserver(callback, options)
    }

    this.$refs.block.forEach(el => {
      this.observer.observe(el.$el)
    })
  }
}
</script>
