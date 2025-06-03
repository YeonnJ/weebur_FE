import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"],
    formats: ["image/webp"],
  },
};

export default withVanillaExtract(nextConfig);
