const { resolve } = require('path');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withFonts = require('next-fonts');
const { ROOT_PATH } = require('../../constants');

const overrides = require(resolve(ROOT_PATH, 'packages/lib-frontend/src/web/webpack.config-overrides'));

const nextConfig = {
  future: { webpack5: true },

  experimental: { externalDir: true },

  eslint: {
    build: true,
    dev: false,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => {
  //   return {
  //     '/': { page: '/' },
  //   };
  // },

  webpack: (config) => {
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
  [[optimizedImages, { handleImages: ['png'] }], [withTM(overrides.transpileModules)], [withFonts]],
  nextConfig,
);
