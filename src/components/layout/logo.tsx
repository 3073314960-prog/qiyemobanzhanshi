import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  dark?: boolean;
}

/**
 * 品牌 Logo。替换企业 Logo 时，只需修改 config/site.ts 中的品牌信息，
 * 或在此替换 mark 为实际 Logo 图片。
 */
export function Logo({ className, dark = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label={`${siteConfig.name} - 首页`}
    >
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        role="img"
        aria-hidden
      >
        <rect width="40" height="40" rx="8" className="fill-primary" />
        <path
          d="M20 7l11 6.5v13L20 33 9 26.5v-13L20 7z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="20" cy="20" r="3.2" fill="white" />
        <path d="M20 2v6M20 32v6M2 20h6M32 20h6" stroke="white" strokeWidth="2" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            dark ? "text-white" : "text-foreground",
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "mt-0.5 text-[10px] font-semibold tracking-[0.22em]",
            dark ? "text-white/60" : "text-muted-foreground",
          )}
        >
          {siteConfig.nameEn}
        </span>
      </span>
    </Link>
  );
}
