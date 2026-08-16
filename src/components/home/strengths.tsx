import Link from "next/link";
import { ArrowRight, Cog, Globe2, Microscope, ShieldCheck } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const strengths = [
  {
    icon: Microscope,
    title: "自主研发创新",
    description:
      "省级企业技术中心与博士后基地，掌握五轴联动、运动控制等核心算法，累计授权专利 120 余项。",
  },
  {
    icon: Cog,
    title: "精密制造能力",
    description:
      "数百台高精度加工与检测设备，具备微米级加工与复杂工艺整合能力，公差最高可达 ±0.005mm。",
  },
  {
    icon: ShieldCheck,
    title: "严苛品质管控",
    description:
      "通过 ISO 9001、IATF 16949、CE 等认证，执行 APQP 与 SPC 过程控制，关键尺寸全检、批次可追溯。",
  },
  {
    icon: Globe2,
    title: "全程无忧服务",
    description:
      "覆盖售前、售中、售后的全生命周期服务，4 小时远程响应、24 小时工程师到场。",
  },
];

/** 企业实力（首页） */
export function Strengths() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-24">
      <div className="bg-blueprint-dark absolute inset-0 opacity-60" aria-hidden />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              dark
              eyebrow="Why Choose Us"
              title="二十年专注，值得信赖的制造伙伴"
              description="从方案设计到交付运维，我们以工程能力与制造底蕴，为客户的产能与品质保驾护航。"
            />
            <Button asChild variant="accent" className="mt-6">
              <Link href="/about">
                了解华域精工
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-signal-500/15 text-signal-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 认证条 */}
        <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
          <span className="text-sm text-white/50">资质认证：</span>
          {siteConfig.certifications.map((cert) => (
            <span
              key={cert}
              className="rounded border border-white/15 px-3 py-1 text-xs text-white/70"
            >
              {cert}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
