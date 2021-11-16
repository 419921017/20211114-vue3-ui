import { App } from 'vue';
import Button from './src/button.vue';

Button.install = (app: App) => {
  app.component(Button.name, Button);
  return app;
};

type IWithInstall<T> = T & { install(app: App): App };

const _Button: IWithInstall<typeof Button> = Button;

export default _Button;
