/**
 * 全站内容数据类型定义。
 * 换企业时无需改动组件，只需按此结构替换 config 下的数据文件即可。
 */

export interface MediaImage {
  /** 图片路径（/images/...）或完整 URL；留空时使用占位图 */
  src: string;
  alt: string;
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "specs"; rows: [string, string][] }
  | { type: "stats"; items: { label: string; value: string }[] };

export interface Product {
  slug: string;
  name: string;
  enName?: string;
  category: string;
  summary: string;
  description: string;
  image?: MediaImage;
  tags: string[];
  specs: { label: string; value: string }[];
  features: { title: string; description: string }[];
  body: ContentBlock[];
  featured?: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  date: string;
  summary: string;
  image?: MediaImage;
  highlights: { value: string; label: string }[];
  challenge: string;
  solution: string;
  results: string[];
  body: ContentBlock[];
  featured?: boolean;
}

export interface NewsArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  author?: string;
  summary: string;
  image?: MediaImage;
  tags: string[];
  body: ContentBlock[];
  featured?: boolean;
}

export interface Industry {
  key: string;
  name: string;
  enName: string;
  description: string;
  icon: string;
  points: string[];
}
