/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config, options) => {
		config.experiments = {
			layers: true,
			topLevelAwait: true
		}

		return config
	}
}

module.exports = nextConfig
