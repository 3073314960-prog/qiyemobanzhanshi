import { industries } from "@/config/industries";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { getIndustryIcon } from "@/components/shared/industry-icon";

/** 应用行业（首页） */
export function Industries() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Industries"
          title="深耕六大应用行业"
          description="从汽车到航空航天，从新能源到医疗器械，我们的装备与工艺深度服务于现代工业的关键领域。"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = getIndustryIcon(industry.icon);
            return (
              <article
                key={industry.key}
                className="group rounded-xl border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 flex items-baseline gap-2 text-lg font-semibold text-foreground">
                  {industry.name}
                  <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {industry.enName}
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {industry.points.map((point) => (
                    <li
                      key={point}
                      className="rounded bg-secondary px-2 py-0.5 text-xs text-foreground/70"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
