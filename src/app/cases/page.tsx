import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { caseStudies } from "@/config/cases";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBand } from "@/components/shared/cta-band";
import { CaseCard } from "@/components/cases/case-card";

export const metadata: Metadata = buildMetadata({
  title: "案例中心",
  description: `${siteConfig.name}成功案例：汽车、航空航天、新能源、3C 电子、医疗器械与工程机械等行业的自动化与精密制造项目实践。`,
  path: "/cases",
});

export default function CasesPage() {
  return (
    <>
      <PageHeader
        title="案例中心"
        enTitle="Success Cases"
        description="每一个项目都是对交付能力与专业度的验证，以可量化的成果赢得客户长期信赖。"
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "案例中心" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <CaseCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="期待与您共创下一个成功案例"
        description="无论产线新建还是改造升级，我们都能提供从方案到交付的一站式服务。"
      />
    </>
  );
}
