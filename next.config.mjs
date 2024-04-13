/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pocketwatch-865fc.appspot.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glsl$/,
      use: 'glsl-shader-loader',
    });

    return config;
  },
};

export default nextConfig;
