<template>
  <div v-editable="blok" class="c-aside-home">
    <h1 class="c-aside-home__title c-heading -h1">
      {{ title }}
    </h1>
    <p class="c-aside-home__description c-text -t1">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    },
  }
}
</script>
