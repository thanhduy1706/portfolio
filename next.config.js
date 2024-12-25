/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
};
experimental: {
  serverActions: true;
}

module.exports = nextConfig;
