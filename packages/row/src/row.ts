import { defineComponent, h, provide } from '@vue/runtime-core';
import { computed } from 'vue';

export default defineComponent({
  name: 'ZRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: 'start',
    },
  },
  setup(props, ctx) {
    provide('ZRow', props.gutter);
    const styles = computed(() => {
      const ret = {
        marginLeft: '',
        marginRight: '',
      };
      if (props.gutter) {
        // 放大宽度
        ret.marginLeft = `-${props.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    });

    const classes = computed(() => [
      'z-row',
      props.justify !== 'start' ? `is-justify-${props.justify}` : '',
    ]);

    return () =>
      h(
        props.tag,
        { class: classes.value, style: styles.value },
        ctx.slots.default?.()
      );
  },
});
