<template>
  <div class="c-tabs">
    <ul role="tablist" class="c-tabs__header">
      <li
        v-for="tab in data.tabs"
        ref="tab"
        :key="tab.title"
        class="c-tabs__item"
        role="presentation"
      >
        <button
          :id="`tab-${tab._uid}`"
          role="tab"
          class="c-tabs__button"
          :aria-selected="selectedUid === tab._uid"
          :tabindex="selectedUid === tab._uid ? null : -1"
          @click="selectTab(tab._uid)"
          @keydown.prevent="handleTabKeyDown"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>
    <base-tabs-inner
      v-for="tab in data.tabs"
      :id="`tab-${tab._uid}`"
      ref="panel"
      :key="tab._uid"
      :title="tab.title"
      :data="tab"
      :aria-labelledby="`tab-${tab._uid}`"
      :is-active="selectedUid === tab._uid"
      tabindex="-1"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      selectedUid: '',
    }
  },

  computed: {
    currentPanelElement() {
      return this.$refs.panel.find(
        (item) => item.$el.id === `tab-${this.selectedUid}`
      )
    },
  },

  mounted() {
    const firstTabUid = this.data.tabs[0]._uid
    this.selectTab(firstTabUid)
  },

  methods: {
    selectTab(uid) {
      this.selectedUid = uid
    },

    handleTabKeyDown(e) {
      const dir = e.which === 40 ? 'down' : null
      if (dir !== null) {
        e.preventDefault()

        if (dir === 'down') {
          this.currentPanelElement.$el.focus()
        }
      }
    },
  },
}
</script>
