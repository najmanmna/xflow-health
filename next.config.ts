import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* --- 1. React Strict Mode --- */
  // Helps catch bugs during development (renders components twice)
  reactStrictMode: true,

  /* --- 2. Image Optimization Rules --- */
  images: {
    // Modern pattern to allow external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // For your Numan-style placeholder images
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com", // For product images (if you connect Shopify later)
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Common for Google hosted assets
        port: "",
        pathname: "/**",
      },
    ],
    // Allow SVGs to be served as images (useful for logos)
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  /* --- 3. Experimental / Advanced (Optional) --- */
  // If you plan to deploy to Hostinger VPS manually later, you might need this:
  // output: 'standalone', 
};

export default nextConfig;