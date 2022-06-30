export default {
  target: 'static',
  generate: {
    routes: [
      '/',
      '/next',
    ],
    crawler: false,
  },
  plugins: [
    '~/plugins/plugin.js',
  ],
  router: {
    middleware: 'router-middleware'
  },
}
