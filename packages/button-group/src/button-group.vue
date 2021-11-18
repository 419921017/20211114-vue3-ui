<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'ButtonGroup'
})
</script>

<style lang="scss" scoped>
</style>