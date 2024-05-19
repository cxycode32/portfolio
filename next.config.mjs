/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.micelistudios.com",
        port: "",
        pathname: "/sandbox/scrolltrigger/imgs/**",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "www.udiscovermusic.com",
        port: "",
        pathname: "/wp-content/uploads/2015/10/**",
      },
    ],
  },
};

export default nextConfig;
