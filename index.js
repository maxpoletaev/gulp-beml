var map = require('map-stream');
var beml = require('beml');

module.exports = function() {

  function bemlStream(file, callback) {
    if (!file.isNull()) {
      var html = beml.process(file.contents);
      file.contents = new Buffer(html);
      callback(null, file);
    }
  }

  return map(bemlStream);

};
