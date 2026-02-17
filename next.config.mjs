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
        source: '/crm/:path*',
        destination: process.env.CRM_API_URL
          ? `${process.env.CRM_API_URL}/:path*`
          : 'http://localhost:3001/:path*',
      },
    ];
  },
};

export default nextConfig;
