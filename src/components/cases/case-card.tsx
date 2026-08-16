import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import type { CaseStudy } from "@/config/types";
import { Media } from "@/components/shared/media";
import { Badge } from "@/components/ui/badge";

export function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <Link
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
              <div className="font-mono text-lg font-bold text-primary">{h.value}</div>
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
  );
}
