var map = require('map-stream');
var beml = require('beml');

module.exports = function(config) {

  function bemlStream(file, callback) {
    if (!file.isNull()) {
      var html = beml(file.contents, config);
      file.contents = new Buffer(html);
      callback(null, file);
    }
  }

  return map(bemlStream);

};
