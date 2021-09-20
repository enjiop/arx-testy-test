<template>
  <div class="c-aside">
    <h1 class="c-aside__title c-heading -h2">{{ pageTitle }}</h1>
    <nav class="c-aside-nav">
      <ul class="c-aside-nav__list">
        <li v-for="block in blocks" :key="block._uuid" class="c-aside-nav__item">
          <svg class="c-aside-nav__arrow" aria-hidden="true" width="16" height="12">
            <use href="icons/sprite.svg#base-arrow"></use>
          </svg>
          <a class="c-aside-nav__link c-heading -h6" href="#">
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
    }
  }
}
</script>
