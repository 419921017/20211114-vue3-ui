import { defineComponent, openBlock, createElementBlock, createElementVNode } from 'vue';

var script = defineComponent({
    name: 'ZButton'
});

const _hoisted_1 = /*#__PURE__*/createElementVNode("button", null, "按钮", -1 /* HOISTED */);
const _hoisted_2 = [
  _hoisted_1
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, _hoisted_2))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    app.component(script.name, script);
    return app;
};
const _Button = script;

export { _Button as default };
