/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'primary-gradient': 'linear-gradient(30deg, #06b6d4,#c026d3)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
