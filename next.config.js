/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  // images: {
  //   loader: 'custom',
  // },
  images: {
    domains: ['a0.muscache.com'], // <== Domain name
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
