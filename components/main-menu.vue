<template>
  <div v-if="isOpen" class="main-menu">
    <div class="main-menu__wrapper">
      <ul class="main-menu__page-list" v-for="block in contentPages" :key="block._uid">
        <li class="main-menu__page-item">
          <nuxt-link class="main-menu__page-link" to="/">
            <h2 class="c-heading -h3">{{ block.name }}</h2>
          </nuxt-link>

          <ul class="main-menu__block-list">
            <li class="main-menu__block-item" v-for="inner in block.content.blocks" :key="inner._uid">
              <a class="main-menu__block-link" href="">
                <h3 class="c-heading -h6">{{ inner.title }}</h3>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },

    nav: {
      type: Array,
      required: true
    }
  },

  computed: {
    contentPages() {
      let res = []
      this.nav.forEach(item => {
        if (item.content.component === 'page') {
          res.push(item)
        }
      })
      return res
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
