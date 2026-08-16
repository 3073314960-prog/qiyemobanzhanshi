import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";

/** 企业实力数字栏（首页） */
export function StatsBar() {
  return (
    <section aria-label="企业实力数据" className="border-b bg-background">
      <Container>
        <dl className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
          {siteConfig.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-1 py-8 text-center sm:py-10 ${
                i >= 2 ? "border-t border-border lg:border-t-0" : ""
              }`}
            >
              <dd className="order-1 font-mono text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {stat.value}
                <span className="text-signal-500">{stat.suffix}</span>
              </dd>
              <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
