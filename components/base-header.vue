<template>
  <header class="c-header">
      <nuxt-link class="c-header__logo" to="/" aria-label="Arx. A 'FAIRFAX' company.">
        <svg width="134" height="100">
          <use href="icons/sprite.svg#logo-red"></use>
        </svg>
      </nuxt-link>
      <button class="c-burger" @click="handleClick" :class="{'c-burger--active': isActive}" aria-label="Відкрити меню"></button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },

  methods: {
    handleClick() {
      this.isActive = !this.isActive
      this.$emit('toggle-menu')
    }
  }
}
</script>
