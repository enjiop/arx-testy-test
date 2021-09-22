<template>
  <div class="o-container">
    <content-block
      ref="block"
      v-for="block in data"
      :key="block._uid"
      :id="`${block._uid}`"
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
      this.$emit('block-change', this.blockInView)
    }
  },

  methods: {
    updateHistory(hash) {
      clearTimeout(this.updateHistory.timeout);
      this.updateHistory.timeout = setTimeout(() => {
        if (window.location.hash !== hash) {
          history.pushState({}, window.title, hash);
        }
      }, 400);
    }
  },

  mounted() {
    const sections = this.$refs.block.map(el => el.$el)
    const scrollRoot = document.getElementById("main")

    let prevYPos = 0
    let direction = 'up'

    const getTargetSection = (entry) => {
      const index = sections.findIndex((section) => section == entry.target)

      if (index >= sections.length - 1) {
        return entry.target
      } else {
        return sections[index + 1]
      }
    }

    const shouldUpdate = (entry) => {
      if (direction === 'down' && !entry.isIntersecting) {
        return true
      }

      if (direction === 'up' && entry.isIntersecting) {
        return true
      }

      return false
    }

    const callback = (entries) => {
      entries.forEach(entry => {
        if (scrollRoot.scrollTop > prevYPos) {
          direction = 'down'
        } else {
          direction = 'up'
        }

        prevYPos = scrollRoot.scrollTop

        const target = direction === 'down' ? getTargetSection(entry) : entry.target

        if (shouldUpdate(entry)) {
          this.blockInView = target.id;
          this.updateHistory('#' + target.id)
        }
      });
    }

    const options = {
      root: document.getElementById('main'),
      rootMargin: '-100px',
      threshold: 0
    }

    this.observer = new window.IntersectionObserver(callback, options)

    sections.forEach(section => this.observer.observe(section))
  }
}
</script>
