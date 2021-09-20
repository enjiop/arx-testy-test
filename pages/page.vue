<template>
  <div class="c-page">
    <base-header />
    <base-aside :page-title="blok.title" :blocks="blocks"/>
    <main-menu />
    <main class="main">
      <div class="o-container">
        <content-block
          v-for="block in blok.blocks"
          :key="block._uuid"
          :data="block"
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },

  computed: {
    blocks() {
      const res = this.blok.blocks.map(({_uid, title}) => {
        return {
          _uid,
          title,
        }
      });
      return res
    }
  }
}
</script>
