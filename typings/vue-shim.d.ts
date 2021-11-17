declare module '*.vue' {
  import { App, defineComponent } from '@vue/runtime-core';

  const component: ReturnType<typeof defineComponent> & {
    install(app: App): App;
  };
  export default component;
}

declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini';
