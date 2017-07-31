const path = require('path');
const map = require('map-stream');
const beml = require('beml');
const gutil = require('gulp-util');
const through = require('through2');

module.exports = (opts) => {

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-beml', 'Streaming not supported'));
            return;
        }

        try {
            file.contents = new Buffer(beml(file.contents.toString(), opts));
            this.push(file);
        } catch (err) {

            Object.assign(err, {
                filePath: file.path,
                fileName: path.basename(file.path),
                message: `${err.message} in (${path.basename(file.path)})`
            });

            this.emit('error', new gutil.PluginError('gulp-beml', err));
        }

        cb();
    });
};