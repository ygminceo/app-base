import { join, relative } from 'path';
import { config } from '@lib/common/core/utils/Config/Config';

const HOST = config.get<string>('HOST', '');

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
      host: HOST,
      httpsProtocol: '',
      noPrependStageInUrl: true,
      useChildProcesses: true,
    },
  },
};
