<template>
  <component
    :is="type"
    class="c-button"
    :aria-disabled="disabled"
    :to="to && isInnerLink ? to : null"
    :href="to && !isInnerLink ? to : null"
    :target="target"
    :disabled="disabled"
    :download="download"
  >
    <span class="c-button__text">
      {{ value }}
    </span>
    <svg class="c-button__arrow" aria-hidden="true" width="13" height="9">
      <use href="icons/sprite.svg#button-arrow"></use>
    </svg>
  </component>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    value: {
      type: String,
      required: true,
    },

    to: {
      type: String,
      default: '',
    },

    target: {
      type: String,
      default: null,
    },

    isInnerLink: {
      type: Boolean,
      default: false,
    },

    download: {
      type: Boolean,
      default: null,
    },
  },

  computed: {
    type() {
      if (this.to) {
        if (this.isInnerLink) {
          return 'nuxt-link'
        } else {
          return 'a'
        }
      }

      return 'button'
    },
  },
}
</script>
