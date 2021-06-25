const { resolve } = require('path');
const { ROOT_PATH } = require('./constants');

require('dotenv').config({
  path: resolve(ROOT_PATH, `.env.${process.env.NODE_ENV}`),
});
