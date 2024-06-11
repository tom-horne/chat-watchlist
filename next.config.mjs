/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bdmtkvvcfwqvvnpfxixu.supabase.co",
        // port: "",
        // pathname: "/storage/v1/object/public/avatars/**",
      },
    ],
  },
  // bdmtkvvcfwqvvnpfxixu.supabase.co
};

export default nextConfig;
