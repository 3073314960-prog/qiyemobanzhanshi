import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { products, getProductBySlug } from "@/config/products";
import { getRelatedProducts } from "@/lib/content";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { Media } from "@/components/shared/media";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { ContentRenderer } from "@/components/shared/content-renderer";
import { InquiryCard } from "@/components/shared/inquiry-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductCard } from "@/components/products/product-card";
import { CtaBand } from "@/components/shared/cta-band";
import { JsonLd } from "@/components/shared/jsonld";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return buildMetadata({ title: "产品未找到", noIndex: true });
  return buildMetadata({
    title: product.name,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    category: product.category,
    brand: { "@type": "Brand", name: siteConfig.name },
    url: absoluteUrl(`/products/${product.slug}`),
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <PageHeader
        title={product.name}
        enTitle={product.category}
        description={product.summary}
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "产品中心", href: "/products" },
          { label: product.category, href: "/products" },
          { label: product.name },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* 主内容 */}
            <div className="lg:col-span-2">
              <Media
                image={product.image}
                label={product.enName}
                className="aspect-[16/9] rounded-xl"
              />

              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h2 className="mt-8 text-2xl font-bold tracking-tight text-foreground">
                产品概述
              </h2>
              <div className="mt-5">
                <ContentRenderer blocks={product.body} />
              </div>

              {product.features.length > 0 ? (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    产品特点
                  </h2>
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {product.features.map((f) => (
                      <div key={f.title} className="rounded-xl border bg-secondary/40 p-5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <h3 className="font-semibold text-foreground">{f.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {f.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* 侧栏 */}
            <div className="flex flex-col gap-6">
              {product.specs.length > 0 ? (
                <div className="rounded-xl border bg-card shadow-sm">
                  <h3 className="border-b px-6 py-4 text-base font-semibold text-foreground">
                    技术参数
                  </h3>
                  <div className="p-2">
                    <Table>
                      <TableBody>
                        {product.specs.map((spec) => (
                          <TableRow key={spec.label} className="border-border">
                            <TableCell className="w-2/5 bg-secondary/40 font-medium text-foreground">
                              {spec.label}
                            </TableCell>
                            <TableCell className="text-foreground/80">
                              {spec.value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ) : null}
              <InquiryCard />
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-secondary/40 py-16">
          <Container>
            <SectionHeading eyebrow="Related" title="相关产品" />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
