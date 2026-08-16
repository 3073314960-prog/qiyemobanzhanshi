import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Product } from "@/config/types";
import { Media } from "@/components/shared/media";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <Media
        image={product.image}
        label={product.enName}
        className="aspect-[4/3]"
        iconClassName="transition-transform duration-300 group-hover:scale-110"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary" className="text-muted-foreground">
            {product.category}
          </Badge>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </div>
        <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-primary">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {product.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
