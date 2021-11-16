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
};
