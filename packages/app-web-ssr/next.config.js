const { resolve } = require('path');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withFonts = require('next-fonts');
const { ROOT_PATH } = require('../../constants');
const { i18n } = require('./next-i18next.config');

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

  rewrites: async () => ({
    afterFiles: [
      {
        source: '/',
        destination: `/${i18n.defaultLocale}`,
      },
      {
        source: '/:path*',
        destination: `/${i18n.defaultLocale}/:path*`,
      },
    ],
  }),

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
  [[optimizedImages, { handleImages: ['png'] }], [withTM(overrides.transpileModules)], [withFonts]],
  nextConfig,
);
