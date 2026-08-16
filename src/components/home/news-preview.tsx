import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { getLatestNews } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/** 新闻动态（首页） */
export function NewsPreview() {
  const items = getLatestNews(3);

  return (
    <section className="bg-secondary/40 py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="News & Insights"
            title="新闻动态"
            description="关注华域精工的最新动态、行业趋势与展会活动。"
          />
          <Button asChild variant="outline" className="w-fit shrink-0">
            <Link href="/news">
              全部新闻
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group flex flex-col rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <Badge variant="secondary" className="text-muted-foreground">
                  {item.category}
                </Badge>
                <time
                  dateTime={item.date}
                  className="font-mono text-xs text-muted-foreground"
                >
                  {formatDate(item.date)}
                </time>
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {item.summary}
              </p>
              <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-primary">
                阅读全文
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
