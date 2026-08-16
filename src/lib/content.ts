import { products } from "@/config/products";
import { caseStudies } from "@/config/cases";
import { newsArticles } from "@/config/news";

export { products, caseStudies, newsArticles };

export function getRelatedProducts(excludeSlug: string, limit = 3) {
  const current = products.find((p) => p.slug === excludeSlug);
  return products
    .filter((p) => p.slug !== excludeSlug)
    .sort((a, b) => {
      const aScore = current && a.category === current.category ? 1 : 0;
      const bScore = current && b.category === current.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function getRelatedCases(excludeSlug: string, limit = 3) {
  const current = caseStudies.find((c) => c.slug === excludeSlug);
  return caseStudies
    .filter((c) => c.slug !== excludeSlug)
    .sort((a, b) => {
      const aScore = current && a.industry === current.industry ? 1 : 0;
      const bScore = current && b.industry === current.industry ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function getRelatedNews(excludeSlug: string, limit = 3) {
  const current = newsArticles.find((n) => n.slug === excludeSlug);
  return newsArticles
    .filter((n) => n.slug !== excludeSlug)
    .sort((a, b) => {
      const aScore = current && a.category === current.category ? 1 : 0;
      const bScore = current && b.category === current.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function getFeaturedProducts(limit = 4) {
  return (
    products.filter((p) => p.featured).slice(0, limit).length
      ? products.filter((p) => p.featured)
      : products
  ).slice(0, limit);
}

export function getFeaturedCases(limit = 3) {
  return (
    caseStudies.filter((c) => c.featured).slice(0, limit).length
      ? caseStudies.filter((c) => c.featured)
      : caseStudies
  ).slice(0, limit);
}

export function getLatestNews(limit = 3) {
  return [...newsArticles]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, limit);
}
