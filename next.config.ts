
import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // GitHub Pages project repository path
  basePath: isGitHubPages ? "/webhosting-guides" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
