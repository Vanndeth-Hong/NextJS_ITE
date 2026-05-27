import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "i1-c.pinimg.com",
        port: "",
        pathname: "/control1/736x/5d/a3/60/5da360c98b9af0ad709fe18606992229.jpg"
      }
    ]
  }
};

export default nextConfig;
