<template>
  <div
    v-editable="blok"
    class="py-2">
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h1 class="c-heading -h1">{{ blok.name }}</h1>
    <h2 class="c-heading -h2">{{ blok.name }}</h2>
    <h3 class="c-heading -h3">{{ blok.name }}</h3>
    <h4 class="c-heading -h4">{{ blok.name }}</h4>
    <h5 class="c-heading -h5">{{ blok.name }}</h5>
    <h6 class="c-heading -h6">{{ blok.name }}</h6>
    <p class="c-text -t1">{{ blok.name }}</p>
    <p class="c-text -t2">{{ blok.name }}</p>
    <p class="c-text -t3">{{ blok.name }}</p>
    <p class="c-text -t4">{{ blok.name }}</p>
    <base-button :value="blok.name" />
    <base-button :value="blok.name" to="/" />
    <base-button :value="blok.name" isInnerLink to="/" />
    <base-button :value="blok.name" to="/" />
    <base-button :value="blok.name" disabled />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
