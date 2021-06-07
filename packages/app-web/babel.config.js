module.exports = {
  extends: '../../babel.config.js',
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['react-native-web', { commonjs: true }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
};
