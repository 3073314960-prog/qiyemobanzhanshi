import type { Metadata } from "next";
import {
  BadgeCheck,
  Crosshair,
  Lightbulb,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { about } from "@/config/about";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = buildMetadata({
  title: "关于我们",
  description: `了解${siteConfig.name}——一家专注高端数控装备、工业自动化与精密零部件制造的国家高新技术企业。`,
  path: "/about",
});

const valueIcons: Record<string, LucideIcon> = {
  target: Target,
  precision: Crosshair,
  innovation: Lightbulb,
  integrity: Users,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="关于我们"
        enTitle="About Us"
        description="二十年专注高端制造，以工程能力与制造底蕴赢得客户信赖。"
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "关于我们" },
        ]}
      />

      {/* 公司简介 */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Company Profile"
              title={about.intro.heading}
            />
            <div className="flex flex-col gap-5 text-foreground/80">
              {about.intro.paragraphs.map((p, i) => (
                <p key={i} className="leading-7">
                  {p}
                </p>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {about.factory.map((item) => (
                  <div key={item.label} className="rounded-xl bg-secondary/60 p-4">
                    <div className="font-mono text-2xl font-bold text-primary">
                      {item.value}
                      <span className="text-signal-500">{item.unit}</span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 发展历程 */}
      <section className="bg-secondary/40 py-16 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Milestones"
            title="发展历程"
            description="二十年砥砺前行，见证中国智能制造从追赶到并跑。"
          />
          <ol className="relative mt-14 space-y-8 border-l-2 border-primary/20 pl-8 sm:ml-24">
            {about.milestones.map((m) => (
              <li key={m.year} className="relative">
                <span
                  className="absolute top-1 -left-[41px] h-3 w-3 rounded-full border-2 border-primary bg-background"
                  aria-hidden
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="font-mono text-xl font-bold text-primary">
                    {m.year}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {m.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 企业文化 */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Culture & Values"
            title="企业文化与价值观"
            description="共同的价值观，塑造了华域精工稳健、务实、值得信赖的企业气质。"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v) => {
              const Icon = valueIcons[v.icon] ?? Target;
              return (
                <article
                  key={v.title}
                  className="rounded-xl border bg-card p-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 资质认证 */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <SectionHeading
              dark
              align="center"
              eyebrow="Certifications"
              title="资质认证"
            />
            <ul className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {siteConfig.certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-4 text-sm text-white/80"
                >
                  <BadgeCheck className="h-5 w-5 text-signal-400" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
