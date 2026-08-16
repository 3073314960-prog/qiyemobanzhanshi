import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Building2, CalendarDays, MapPin, Tags } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { caseStudies, getCaseBySlug } from "@/config/cases";
import { getRelatedCases } from "@/lib/content";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Media } from "@/components/shared/media";
import { ContentRenderer } from "@/components/shared/content-renderer";
import { InquiryCard } from "@/components/shared/inquiry-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { CaseCard } from "@/components/cases/case-card";
import { CtaBand } from "@/components/shared/cta-band";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return buildMetadata({ title: "案例未找到", noIndex: true });
  return buildMetadata({
    title: item.title,
    description: item.summary,
    path: `/cases/${item.slug}`,
  });
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  const related = getRelatedCases(slug, 3);

  return (
    <>
      <PageHeader
        title={item.title}
        enTitle={item.industry}
        description={item.summary}
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "案例中心", href: "/cases" },
          { label: item.title },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <Media
            image={item.image}
            label={item.industry}
            className="aspect-[21/9] rounded-xl"
          />

          {/* 关键成果 */}
          <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl border bg-secondary/40 p-6 sm:grid-cols-3">
            {item.highlights.map((h) => (
              <div key={h.label} className="flex flex-col items-center gap-1 text-center">
                <div className="font-mono text-3xl font-bold text-primary">
                  {h.value}
                </div>
                <div className="text-sm text-muted-foreground">{h.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* 主内容 */}
            <div className="flex flex-col gap-10 lg:col-span-2">
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  项目背景与挑战
                </h2>
                <p className="mt-4 leading-7 text-foreground/80">{item.challenge}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  解决方案
                </h2>
                <p className="mt-4 leading-7 text-foreground/80">{item.solution}</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  项目成果
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {item.results.map((r) => (
                    <li key={r} className="flex gap-2.5 leading-7 text-foreground/80">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>
              {item.body.length > 0 ? (
                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    项目详情
                  </h2>
                  <div className="mt-4">
                    <ContentRenderer blocks={item.body} />
                  </div>
                </section>
              ) : null}
            </div>

            {/* 侧栏 */}
            <div className="flex flex-col gap-6">
              <aside className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="text-base font-semibold text-foreground">项目信息</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="h-4 w-4 text-primary" />
                    <dt className="w-16 shrink-0 text-muted-foreground">客户</dt>
                    <dd className="text-foreground/80">{item.client}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Tags className="h-4 w-4 text-primary" />
                    <dt className="w-16 shrink-0 text-muted-foreground">行业</dt>
                    <dd className="text-foreground/80">{item.industry}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    <dt className="w-16 shrink-0 text-muted-foreground">地点</dt>
                    <dd className="text-foreground/80">{item.location}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <dt className="w-16 shrink-0 text-muted-foreground">时间</dt>
                    <dd className="text-foreground/80">{item.date}</dd>
                  </div>
                </dl>
              </aside>
              <InquiryCard />
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-secondary/40 py-16">
          <Container>
            <SectionHeading eyebrow="Related" title="相关案例" />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CaseCard key={c.slug} item={c} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
