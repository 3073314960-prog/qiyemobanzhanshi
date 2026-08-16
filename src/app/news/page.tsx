import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { newsArticles } from "@/config/news";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Media } from "@/components/shared/media";
import { Badge } from "@/components/ui/badge";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = buildMetadata({
  title: "新闻动态",
  description: `${siteConfig.name}新闻动态：公司新闻、行业趋势、技术进展与展会活动的最新资讯。`,
  path: "/news",
});

const sorted = [...newsArticles].sort(
  (a, b) => +new Date(b.date) - +new Date(a.date),
);
const [featured, ...rest] = sorted;

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="新闻动态"
        enTitle="News & Insights"
        description="了解公司最新动态与行业前沿趋势。"
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "新闻动态" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          {/* 头条 */}
          {featured ? (
            <Link
              href={`/news/${featured.slug}`}
              className="group grid grid-cols-1 overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg lg:grid-cols-2"
            >
              <Media
                image={featured.image}
                label={featured.category}
                className="aspect-[16/9] lg:aspect-auto lg:h-full"
              />
              <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Badge variant="accent">{featured.category}</Badge>
                  <time dateTime={featured.date} className="font-mono text-xs text-muted-foreground">
                    {formatDate(featured.date)}
                  </time>
                </div>
                <h2 className="text-xl font-bold leading-snug text-foreground group-hover:text-primary sm:text-2xl">
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {featured.summary}
                </p>
                <span className="flex items-center gap-1 text-sm font-medium text-primary">
                  阅读全文
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ) : null}

          {/* 列表 */}
          <div className="mt-8 divide-y divide-border rounded-xl border bg-card">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group flex flex-col gap-2 p-6 transition-colors hover:bg-secondary/40 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex shrink-0 items-center gap-3 sm:w-52 sm:flex-col sm:items-start sm:gap-1">
                  <Badge variant="secondary" className="w-fit text-muted-foreground">
                    {article.category}
                  </Badge>
                  <time dateTime={article.date} className="font-mono text-xs text-muted-foreground">
                    {formatDate(article.date)}
                  </time>
                </div>
                <div className="flex flex-1 items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
