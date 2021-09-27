<template>
  <div class="page" :class="{ '-is-disabled': isMenuOpen }">
    <base-header @toggle-menu="toggleMenu"/>
    <mobile-overlay v-if="isMobile"></mobile-overlay>

    <template v-else>
      <button
        class="c-burger"
        :aria-expanded="isMenuOpen"
        aria-controls="main-menu"
        :class="{'c-burger--active': isMenuOpen}"
        @click="toggleMenu"
        aria-label="Відкрити меню"
      ></button>

      <base-aside
        :isHome="blok.component === 'home_page'"
        :page-title="blok.title || ''"
        :blocks="blocks"
        :description="blok.description"
        :current-block-uid="currentBlockId"
      />
      <main-menu ref="menu" :isOpen="isMenuOpen" :data="contentPages"/>
      <main class="main" id="main">
          <home-content
            v-if="blok.component === 'home_page'"
            :data="contentPages"
          />
          <contents-controller v-else-if="blok.blocks" :data="blok.blocks" @block-change="handleContentChange" />
      </main>
    </template>
  </div>
</template>

<script>
import { clearAllBodyScrollLocks } from "body-scroll-lock"

export default {
  head() {
    return this.blok && {
      title: this.blok.title
    }
  },

  data() {
    return {
      MOBILE_BRAKEPOINT: 1201,
      isMenuOpen: false,
      currentBlockId: '',
      isMobile: false,
    }
  },

  props: {
    blok: {
      type: Object,
      required: true
    },
    stories: {
      type: Array,
      required: true
    }
  },

  watch: {
    $route() {
      this.isMenuOpen = false
      clearAllBodyScrollLocks()
    },
  },

  computed: {
    blocks: function() {
      if (!this.blok.blocks) return [];
      const res = this.blok.blocks.map(({ _uid, title }) => ({ _uid, title}));
      return res
    },

    contentPages: function() {
      let res = []
      this.stories.forEach(item => {
        if (item.content.component === 'page') {
          res.push(item)
        }
      })
      return res
    }
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
      this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
            window.innerWidth < this.MOBILE_BRAKEPOINT;
    },

    handleResize() {
      clearTimeout(this.handleResize.timeout)
      this.handleResize.timeout = setTimeout(() => {
        this.mobileDetection()
      }, 300)
    },

    handleKeydown(e) {
      if (this.isMenuOpen && e.key === "Escape") {
        this.toggleMenu()
      }
    },
  },

  mounted() {
    this.mobileDetection()
    window.addEventListener("resize", this.handleResize)
    document.addEventListener("keydown", this.handleKeydown)
  },

  beforeDestroy() {
    clearAllBodyScrollLocks()
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize)
    document.removeEventListener("keydown", this.handleKeydown)
  }
}
</script>
