<template>
  <picture>
    <source :data-srcset="`https://img2.storyblok.com/filters:format(webp)/${path}`" type="image/webp"/>
    <img
      class="lazyload"
      :data-src="src"
      :alt="alt"
      :width="width"
      :height="height"
    />
  </picture>
</template>

<script>
export default {
  name: "BaseImage",
  props: {
    attrs: {
      type: Object,
      required: true,
    },
  },

  computed: {
    sizes() {
      return this.pathArray[5]
    },

    width() {
      return this.sizes.split('x')[0]
    },

    height() {
      return this.sizes.split('x')[1]
    },

    pathArray() {
      return this.src.split('/')
    },

    path() {
      return this.pathArray.slice(3).join('/')
    },

    src() {
      return this.attrs.src
    },

    alt() {
      return this.attrs.alt
    },

    title() {
      return this.attrs.title
    }
  },
}
</script>
