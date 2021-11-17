module.exports = {
  presets: [
    '@babel/preset-env',
    'babel-preset-typescript-vue3',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    utils: {
      plugins: [
        // ?
        [
          'babel-plugin-module-resolver', // 为了能正确找到z-ui模块
          { root: 'z-ui' },
        ],
      ],
    },
  },
};
