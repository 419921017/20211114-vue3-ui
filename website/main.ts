import { createApp } from 'vue';
import App from './App.vue';

import ZUI from 'z-ui';
// import ZUI from '../lib/index.esm.js';
// import Button from '../lib/button';

import 'theme-chalk/src/index.scss';

createApp(App).use(ZUI).mount('#app');
