const extYaml = require('js-yaml');

module.exports = function(eleventyConfig) {

	eleventyConfig.addDataExtension('yaml', contents => extYaml.load(contents));
	eleventyConfig.addDataExtension('yml', contents => extYaml.load(contents));

	eleventyConfig.addPassthroughCopy('./src/assets');
	eleventyConfig.addPassthroughCopy('./src/js');

	eleventyConfig.setUseGitIgnore(true);

	// конфигурация BrowserSync
	eleventyConfig.setBrowserSyncConfig({

		server: {
			baseDir: [
				'./dist'
			]
		},

		files: [
			'./src/sass/**/*.*',
			'./src/js/**/*.*',
		],

		ghostMode: false,
		watch: true,
		notify: false,
		ui: false

	});

	return {

		dir: {
			input: 'src',
			output: 'dist',
			includes: 'includes/',
			layouts: 'layouts/',
			data: 'data'
		},

		templateFormats: ['md', 'njk'],
		htmlTemplateEngine: 'njk',
		passthroughFileCopy: true,
		jsDataFileSuffix: '.data'

	}

}