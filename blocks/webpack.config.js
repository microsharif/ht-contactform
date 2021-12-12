const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		'htcontactform-block': './src/blocks.js'
	},
	output: {
		path: path.join(__dirname, './build'),
		filename: '[name].js'
	}
};