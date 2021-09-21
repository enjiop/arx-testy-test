<template>
  <ul class="c-downloads">
    <li class="c-downloads__item" v-for="item in downloads" :key="item.id">
      <a v-if="item.filename" class="c-downloads__link" :href="item.filename" download>
        <svg class="c-downloads__icon" aria-hidden="true" width="48" height="48">
          <use href="icons/sprite.svg#file"></use>
        </svg>
        <span class="c-downloads__description">
          <span class="c-downloads__name">{{ item.title ? item.title : urlToName(item.filename) }}</span>
          <span class="c-downloads__ext">{{ urlToFileExt(item.filename) }}</span>
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    downloads: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    urlToName(url) {
      return url.match(/([^\/]+)(?=\.\w+$)/)[0]
    },

    urlToFileExt(url) {
      return url.match(/\.\w{3,4}($|\?)/)[0]
    }
  }
}
</script>
