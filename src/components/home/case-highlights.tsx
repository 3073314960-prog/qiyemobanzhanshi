import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

import { getFeaturedCases } from "@/lib/content";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Media } from "@/components/shared/media";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/** 成功案例（首页） */
export function CaseHighlights() {
  const items = getFeaturedCases(3);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Success Cases"
            title="成功案例"
            description="以结果说话。我们与各行业标杆客户携手，交付了一个又一个可量化的产线升级成果。"
          />
          <Button asChild variant="outline" className="w-fit shrink-0">
            <Link href="/cases">
              全部案例
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/cases/${item.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative">
                <Media
                  image={item.image}
                  label={item.industry}
                  className="aspect-[16/10]"
                />
                <Badge className="absolute top-3 left-3 bg-navy/85 text-white">
                  {item.industry}
                </Badge>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.location}
                  <span aria-hidden>·</span>
                  {item.date}
                </div>
                <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {item.summary}
                </p>
                <div className="mt-auto grid grid-cols-3 gap-2 border-t pt-4">
                  {item.highlights.slice(0, 3).map((h) => (
                    <div key={h.label}>
                      <div className="font-mono text-lg font-bold text-primary">
                        {h.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{h.label}</div>
                    </div>
                  ))}
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-primary">
                  查看案例详情
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
