/** @type {import('next').NextConfig} */
const raw = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim();
const basePath =
  raw === "" ? undefined : raw.startsWith("/") ? raw : `/${raw}`;

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
