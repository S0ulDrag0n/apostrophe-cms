const compression = require('compression');

module.exports = {
  name: 'compression-module',
  extend: 'apostrophe-module',

  construct: function(self, options) {
    self.apos.app.use(compression());
  }
};
