module.exports = {
  extends: '../../babel.config.js',
  presets: [['@babel/preset-env'], '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-transform-runtime',
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
  ],
};
