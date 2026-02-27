/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: process.env.CRM_API_URL
          ? `${process.env.CRM_API_URL}`
          : 'http://localhost:3001',
      },
      {
        source: '/admin/:path*',
        destination: process.env.CRM_API_URL
          ? `${process.env.CRM_API_URL}/:path*`
          : 'http://localhost:3001/:path*',
      },
      // Keep /crm just in case there are internal references
      {
        source: '/crm/:path*',
        destination: process.env.CRM_API_URL
          ? `${process.env.CRM_API_URL}/:path*`
          : 'http://localhost:3001/:path*',
      },
    ];
  },
};

export default nextConfig;
