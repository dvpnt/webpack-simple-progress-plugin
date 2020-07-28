const ora = require('ora');

const spinner = ora({
	text: 'Building',
	color: 'yellow'
});

class SimpleProgressPlugin {
	apply(compiler) {
		compiler.hooks.beforeCompile.tap(
			'SimpleProgressPlugin',
			() => spinner.start()
		);

		compiler.hooks.afterCompile.tap(
			'SimpleProgressPlugin',
			() => spinner.stop()
		);
	}
}

module.exports = SimpleProgressPlugin;
