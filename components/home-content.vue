<template>
  <nav class="home-nav">
    <div class="home-nav__wrapper">
      <div class="o-container">
        <fancy-text
          class="home-nav__title c-heading -h3"
          tag="h2"
          value="Будуємо чудові продукти"
        ></fancy-text>
        <ul class="home-nav__list">
          <home-nav-item
            v-for="page in data"
            :key="page._uid"
            :title="page.content.title"
            :description="page.content.description"
            :slug="page.slug"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  computed: {
    contentPages() {
      const res = []
      this.nav.forEach((item) => {
        if (item.content.component === 'page') {
          res.push(item)
        }
      })
      return res
    },
  },
}
</script>
