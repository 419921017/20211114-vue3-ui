<template>
  <z-button
    icon="bi"
    :loading="buttonLoading"
    @click="buttonClick"
  >按钮</z-button>
  <z-icon name="1" />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "@vue/runtime-core";

function useButton() {
  const buttonLoading = ref(true)
  let timer: NodeJS.Timeout
  onMounted(() => {
    timer = setTimeout(() => {
      buttonLoading.value = false
    }, 2000)
  })
  onUnmounted(() => {
    timer && clearTimeout(timer)
  })

  const buttonClick = () => {
    alert('点击按钮')
  }

  return {
    buttonLoading,
    buttonClick
  }

}
export default defineComponent({
  setup() {
    return {
      ...useButton()
    }
  }
})
</script>