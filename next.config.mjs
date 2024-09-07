/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'indcdn.indmoney.com',
          // Optional: You can specify pathname or port if needed
          // pathname: '/**',
          // port: ''
        },
      ],
    },
  };
  
  export default nextConfig;