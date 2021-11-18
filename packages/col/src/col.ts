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
    size: {
      type: String,
      default: 'md',
    },
  },
  setup(props, ctx) {
    const gutter = inject('ZRow', 0);
    const pos = ['span', 'offset'] as const;
    const classes = computed(() => {
      const ret: string[] = [];
      pos.forEach((item) => {
        const size = props[item];
        if (typeof size == 'number' && size > 0) {
          ret.push(`z-col-${item}-${props[item]}`);
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
