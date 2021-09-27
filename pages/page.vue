<template>
  <div class="page" :class="{ '-is-disabled': isMenuOpen }">
    <base-header @toggle-menu="toggleMenu" />
    <mobile-overlay v-if="isMobile"></mobile-overlay>

    <template v-else>
      <button
        class="c-burger"
        :aria-expanded="isMenuOpen"
        aria-controls="main-menu"
        :class="{ 'is-active': isMenuOpen }"
        aria-label="Відкрити меню"
        @click="toggleMenu"
      ></button>

      <base-aside
        :is-home="blok.component === 'home_page'"
        :page-title="blok.title || ''"
        :blocks="blocks"
        :description="blok.description"
        :current-block-uid="currentBlockId"
      />
      <main-menu ref="menu" :is-open="isMenuOpen" :data="contentPages" />
      <main id="main" class="main">
        <home-content
          v-if="blok.component === 'home_page'"
          :data="contentPages"
        />
        <contents-controller
          v-else-if="blok.blocks"
          :data="blok.blocks"
          @block-change="handleContentChange"
        />
      </main>
    </template>
  </div>
</template>

<script>
import { clearAllBodyScrollLocks } from 'body-scroll-lock'

export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
    stories: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      MOBILE_BRAKEPOINT: 1201,
      isMenuOpen: false,
      currentBlockId: '',
      isMobile: false,
    }
  },

  head() {
    return (
      this.blok && {
        title: this.blok.title,
      }
    )
  },

  computed: {
    blocks() {
      if (!this.blok.blocks) return []
      const res = this.blok.blocks.map(({ _uid, title }) => ({ _uid, title }))
      return res
    },

    contentPages() {
      const res = []
      this.stories.forEach((item) => {
        if (item.content.component === 'page') {
          res.push(item)
        }
      })
      return res
    },
  },

  watch: {
    $route() {
      this.isMenuOpen = false
      clearAllBodyScrollLocks()
    },
  },

  mounted() {
    this.mobileDetection()
    window.addEventListener('resize', this.handleResize)
    document.addEventListener('keydown', this.handleKeydown)
  },

  beforeDestroy() {
    clearAllBodyScrollLocks()
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
    document.removeEventListener('keydown', this.handleKeydown)
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },

    handleContentChange(id) {
      if (!id) return ''
      this.currentBlockId = id
    },

    mobileDetection() {
      this.isMobile =
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        window.innerWidth < this.MOBILE_BRAKEPOINT
    },

    handleResize() {
      clearTimeout(this.handleResize.timeout)
      this.handleResize.timeout = setTimeout(() => {
        this.mobileDetection()
      }, 300)
    },

    handleKeydown(e) {
      if (this.isMenuOpen && e.key === 'Escape') {
        this.toggleMenu()
      }
    },
  },
}
</script>
