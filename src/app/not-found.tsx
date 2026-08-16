import Link from "next/link";
import { ArrowLeft, Factory } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center bg-navy-deep text-white">
      <Container className="flex flex-col items-center py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
          <Factory className="h-8 w-8 text-signal-400" />
        </div>
        <p className="mt-6 font-mono text-6xl font-bold">404</p>
        <h1 className="mt-3 text-xl font-semibold">页面未找到</h1>
        <p className="mt-2 max-w-md text-sm text-white/60">
          您访问的页面可能已被移动或删除，请返回首页继续浏览。
        </p>
        <Button asChild variant="accent" className="mt-8">
          <Link href="/">
            <ArrowLeft />
            返回首页
          </Link>
        </Button>
      </Container>
    </section>
  );
}
