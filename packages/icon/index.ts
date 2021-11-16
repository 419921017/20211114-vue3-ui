import { App } from 'vue';
import Icon from './src/icon.vue';

Icon.install = (app: App) => {
  app.component(Icon.name, Icon);
  return app;
};

type IWithInstall<T> = T & { install(app: App): App };

const _Icon: IWithInstall<typeof Icon> = Icon;

export default _Icon;
