<template>
  <div class="o-container content">
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
      sectionInView: null,
      prevYPos: 0,
      direction: 'up'
    }
  },

  computed: {
    sections: function() {
      return this.$refs.block.map(el => el.$el)
    },
  },

  watch: {
    sectionInView() {
      this.$emit('block-change', this.sectionInView)
    }
  },

  methods: {
    shouldUpdate: function(entry) {
      if (this.direction === 'down' && !entry.isIntersecting) {
        return true
      }

      if (this.direction === 'up' && entry.isIntersecting) {
        return true
      }

      return false
    },

    getTargetSection: function(entry) {
      const index = this.sections.findIndex((section) => section == entry.target)

      if (index >= this.sections.length - 1) {
        return entry.target
      } else {
        return this.sections[index + 1]
      }
    },

    updateHistory(hash) {
      clearTimeout(this.updateHistory.timeout);
      this.updateHistory.timeout = setTimeout(() => {
        if (window.location.hash !== hash) {
          history.pushState({}, window.title, hash);
        }
      }, 400);
    },

    intersectionObsCallback(entries) {
      entries.forEach(entry => {
        if (document.documentElement.scrollTop > this.prevYPos) {
          this.direction = 'down'
        } else {
          this.direction = 'up'
        }

        this.prevYPos = window.scrollTop

        const target = this.direction === 'down' ? this.getTargetSection(entry) : entry.target

        if (this.shouldUpdate(entry)) {
          this.sectionInView = target.id;
          this.updateHistory('#' + target.id)
        }
      })
    }
  },

  mounted() {
    const options = {
      rootMargin: "-20%",
      threshold: 0.0
    }

    this.observer = new window.IntersectionObserver(this.intersectionObsCallback, options)

    this.$nextTick(() => {
      if (!this.sections) return;
      this.sections.forEach(section => this.observer.observe(section))
    });
  }
}
</script>
