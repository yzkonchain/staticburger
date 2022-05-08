/** @type {import('next').NextConfig} */

let baseURL, basePath
const mode = 'github'
switch (mode) {
	case 'github':
		baseURL = 'https://yzkonchain.github.io'
		basePath = '/staticburger'
		break
	case 'server':
		baseURL = 'http://127.0.0.1:80'
		basePath = ''
		break
	default:
		baseURL = '/'
		basePath = ''
		break
}

module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	basePath,
	assetPrefix: baseURL + basePath,
	images: {
		loader: mode === 'dev' ? 'akamai' : 'imgix',
		path: baseURL + basePath,
	},
	webpack: (config) => {
		config.resolve.alias['@'] = require('path').resolve('.')
		config.resolve.fallback = {
			process: false,
			net: false,
			zlib: false,
			stream: false,
			tls: false,
			crypto: false,
			http: false,
			https: false,
			fs: false,
			path: false,
			os: false,
		}
		return config
	},
}
