import { join, relative } from 'path';

export const baseConfig = {
  frameworkVersion: '2',

  package: {
    individually: true,
  },

  custom: {
    dotenv: {
      path: join(__dirname, `../../../../env/.env.${process.env.NODE_ENV}`),
    },
    webpack: {
      packager: 'yarn',
      webpackConfig: relative(process.cwd(), join(__dirname, 'webpack.config.js')),
    },
    'serverless-offline': {
      allowCache: false,
      //TODO: to env
      host: '127.0.0.1',
      httpsProtocol: '',
      noPrependStageInUrl: true,
      useChildProcesses: true,
    },
  },
};
