# webpack-simple-progress-plugin
[![Build Status](https://travis-ci.org/dvpnt/webpack-simple-progress-plugin.svg?branch=master)](https://travis-ci.org/dvpnt/webpack-simple-progress-plugin)
[![NPM Version](https://img.shields.io/npm/v/webpack-simple-progress-plugin.svg)](https://www.npmjs.com/package/webpack-simple-progress-plugin)


Ligthweight [spinner](https://github.com/sindresorhus/ora) which indicates just compiling process.

## Installation

```sh
$ npm install --save-dev webpack-simple-progress-plugin
# or
$ yarn add --dev webpack-simple-progress-plugin
```

## Example

```js
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');

module.exports = {
	plugins: [
		new SimpleProgressPlugin()
	]
};
```

## License

[The MIT License (MIT)](/LICENSE)
