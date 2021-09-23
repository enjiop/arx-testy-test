<template>
  <aside class="aside" :class="{ 'aside--home': isHome }">

    <fancy-text v-if="isHome" class="aside__title c-heading -h2" tag="h1" :value="pageTitle"></fancy-text>
    <h1 v-else class="aside__title c-heading -h2">{{ pageTitle }}</h1>

    <p v-if="isHome && description" class="aside__description c-text -t1">{{ description }}</p>
    <nav v-if="blocks.length" class="aside-nav">
      <ul class="aside-nav__list">
        <li
          v-for="block in blocks"
          :key="block._uid"
          class="aside-nav__item"
          :class="{ '-active': block._uid === currentBlockUid }"
        >
          <nuxt-link class="aside-nav__link c-heading -h6" :to="{ hash: block._uid }">
            <svg class="aside-nav__arrow" aria-hidden="true" width="16" height="12">
              <use href="icons/sprite.svg#base-arrow"></use>
            </svg>
            {{ block.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true
    },

    blocks: {
      type: Array,
      default: () => []
    },

    isHome: {
      type: Boolean,
      default: false
    },

    description: {
      type: String,
      default: ''
    },

    currentBlockUid: {
      type: String,
      default: ''
    }
  }
}
</script>
