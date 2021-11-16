<template>
  <div>
    <i :class="`z-icon-${name}`"></i>
  </div>
</template>

 <script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: 'ZIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
})
 </script>



