import Row from './src/row';
import { App } from '@vue/runtime-core';

Row.install = (app: App): void => {
  app.component(Row.name, Row);
};

export default Row;
