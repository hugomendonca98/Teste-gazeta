/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'https://clube-static.clubegazetadopovo.com.br', 'clube-static.clubegazetadopovo.com.br']
  }
}

module.exports = nextConfig;
