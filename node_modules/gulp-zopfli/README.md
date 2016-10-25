gulp-zopfli
===========

a [Zopfli](http://en.wikipedia.org/wiki/Zopfli) plugin for [gulp](https://github.com/wearefractal/gulp),
based on [node-zopfli](https://npmjs.org/package/node-zopfli).

[![Build Status](https://secure.travis-ci.org/pierreinglebert/gulp-zopfli.png)](http://travis-ci.org/pierreinglebert/gulp-zopfli)
[![Coverage Status](https://coveralls.io/repos/pierreinglebert/gulp-zopfli/badge.png?branch=master)](https://coveralls.io/r/pierreinglebert/gulp-zopfli?branch=master)

## Install

```
npm install --save-dev gulp-zopfli
```

##Options

### format `String`

Choose an output format, you can choose between `gzip`, `zlib` or `deflate`. Defaults to gzip.

```javascript
 zopfli({ format: 'zlib' })
 ```


### append `Boolean`

Appends `.gz`, `.zz` or `.deflate` file extension if true depending on the format chosen. Defaults to true.

```javascript
 zopfli({ append: true })
 ```

### threshold `String|Number|Boolean`

Minimum size required to compress a file. Defaults to false.

```javascript
zopfli({ threshold: '1kb' })
```

```javascript
zopfli({ threshold: 1024 })
```

```javascript
zopfli({ threshold: true })
```

### zopfliOptions `Object`

Options object to pass through to node-zopfli. See [node-zopfli documentation](https://github.com/pierreinglebert/node-zopfli#options) for more information.

```javascript
{
    verbose: false,
    verbose_more: false,
    numiterations: 15,
    blocksplitting: true,
    blocksplittinglast: false,
    blocksplittingmax: 15
};
```

## Examples

```javascript
var gulp = require("gulp");
var zopfli = require("gulp-zopfli");

gulp.task("compress", function() {
	gulp.src("./dev/scripts/*.js")
	.pipe(zopfli())
	.pipe(gulp.dest("./public/scripts"));
});

gulp.task("default", function() {
  gulp.run("compress");
});
```

Credit
======

This plugin is based on [gulp-gzip](https://github.com/jstuckey/gulp-gzip).
