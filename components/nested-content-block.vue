<template v-editable="data">
  <div class="nested-content">
    <h3 class="c-heading -h5">{{ data.title }}</h3>

    <div class="nested-content__body" v-if="body" v-html="body"></div>

    <component v-for="block in data.blocks" :key="block._uid" :is="block.component" :data="block" />

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
    }
  },

  computed: {
    body() {
      return this.$storyapi.richTextResolver.render(this.data.body)
    }
  }
}
</script>
