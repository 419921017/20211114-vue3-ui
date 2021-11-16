import Button from '@z-ui/button';
import Icon from '@z-ui/Icon';
import { App } from '@vue/runtime-core';

const components = [Button, Icon];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
  return app;
};

export default { install };
