<template>
  <div class="aside" :class="{ 'aside--home': isHome }">
    <h1 class="aside__title c-heading -h2">{{ pageTitle }}</h1>
    <p v-if="description" class="aside__description c-text -t1">{{ description }}</p>
    <nav v-if="blocks" class="aside-nav">
      <ul class="aside-nav__list">
        <li v-for="block in blocks" :key="block._uid" class="aside-nav__item">
          <a class="aside-nav__link c-heading -h6" href="#">
            <svg class="aside-nav__arrow" aria-hidden="true" width="16" height="12">
              <use href="icons/sprite.svg#base-arrow"></use>
            </svg>
            {{ block.title }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
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
    }
  }
}
</script>
