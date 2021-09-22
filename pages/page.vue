<template>
  <div class="c-page">
    <base-header @toggle-menu="toggleMenu"/>
    <base-aside
      :isHome="blok.component === 'home_page'"
      :page-title="blok.title"
      :blocks="blocks"
      :description="blok.description"
      :current-block-uid="currentBlockId"
    />
    <main-menu :isOpen="isMenuOpen" :nav="stories"/>
    <main class="main" id="main">
        <home-content v-if="blok.component === 'home_page'"></home-content>
        <contents-controller v-else-if="blok.blocks" :data="blok.blocks" @block-change="handleContentChange" />
    </main>
  </div>
</template>

<script>
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

  computed: {
    blocks() {
      if (!this.blok.blocks) return [];
      const res = this.blok.blocks.map(({ _uid, title }) => ({ _uid, title}));
      return res
    },
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },

    handleContentChange(id) {
      if (!id) return ''
      this.currentBlockId = id
    }
  }
}
</script>
