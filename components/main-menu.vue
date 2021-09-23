<template>
  <transition
    name="menu"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <div v-show="isOpen" class="main-menu">
      <div class="main-menu__wrapper">
        <ul class="main-menu__page-list" v-for="block in data" :key="block._uid">
          <li class="main-menu__page-item">
            <nuxt-link class="main-menu__page-link" :to="block.slug">
              <h2 ref="pageTitle" class="main-menu__page-title c-heading -h3">{{ block.name }}</h2>
            </nuxt-link>

            <ul class="main-menu__block-list">
              <li class="main-menu__block-item" v-for="inner in block.content.blocks" :key="inner._uid">
                <nuxt-link class="main-menu__block-link" :to="{ path: block.slug, hash: `#${inner._uid}` }">
                  <h3 ref="blockTitle" class="main-menu__block-title c-heading -h6">{{ inner.title }}</h3>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import { gsap } from "gsap"

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },

    data: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      tl: null
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

    onBeforeEnter(el) {
      if (!process.client) return;
      this.tl = gsap.timeline({ paused: true })

      this.tl
        .fromTo(this.$el, 0.7, { opacity: 1, yPercent: -100 }, { yPercent: 0 })
        .staggerFromTo('.main-menu__page-title', 0.7, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 0.2)
        .staggerFromTo('.main-menu__block-title', 0.7, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 0.08, "-=0.7")
    },

    onEnter(el, done) {
      if (!this.tl) return;
      this.tl.eventCallback('onComplete', done)
      this.tl.timeScale(1).play()
    },

    onAfterEnter() {
      if (!this.tl) return;
      this.tl.eventCallback('onComplete', null)
    },

    onLeave(el, done) {
      if (!this.tl) return;
      this.tl.eventCallback('onComplete', done)
      this.tl.timeScale(2).reverse()
    },

    onAfterLeave() {
      if (!this.tl) return;
      this.tl.eventCallback('onComplete', null)
    }
  }
}
</script>
