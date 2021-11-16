import { App } from 'vue';
import Button from './src/button.vue';
declare type IWithInstall<T> = T & {
    install(app: App): App;
};
declare const _Button: IWithInstall<typeof Button>;
export default _Button;
