import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { products, productCategories } from "@/config/products";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { CtaBand } from "@/components/shared/cta-band";
import { Catalog } from "@/components/products/catalog";

export const metadata: Metadata = buildMetadata({
  title: "产品中心",
  description: `${siteConfig.name}产品中心：五轴数控加工中心、六轴工业机器人、自动化装配产线、精密零部件、激光切割与智能仓储物流等高端工业装备。`,
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="产品中心"
        enTitle="Products"
        description="从单机装备到整线集成，为您提供覆盖核心工序的智能制造装备矩阵。"
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "产品中心" },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <Catalog products={products} categories={productCategories} />
        </Container>
      </section>

      <CtaBand
        title="没有找到合适的设备？"
        description="我们提供非标自动化与精密零部件的定制服务，欢迎提交需求，获取专属方案与报价。"
      />
    </>
  );
}
