import type { Metadata } from "next";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { InquiryForm } from "@/components/contact/inquiry-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = buildMetadata({
  title: "联系我们",
  description: `联系${siteConfig.name}：在线询盘、服务热线、邮箱与办公地址，获取高端工业装备与智能制造解决方案报价。`,
  path: "/contact",
});

const contactCards = [
  {
    icon: PhoneCall,
    label: "服务热线",
    value: siteConfig.contact.hotline,
    sub: `电话 ${siteConfig.contact.tel}`,
  },
  {
    icon: Mail,
    label: "商务邮箱",
    value: siteConfig.contact.email,
    sub: "1 个工作日内回复",
  },
  {
    icon: MapPin,
    label: "公司地址",
    value: siteConfig.contact.address,
    sub: `邮编 ${siteConfig.contact.addressPostal}`,
  },
  {
    icon: Clock,
    label: "工作时间",
    value: siteConfig.contact.workingHours,
    sub: "节假日除外",
  },
];

const faqs = [
  {
    q: "如何获取产品报价？",
    a: "您可以通过在线询盘表单提交需求，或直接拨打服务热线。我们的销售工程师将在 1 个工作日内与您联系，根据您的产品型号、配置与用量提供专属报价。",
  },
  {
    q: "是否支持非标定制？",
    a: "支持。华域精工拥有完整的机械、电气与软件设计能力，可针对您的工艺需求提供非标自动化装备、整线与精密零部件的定制开发。",
  },
  {
    q: "设备交付周期一般多久？",
    a: "标准机型通常 30~60 天交付；非标自动化产线视复杂度而定，一般为 90~180 天。我们会在方案阶段与您确认详细的交付计划。",
  },
  {
    q: "售后服务如何保障？",
    a: "我们提供 4 小时远程响应、24 小时工程师到场（全国主要工业城市），并承诺终身技术支持与备件保障。",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="联系我们"
        enTitle="Contact Us"
        description="无论是产品选型、方案定制还是售后支持，欢迎随时与我们联系。"
        breadcrumbs={[
          { label: "首页", href: "/" },
          { label: "联系我们" },
        ]}
      />

      {/* 联系方式卡片 */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="rounded-xl border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm text-muted-foreground">{card.label}</h3>
                <p className="mt-1 font-semibold text-foreground">{card.value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{card.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 询盘表单 + 地址 */}
      <section className="bg-secondary/40 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 sm:p-8 lg:col-span-2">
              <SectionHeading
                eyebrow="Inquiry"
                title="在线询盘"
                description="请填写下方表单，我们将尽快与您联系。带 * 为必填项。"
              />
              <div className="mt-8">
                <InquiryForm />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* 地址 / 地图占位 */}
              <div className="relative flex min-h-64 flex-col justify-end overflow-hidden rounded-xl bg-navy p-6 text-white">
                <div className="bg-blueprint-dark absolute inset-0" aria-hidden />
                <div className="relative">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <MapPin className="h-4 w-4 text-signal-400" />
                    公司总部
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {siteConfig.contact.address}
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    {siteConfig.contact.workingHours}
                  </p>
                </div>
              </div>

              {/* 服务承诺 */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">服务承诺</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>· 4 小时远程响应，24 小时到场</li>
                  <li>· 全国主要工业城市服务网点</li>
                  <li>· 终身技术支持与备件保障</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 常见问题 */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="常见问题"
            description="关于选型、定制、交付与售后的常见问题解答。"
          />
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-7 text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>
    </>
  );
}
