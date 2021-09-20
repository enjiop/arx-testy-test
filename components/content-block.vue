<template v-editable="data">
  <div class="c-content">
    <component
      :is="headingNode"
      class="c-heading"
      :class="nested ? '-h5' : '-h3'"
    >{{ data.title }}</component>

    <div class="c-content__body" v-if="body" v-html="body"></div>

    <content-block
      v-for="nested in data.nested"
      :key="nested._uuid"
      :data="nested"
      nested
    ></content-block>

    <base-button
      v-if="data.download && data.download.filename"
      :to="data.download.filename"
      value="Завантажити"
      download
    />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },

    nested: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    body() {
      return this.$storyapi.richTextResolver.render(this.data.body)
    },

    headingNode() {
      return this.nested ? "h3" : "h2"
    }
  }
}
</script>
