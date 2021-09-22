<template>
  <div class="c-tabs">
    <ul class="c-tabs__header">
      <li
        class="c-tabs__item"
        :class="{ '-active': (selectedIndex === index) }"
        v-for="(tab, index) in tabs"
        :key="tab.title"
      >
        <button @click="selectTab(index)" class="c-tabs__button">
          {{ tab.title }}
        </button>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      tabs: []
    }
  },

  created() {
    this.tabs = this.$children
  },

  mounted() {
    this.selectTab(0)
  },

  methods: {
    selectTab(index) {
      this.selectedIndex = index

      this.tabs.forEach((tab, i) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>
