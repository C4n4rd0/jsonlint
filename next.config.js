const result = require('dotenv').config()

module.exports = {
	reactStrictMode: false,
	images: {
		unoptimized: true,
	},
	async redirects() {
		return [
			{
				source: '/icons/icon-hires.png',
				destination: '/images/logo.png',
				permanent: true,
			}
		]
	}
}