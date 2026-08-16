import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, User } from "lucide-react";

import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { newsArticles, getNewsBySlug } from "@/config/news";
import { getRelatedNews } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Media } from "@/components/shared/media";
import { Badge } from "@/components/ui/badge";
import { ContentRenderer } from "@/components/shared/content-renderer";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";
import { JsonLd } from "@/components/shared/jsonld";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return newsArticles.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return buildMetadata({ title: "文章未找到", noIndex: true });
  return buildMetadata({
    title: article.title,
    description: article.summary,
    path: `/news/${article.slug}`,
  });
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const related = getRelatedNews(slug, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    datePublished: article.date,
    articleSection: article.category,
    url: absoluteUrl(`/news/${article.slug}`),
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <PageHeader
        title={article.title}
        enTitle={article.category}
        description={article.summary}
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "新闻动态", href: "/news" },
          { label: article.title },
        ]}
      />

      <article className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          {/* 元信息 */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b pb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 text-primary" />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </span>
            {article.author ? (
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-primary" />
                {article.author}
              </span>
            ) : null}
            <Badge variant="secondary" className="text-muted-foreground">
              {article.category}
            </Badge>
          </div>

          <Media
            image={article.image}
            label={article.category}
            className="mt-8 aspect-[16/9] rounded-xl"
          />

          <div className="mt-8">
            <ContentRenderer blocks={article.body} />
          </div>

          {article.tags.length > 0 ? (
            <div className="mt-8 flex flex-wrap items-center gap-2 border-t pt-6">
              <span className="text-sm text-muted-foreground">标签：</span>
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  #{tag}
                </Badge>
              ))}
            </div>
          ) : null}
        </Container>
      </article>

      {related.length > 0 ? (
        <section className="bg-secondary/40 py-16">
          <Container>
            <SectionHeading eyebrow="Related" title="相关阅读" />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((n) => (
                <a
                  key={n.slug}
                  href={`/news/${n.slug}`}
                  className="group flex flex-col rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-muted-foreground">
                      {n.category}
                    </Badge>
                    <time dateTime={n.date} className="font-mono text-xs text-muted-foreground">
                      {formatDate(n.date)}
                    </time>
                  </div>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {n.summary}
                  </p>
                </a>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
