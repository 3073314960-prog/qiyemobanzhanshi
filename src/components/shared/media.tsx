import * as React from "react";
import Image from "next/image";
import { Factory } from "lucide-react";

import { cn } from "@/lib/utils";
import type { MediaImage } from "@/config/types";

/**
 * 统一的媒体组件：
 * - 配置了真实图片 src 时，渲染 next/image 优化图片；
 * - 未配置时，渲染工业风格占位图（蓝图网格 + 角标 + 图标），保证模板开箱即美观，
 *   且更换真实产品图只需在 config 数据文件中补充 image.src 即可。
 */
interface MediaProps {
  image?: MediaImage;
  alt?: string;
  label?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  iconClassName?: string;
}

export function Media({
  image,
  alt,
  label,
  priority = false,
  fill = false,
  sizes,
  className,
  imageClassName,
  iconClassName,
}: MediaProps) {
  if (image?.src) {
    return (
      <div className={cn("relative overflow-hidden bg-muted", className)}>
        <Image
          src={image.src}
          alt={image.alt ?? alt ?? label ?? ""}
          fill={fill}
          width={!fill ? 1200 : undefined}
          height={!fill ? 800 : undefined}
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt ?? label ?? "示意图片"}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-navy",
        className,
      )}
    >
      <div className="bg-blueprint-dark absolute inset-0 opacity-70" aria-hidden />
      {/* 工程图角标 */}
      <span className="absolute top-3 left-3 h-4 w-4 border-t-2 border-l-2 border-white/30" aria-hidden />
      <span className="absolute top-3 right-3 h-4 w-4 border-t-2 border-r-2 border-white/30" aria-hidden />
      <span className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-white/30" aria-hidden />
      <span className="absolute right-3 bottom-3 h-4 w-4 border-r-2 border-b-2 border-white/30" aria-hidden />
      <Factory
        className={cn("h-10 w-10 text-white/30", iconClassName)}
        aria-hidden
      />
      {label ? (
        <span className="absolute bottom-4 left-4 text-xs font-medium tracking-wider text-white/50 uppercase">
          {label}
        </span>
      ) : null}
    </div>
  );
}
