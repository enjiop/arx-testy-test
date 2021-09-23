<template>
  <div class="c-tabs">
    <ul role="tablist" class="c-tabs__header">
      <li
        ref="tab"
        class="c-tabs__item"
        v-for="tab in data.tabs"
        :key="tab.title"
        :class="{ '-active': (selectedUid === tab._uid) }"
        role="presentation"
      >
        <button
          role="tab"
          class="c-tabs__button"
          :id="`tab-${tab._uid}`"
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
      ref="panel"
      v-for="tab in data.tabs"
      :key="tab._uid"
      :id="`tab-${tab._uid}`"
      :title="tab.title"
      :data="tab"
      :aria-labelledby="`tab-${tab._uid}`"
      :isActive="selectedUid === tab._uid"
      tabindex="-1"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      selectedUid: '',
    }
  },

  mounted() {
    const firstTabUid = this.data.tabs[0]._uid;
    this.selectTab(firstTabUid)
  },

  computed: {
    currentPanelElement() {
      return this.$refs.panel.find(item => item.$el.id === `tab-${this.selectedUid}`)
    }
  },

  methods: {
    selectTab(uid) {
      this.selectedUid = uid
    },

    handleTabKeyDown(e) {
      let dir = e.which === 40 ? 'down' : null;
      if (dir !== null) {
        e.preventDefault();
        dir === 'down' ? this.currentPanelElement.$el.focus() : void 0;
      }
    }
  }
}
</script>
