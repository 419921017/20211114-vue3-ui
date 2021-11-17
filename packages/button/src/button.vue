<template>
  <button
    :class="classes"
    @click="handleClick"
    :disabled="disabled"
  >
    <i
      v-if="loading"
      name="loading"
    ></i>
    <i
      v-if="icon && !loading"
      :class="icon"
    ></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  name: 'ZButton',
  props: {
    type: {
      type: String as PropType<'large' | 'medium' | 'small' | 'mini'>,
      default: "primary",
      validator: (val: string) => {
        return [
          "default",
          "primary",
          "success",
          "warning",
          "danger",
          "info",
        ].includes(val);
      },
    },
    size: {
      type: String as PropType<ComponentSize>,
    },
    icon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    disabled: Boolean,
    round: Boolean,
  },
  emits: ["click"],
  setup(props, ctx) {
    const classes = computed(() => [
      'z-button',
      `z-button--${props.type}`,
      `${props.size ? 'z-button--' + props.size : ''} `,
      {
        'is-disabled': props.disabled,
        'is-loading': props.loading,
        'is-round': props.round
      }
    ])
    const handleClick = (e: Event) => {
      ctx.emit('click', e)
    }

    return {
      classes,
      handleClick
    }
  }
})

</script>

<style lang="scss" scoped>
@import "./button.scss";
</style>


