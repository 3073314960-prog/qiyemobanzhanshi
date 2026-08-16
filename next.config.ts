import type { NextConfig } from "next";

// 静态导出（用于 GitHub Pages 等纯静态托管）：
//   构建时设置 NEXT_STATIC_EXPORT=1 即生成 out/ 静态目录，并禁用图片优化、开启尾斜杠。
//   未设置时保持默认（支持 /api 路由，适用于 Vercel / Netlify / 自建 Node 服务）。
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  basePath,
  reactStrictMode: true,
  ...(isStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
