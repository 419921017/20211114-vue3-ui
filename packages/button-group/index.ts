import ButtonGroup from './src/button-group.vue';
import { App } from '@vue/runtime-core';

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup);
};

type IWithInstall<T> = T & { install(app: App): void };

const _ButtonGroup: IWithInstall<typeof ButtonGroup> = ButtonGroup;

export default _ButtonGroup;
