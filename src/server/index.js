require('babel-polyfill');
const universalHotReload = require('universal-hot-reload').default;

universalHotReload(
  require('../../webpack.config.server.dev.js'),
  require('../../webpack.config.client.dev.js'));

