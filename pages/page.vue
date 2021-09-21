<template>
  <div class="c-page">
    <base-header @toggle-menu="toggleMenu"/>
    <base-aside
      :isHome="blok.component === 'home_page'"
      :page-title="blok.title"
      :blocks="blocks"
      :description="blok.description"
    />
    <main-menu :isOpen="isMenuOpen"/>
    <main class="main">
        <home-content v-if="blok.component === 'home_page'"></home-content>
        <contents-controller v-else :data="blok.blocks" @change="handleContentChange" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },

  props: {
    blok: {
      type: Object,
      required: true
    }
  },

  computed: {
    blocks() {
      if (!this.blok.blocks) return null;

      const res = this.blok.blocks.map(({_uid, title}) => {
        return {
          _uid,
          title,
        }
      });
      return res
    },
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },

    handleContentChange(current) {
      console.log(current)
    }
  },
}
</script>
