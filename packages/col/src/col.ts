import { defineComponent, h, inject } from '@vue/runtime-core';
import { computed } from 'vue';

export default defineComponent({
  name: 'ZCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    xs: {
      type: Number,
      default: 24,
    },
    sm: {
      type: Number,
      default: 24,
    },
    md: {
      type: Number,
      default: 24,
    },
    lg: {
      type: Number,
      default: 24,
    },
    xl: {
      type: Number,
      default: 24,
    },
  },
  setup(props, ctx) {
    const gutter = inject('ZRow', 0);
    const pos = ['span', 'offset'] as const;
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
    const classes = computed(() => {
      const ret: string[] = [];
      pos.forEach((item) => {
        const size = props[item];
        if (typeof size == 'number' && size > 0) {
          ret.push(`z-col-${item}-${props[item]}`);
        }
      });
      sizes.forEach((size) => {
        if (typeof props[size] === 'number') {
          ret.push(`z-col-${size}-${props[size]}`);
        }
      });
      return ['z-col', ...ret];
    });

    const styles = computed(() => {
      // 设置间距
      if (gutter) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px',
        };
      }
      return {};
    });

    return () =>
      h(
        props.tag,
        { class: classes.value, style: styles.value },
        ctx.slots.default?.()
      );
  },
});
