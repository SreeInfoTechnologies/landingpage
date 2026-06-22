/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a fully static site in ./out for GitHub Pages.
  output: "export",
  // Served from a custom domain root (sreeinfotechnologies.com), so no basePath.
  // Next/Image optimization needs a server, so disable it for the static build.
  images: {
    unoptimized: true,
  },
  // Emit /path/index.html instead of /path.html — friendliest for static hosts.
  trailingSlash: true,
};

export default nextConfig;
