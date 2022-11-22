export const parameters = {
	backgrounds: {
		default: 'light',
		values: [
			{ name: 'light', value: '#ffffff' },
			{ name: 'dark', value: '#2B2B2B' },
		],
	},
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
	(Story, context) => {
		return (
			<div style={{ padding: '1rem' }}>
				<div>
					<Story {...context} />
				</div>
			</div>
		);
	}
];
