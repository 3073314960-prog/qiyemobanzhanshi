import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { getFeaturedProducts } from "@/lib/content";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Media } from "@/components/shared/media";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/** 核心产品（首页） */
export function FeaturedProducts() {
  const items = getFeaturedProducts(4);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Core Products"
            title="核心产品"
            description="覆盖数控机床、工业机器人、自动化产线与精密制造，为您提供完整的智能制造装备矩阵。"
          />
          <Button asChild variant="outline" className="w-fit shrink-0">
            <Link href="/products">
              全部产品
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <Link
              key={product.slug}
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
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
