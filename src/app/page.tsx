import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Industries } from "@/components/home/industries";
import { Strengths } from "@/components/home/strengths";
import { CaseHighlights } from "@/components/home/case-highlights";
import { NewsPreview } from "@/components/home/news-preview";
import { CtaBand } from "@/components/shared/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedProducts />
      <Industries />
      <Strengths />
      <CaseHighlights />
      <NewsPreview />
      <CtaBand />
    </>
  );
}
