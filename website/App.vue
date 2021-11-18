<template>
  <z-button
    icon="bi"
    :loading="buttonLoading"
    @click="buttonClick"
  >按钮</z-button>
  <z-icon name="1" />
  <z-button-group>
    <z-button
      type="primary"
      icon="crm"
    >上一页</z-button>
    <z-button type="primary">下一页<i class="z-icon-shenpi"></i></z-button>
  </z-button-group>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useButton } from './hook/useButton';

export default defineComponent({
  setup() {
    return {
      ...useButton()
    }
  }
})
</script>