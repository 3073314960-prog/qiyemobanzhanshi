"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import type { Product } from "@/config/types";
import { ProductCard } from "./product-card";

interface CatalogProps {
  products: Product[];
  categories: string[];
}

export function Catalog({ products, categories }: CatalogProps) {
  const [active, setActive] = React.useState("全部");

  const filtered =
    active === "全部"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div>
      <div
        className="flex flex-wrap items-center gap-2"
        role="tablist"
        aria-label="产品分类筛选"
      >
        {["全部", ...categories].map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              active === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground/70 hover:border-primary/50 hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
