<template>
  <div class="c-tabs__inner" v-show="isActive" v-html="body">
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tab'
    },

    data: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isActive: true
    }
  },

  computed: {
   body() {
     return this.$storyapi.richTextResolver.render(this.data.body)
   }
  }
}
</script>
