"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, PhoneCall, Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const isActive = (item: { href: string; match?: string }) => {
    if (item.href === "/") return pathname === "/";
    const prefix = item.match ?? item.href;
    return pathname === item.href || pathname.startsWith(prefix);
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* 顶部信息条 */}
      <div className="hidden bg-navy-deep text-white lg:block">
        <Container className="flex h-9 items-center justify-between text-xs text-white/70">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.hotline.replace(/-/g, "")}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              服务热线：{siteConfig.contact.hotline}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {siteConfig.contact.workingHours}
          </div>
        </Container>
      </div>

      {/* 主导航条 */}
      <div className="border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="主导航" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {siteConfig.nav.map((item) => {
                const active = isActive(item);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative flex items-center px-4 py-2 text-sm font-medium transition-colors",
                        active
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.title}
                      {active && (
                        <span
                          className="absolute inset-x-4 -bottom-[1px] h-0.5 bg-primary"
                          aria-hidden
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="accent" className="hidden sm:inline-flex">
              <Link href="/contact">获取报价</Link>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="打开菜单">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-4/5 max-w-xs">
                <SheetHeader>
                  <SheetTitle asChild>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <nav aria-label="移动端导航" className="flex-1">
                  <ul className="flex flex-col gap-1">
                    {siteConfig.nav.map((item) => {
                      const active = isActive(item);
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center justify-between rounded-md px-3 py-3 text-base font-medium transition-colors",
                              active
                                ? "bg-secondary text-primary"
                                : "text-foreground/80 hover:bg-secondary/60",
                            )}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="flex flex-col gap-3 border-t pt-4">
                  <a
                    href={`tel:${siteConfig.contact.hotline.replace(/-/g, "")}`}
                    className="flex items-center gap-2 text-sm text-foreground/70"
                  >
                    <PhoneCall className="h-4 w-4 text-primary" />
                    {siteConfig.contact.hotline}
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2 text-sm text-foreground/70"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    {siteConfig.contact.email}
                  </a>
                  <Button asChild variant="accent" className="mt-1">
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      立即咨询
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </div>
    </header>
  );
}
