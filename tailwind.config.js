module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./pages/**/*.{js,jsx,ts,tsx}',
			'./components/**/*.{js,jsx,ts,tsx}',
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#61B4C0',
				'primary-light': '#9BD8E1',
				black: '#374345',
				secondary: '#C8C3C7',
				'secondary-light': '#DBD5D9',
				error: '#D71947',
				info: '#2285FF',
			},
			fontFamily: {
				sans: ['Quicksand', 'sans-serif'],
			},
			height: {
				'128': '32rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
