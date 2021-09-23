<template>
  <div class="page" :class="{ '-is-disabled': isMenuOpen }">
    <base-header @toggle-menu="toggleMenu"/>
    <base-aside
      :isHome="blok.component === 'home_page'"
      :page-title="blok.title"
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
  </div>
</template>

<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"

export default {
  data() {
    return {
      isMenuOpen: false,
      currentBlockId: '',
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
    "$route.hash"() {
      this.isMenuOpen = false
      clearAllBodyScrollLocks()
    }
  },

  computed: {
    blocks() {
      if (!this.blok.blocks) return [];
      const res = this.blok.blocks.map(({ _uid, title }) => ({ _uid, title}));
      return res
    },

    contentPages() {
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

      if (this.isMenuOpen) {
        disableBodyScroll(this.$refs.menu.$el)
      } else {
        enableBodyScroll(this.$refs.menu.$el)
      }
    },

    handleContentChange(id) {
      if (!id) return ''
      this.currentBlockId = id
    }
  },

  beforeDestroy() {
    clearAllBodyScrollLocks()
  }
}
</script>
