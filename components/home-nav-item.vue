<template>
  <li class="home-nav__item">
    <h3 class="home-nav__item-title c-heading -h5">{{ title }}</h3>
    <p class="home-nav__item-description c-text -t2">{{ description }}</p>
    <nuxt-link
      class="home-nav__link"
      :to="{ path: slug }"
      :aria-label="`Перейти на сторінку ${title}`"
    >
      <svg
        class="home-nav__link-arrow"
        aria-hidden="true"
        width="13"
        heigth="9"
      >
        <use href="icons/sprite.svg#arrow"></use>
      </svg>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    slug: {
      type: String,
      default: '',
    },
  },

  methods: {
    handleFocus() {
      this.$el.focus()
    },
  },
}
</script>
