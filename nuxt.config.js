import { defineNuxtConfig } from 'nuxt/config';
import { log } from './log.js';

export default defineNuxtConfig({
  // target: 'static',
  // generate: {
  //   routes: [
  //     '/',
  //     '/next',
  //   ],
  //   crawler: false,
  // },
  plugins: [
    '~/plugins/plugin.js',
  ],
  router: {
    middleware: 'router-middleware'
  },
  hooks: {
    ...Object.fromEntries([
      'page:start',
      'page:finish',
      'app:rendered',
      'afterResponse',
    ].map((name) => [name, () => {
      log('[nuxt hooks]:', name);
    }])),
  },
});
