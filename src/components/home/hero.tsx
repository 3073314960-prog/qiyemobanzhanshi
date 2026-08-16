import Link from "next/link";
import { ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      {/* 背景纹理与光晕 */}
      <div className="bg-blueprint-dark absolute inset-0" aria-hidden />
      <div
        className="absolute top-0 right-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/25 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-signal-500/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white/80">
            <ShieldCheck className="h-4 w-4 text-signal-400" />
            {siteConfig.slogan}
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {siteConfig.brandClaim}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {siteConfig.brandSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="xl">
              <Link href="/contact">
                获取定制方案
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link href="/products">浏览产品中心</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
            <a
              href={`tel:${siteConfig.contact.hotline.replace(/-/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <PhoneCall className="h-4 w-4 text-signal-400" />
              24h 服务热线 {siteConfig.contact.hotline}
            </a>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
            <span>{siteConfig.certifications.slice(-2).join(" · ")}</span>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
