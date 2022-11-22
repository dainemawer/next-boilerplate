module.exports = {
  "stories": [
    "../design-system/**/*.stories.tsx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
		{
			name: '@storybook/addon-postcss',
			options: {
				styleLoaderOptions: {},
				cssLoaderOptions: {
					modules: true,
					sourceMap: true,
					importLoaders: 1,
				},
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		}
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
