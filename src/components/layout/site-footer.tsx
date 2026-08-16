import Link from "next/link";
import { Mail, MapPin, PhoneCall, Clock } from "lucide-react";

import { siteConfig, currentYear } from "@/config/site";
import { productCategories } from "@/config/products";
import { Logo } from "./logo";
import { Container } from "@/components/shared/container";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* 品牌与简介 */}
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {siteConfig.certifications.slice(0, 3).map((cert) => (
                <li
                  key={cert}
                  className="rounded border border-white/15 px-2.5 py-1 text-xs text-white/60"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* 快速导航 */}
          <nav aria-label="页脚导航" className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-white">
              快速导航
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 产品分类 */}
          <nav aria-label="产品分类" className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide text-white">
              产品中心
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {productCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/products"
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 联系方式 */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide text-white">
              联系我们
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex gap-2.5">
                <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>
                  热线：{siteConfig.contact.hotline}
                  <br />
                  电话：{siteConfig.contact.tel}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>{siteConfig.contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* 底部备案条 */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
          <p>
            © {siteConfig.copyrightYearStart}-{currentYear}{" "}
            {siteConfig.legalName} 版权所有
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>{siteConfig.icp}</span>
            <span>{siteConfig.police}</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
