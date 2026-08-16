import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface CtaBandProps {
  title?: string;
  description?: string;
}

/**
 * 询盘转化横幅：引导访客拨打热线或进入联系页，全站多处复用。
 */
export function CtaBand({
  title = "准备好开启您的智能制造升级了吗？",
  description = "提交您的需求，我们的工程师将在 1 个工作日内与您联系，提供定制化方案与报价。",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="bg-blueprint-dark absolute inset-0 opacity-60" aria-hidden />
      <Container className="relative flex flex-col items-start justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/70">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="accent" size="xl">
            <Link href="/contact">
              立即咨询
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <a href={`tel:${siteConfig.contact.hotline.replace(/-/g, "")}`}>
              <PhoneCall />
              {siteConfig.contact.hotline}
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
