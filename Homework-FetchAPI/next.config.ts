import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const BASE_ISHOP_API_URL = "https://dummyjson.com/products/";
const nextConfig: NextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },  
  ],
}
  /* config options here */
};
export default nextConfig;