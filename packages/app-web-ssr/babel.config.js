module.exports = {
  extends: '../../babel.config.js',
  presets: ['next/babel'],
  plugins: [
    ['react-native-web', { commonjs: true }],
    ['styled-components', { ssr: true }],
  ],
};
