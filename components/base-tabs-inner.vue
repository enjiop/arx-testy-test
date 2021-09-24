<template>
  <transition name="tabs" mode="out-in">
    <section role="tabpanel" class="c-tabs__inner" v-show="isActive" v-html="body">
    </section>
  </transition>
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
    },

    isActive: {
      type: Boolean,
      required: true
    }
  },

  computed: {
   body() {
     return this.$storyapi.richTextResolver.render(this.data.body)
   }
  }
}
</script>
