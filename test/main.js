var gutil = require('gulp-util')
  , should = require('should')
  , beml = require('..')
  , fs = require('fs');

describe('gulp-beml', function() {

  it('process template', function(done) {
    var stream = beml();

    var file = new gutil.File({
        path: 'test/fixtures/index.beml'
      , base: 'test/fixtures'
      , cwd: 'test'
      , contents: fs.readFileSync('test/fixtures/index.beml')
    });

    stream.on('error', function(err) {
      done();
    });

    stream.on('data', function(newFile) {
      should.exist(newFile);
      should.exist(newFile.contents);

      var expected = fs.readFileSync('test/expected/index.html', 'utf8');
      String(newFile.contents).should.equal(expected);
      done();
    });

    stream.write(file);
    stream.end();
  });

});
