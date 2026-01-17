/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/Doctor-Azmy",
  assetPrefix: "/Doctor-Azmy/",
}

export default nextConfig
