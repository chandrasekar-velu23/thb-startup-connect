const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production-only base path for the specific event
  basePath: isProd ? '/startup-connect/masterclasses-session-for-early-stage-entrepreneurs' : '',

  // Optimization
  swcMinify: true,
  compress: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },

  // Redirects
  async redirects() {
    const redirects = [];
    
    // Redirect the root of the hosted domain to the official site in production
    // This handles navigation or backward moves that exit the event sub-path
    if (isProd) {
      redirects.push({
        source: '/',
        destination: 'https://thehalfbrick.com',
        permanent: false,
        basePath: false, // Handle the domain root outside of our basePath
      });
    }

    return redirects;
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

  // Webpack config
  webpack: (config) => {
    return config
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['zod', 'mongoose'],
  },
}

module.exports = nextConfig
