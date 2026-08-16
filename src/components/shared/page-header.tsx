import * as React from "react";

import { Container } from "./container";
import { Breadcrumbs, type BreadcrumbItem } from "./breadcrumbs";

interface PageHeaderProps {
  title: string;
  enTitle?: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}

/**
 * 内页顶部横幅（关于 / 产品 / 案例 / 新闻 / 联系页共用）。
 */
export function PageHeader({
  title,
  enTitle,
  description,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="bg-blueprint-dark absolute inset-0" aria-hidden />
      <div
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-14 sm:py-20">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-signal-400 uppercase">
              {enTitle}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                {description}
              </p>
            ) : null}
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}
