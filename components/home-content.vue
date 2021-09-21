<template>
  <nav class="home-nav">
    <div class="o-container">
      <h2 class="home-nav__title c-heading -h3">Будуємо чудові продукти</h2>
      <ul class="home-nav__list">
        <home-nav-item
          v-for="page in pages"
          :key="page._uid"
          :title="page.title"
          :description="page.description"
        />
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          _uid: 1,
          title: "Брендинг",
          description: "Правила використання логотипу, версії для скачування",
          route: "/"
        },
        {
          _uid: 2,
          title: "SMM",
          description: "Як ми виглядаємо в соціальних мережах",
          route: "/"
        },
        {
          _uid: 3,
          title: "Web",
          description: "Шрифтові схеми і типографіка, робота з текстом",
          route: "/"
        },
        {
          _uid: 4,
          title: "Проектування",
          description: "Шрифтові схеми і типографіка, робота з текстом",
          route: "/"
        },
      ]
    }
  }
}
</script>
