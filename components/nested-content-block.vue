<template v-editable="data">
  <section class="nested-content">
    <h3 class="c-heading -h5">{{ data.title }}</h3>

    <div v-if="body" class="nested-content__body" v-html="body"></div>

    <component
      :is="block.component"
      v-for="block in data.blocks"
      :key="block._uid"
      :data="block"
    />

    <downloads-component
      v-if="data.downloads && data.downloads.length > 0"
      :downloads="data.downloads"
    ></downloads-component>

    <base-button
      v-if="data.download && data.download.filename"
      :to="data.download.filename"
      value="Завантажити"
      download
    />
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {
    body() {
      return this.$storyapi.richTextResolver.render(this.data.body)
    },
  },
}
</script>
