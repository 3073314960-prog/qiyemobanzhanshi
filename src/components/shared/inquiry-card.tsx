import Link from "next/link";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

/** 侧栏询盘卡片，用于产品 / 案例详情页。 */
export function InquiryCard() {
  return (
    <aside className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="text-base font-semibold text-foreground">获取方案与报价</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        留下您的需求，工程师将在 1 个工作日内与您联系。
      </p>
      <div className="mt-5 flex flex-col gap-3">
        <Button asChild variant="accent" size="lg">
          <Link href="/contact">
            立即询价
            <ArrowRight />
          </Link>
        </Button>
        <a
          href={`tel:${siteConfig.contact.hotline.replace(/-/g, "")}`}
          className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <PhoneCall className="h-4 w-4 text-primary" />
          {siteConfig.contact.hotline}
        </a>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <Mail className="h-4 w-4 text-primary" />
          {siteConfig.contact.email}
        </a>
      </div>
      <p className="mt-4 border-t pt-4 text-xs text-muted-foreground">
        {siteConfig.contact.workingHours}
      </p>
    </aside>
  );
}
