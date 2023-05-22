/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // env: {
  //   APP_DEV: "http://localhost:3000",
  //   APP_PROD: "",
  //   MONGO_URI: "mongodb+srv://noormessi1054:M4EqJ3bxNTK0ylpl@cluster0.0ruacg5.mongodb.net/products-app?retryWrites=true&w=majority"
  // },
  images: {
    domains: ["images.pexels.com"],
  },
}

module.exports = nextConfig
