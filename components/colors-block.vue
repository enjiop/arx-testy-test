<template>
  <ul class="colors">
    <li v-for="item in data.color" :key="item._uid" class="colors__item">
      <div
        class="colors__item-view"
        :style="{ backgroundColor: item.value }"
      ></div>
      <div class="colors__item-info">
        <span class="colors__item-name">{{ item.name }}</span>
        <span class="colors__item-value">{{ item.value }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>
