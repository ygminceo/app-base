const { resolve } = require('path');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const { ROOT_PATH } = require('../../constants');

const overrides = require(resolve(
  ROOT_PATH,
  'packages/lib-frontend/src/web/webpack.config-overrides',
));

const nextConfig = {
  webpack5: false,

  experimental: { externalDir: true },

  eslint: {
    build: true,
    dev: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }

    if (!isServer) {
      config.node = { fs: 'empty' };
    }

    config.plugins = [...(config.plugins || []), ...overrides.config.plugins];

    config.resolve = {
      ...config.resovle,

      alias: {
        ...(config.resolve.alias || {}),
        ...(overrides.config.resolve.alias || {}),
      },
      extensions: [
        '.next.ts',
        '.next.tsx',
        '.next.js',
        '.next.jsx',
        ...(config.resolve.extensions || []),
        ...(overrides.config.resolve.extensions || []),
        '...',
      ],
      modules: [...(config.resolve.modules || []), ...(overrides.config.resolve.modules || [])],
      plugins: [...(config.resolve.plugins || []), ...overrides.config.resolve.plugins],
    };

    return config;
  },
};

module.exports = withPlugins(
  [
    [optimizedImages],
    [withTM(overrides.transpileModules)],
    // [withImages],
    [withFonts],
  ],
  nextConfig,
);
