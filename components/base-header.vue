<template>
  <header class="c-header">
      <a class="c-header__logo" to="/" aria-label="Arx. A 'FAIRFAX' company.">
        <svg width="134" height="100">
          <use href="icons/sprite.svg#logo-red"></use>
        </svg>
      </a>
      <button class="c-burger" @click="isActive = !isActive" :class="{'c-burger--active': isActive}" aria-label="Відкрити меню"></button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
}
</script>
