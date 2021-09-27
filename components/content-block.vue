<template v-editable="data">
  <section class="content__section">
    <h2 class="c-heading -h3">{{ data.title }}</h2>

    <div v-if="body" class="content__body" v-html="body"></div>

    <template v-for="nested in data.nested">
      <nested-content-block
        v-if="nested.component === 'Nested Block'"
        :key="nested._uid"
        :data="nested"
      ></nested-content-block>
      <base-tabs
        v-else-if="nested.component === 'Tabs'"
        :key="nested._uid"
        :data="nested"
      />
    </template>

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
      if (!this.data.body) return null
      return this.$storyapi.richTextResolver.render(this.data.body)
    },
  },
}
</script>
