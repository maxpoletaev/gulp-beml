gulp-beml
=========
> Plugin for processing [BEML][beml] templates


Usage
-----

First, install gulp-beml as a development dependency:

```shell
npm install gulp-beml
```

Then, add it to your gulpfile.js:

```javascript
var beml = require('gulp-beml');

gulp.src('./src/*.html')
  .pipe(beml({
    elemPrefix: '__',
    modPrefix: '_',
    modDlmtr: '_'
  }))
  .pipe(gulp.dest('./dist'));
```

[beml]: https://github.com/zenwalker/node-beml
