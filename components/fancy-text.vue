<template>
  <component class="-fancy" :is="tag">
    <span>{{ firstWord }}</span>
    {{ restWords }}
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "span"
    },

    value: {
      type: String,
      default: ''
    }
  },

  computed: {
    firstWord() {
      return this.value.split(/\s+/g)[0]
    },

    restWords() {
      return this.value.substring(this.firstWord.length)
    }
  }
}
</script>
