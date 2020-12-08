module.exports = {
	distDir: 'build',
	poweredByHeader: false,
	assetPrefix: process.env.ASSET_HOST || '',
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: ['@svgr/webpack'],
		});

		return config;
	},
};
