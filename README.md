# 工业制造企业官网模板（SaaS 建站基础）

面向中国工业制造企业的高端响应式官网模板，基于 **Next.js + TypeScript + Tailwind CSS + shadcn/ui** 构建。
适合作为批量复制给不同企业客户的建站基座：品牌、产品、案例、新闻、配色与文案均集中在 `src/config` 目录，无需改动组件即可完成换肤与内容替换。

## 技术栈

- **Next.js 16**（App Router，静态生成 + 动态路由）
- **TypeScript**（严格模式）
- **Tailwind CSS v4**（设计令牌 + 品牌色阶）
- **shadcn/ui**（Radix UI 原语 + CVA）
- **lucide-react**（图标）

## 页面结构

| 路由 | 说明 |
| --- | --- |
| `/` | 首页（企业实力 / 核心产品 / 应用行业 / 成功案例 / 新闻 / 询盘转化） |
| `/about` | 关于我们（简介 / 发展历程 / 企业文化 / 资质认证） |
| `/products` | 产品中心（分类筛选列表） |
| `/products/[slug]` | 产品详情（参数表 / 特点 / 侧栏询盘） |
| `/cases` | 案例中心（列表） |
| `/cases/[slug]` | 案例详情（挑战 / 方案 / 成果 / 关键数据） |
| `/news` | 新闻动态（头条 + 列表） |
| `/news/[slug]` | 新闻详情 |
| `/contact` | 联系我们（在线询盘表单 + 常见问题） |

## 目录结构

```
src/
├── app/                  # 路由与页面（含 sitemap.ts / robots.ts / api/inquiry）
├── components/
│   ├── ui/               # shadcn/ui 基础组件
│   ├── layout/           # 页头 / 页脚 / Logo
│   ├── shared/           # 通用组件（容器 / 标题 / 媒体 / 询盘卡片 / 内容渲染器）
│   ├── home/             # 首页各区块
│   ├── products/         # 产品卡片 / 筛选目录
│   ├── cases/            # 案例卡片
│   └── contact/          # 询盘表单
├── config/               # ★ 全站内容与品牌配置（换企业主要改这里）
├── lib/                  # cn() / SEO / 内容检索工具
└── public/images/        # 静态图片（og-image.png 等）
```

## 快速开始

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 生产构建
npm run start      # 启动生产服务
```

## 换企业品牌（SaaS 复用指南）

1. **品牌与联系方式**：编辑 `src/config/site.ts` —— 企业名称、中英文名、slogan、联系方式、导航、企业实力数字、认证、备案信息、SEO 默认值。
2. **主题色**：编辑 `src/app/globals.css` 中 `:root` 下的设计令牌（`--primary` 主色、`--accent` 强调色、`--navy` 深色底等）。
3. **产品 / 案例 / 新闻**：分别编辑 `src/config/products.ts`、`cases.ts`、`news.ts`、`industries.ts`、`about.ts`，按既有类型结构替换内容即可。
4. **Logo 与图片**：替换 `src/components/layout/logo.tsx` 中的 Logo 图形，或使用 `next/image` 接入真实图片；为每个产品/案例/新闻的 `image.src` 填入 `/images/...` 路径即可替换占位图。
5. **站点域名**：修改 `siteConfig.url`，保证 canonical、sitemap、robots 指向正确域名。

> 所有内容数据均为 TypeScript 强类型（见 `src/config/types.ts`），换内容时编辑器会给出字段提示，降低出错概率。

## SEO 说明

- 全站统一 `metadata`（标题 / 描述 / canonical / Open Graph / Twitter Card），通过 `src/lib/seo.ts` 的 `buildMetadata()` 生成。
- 结构化数据：Organization、WebSite、Product、NewsArticle（JSON-LD）。
- 自动生成 `/sitemap.xml` 与 `/robots.txt`。
- 语义化 HTML（`header` / `nav` / `main` / `footer` / `article` / `section` / `dl` / `time` 等）。

## 询盘表单与邮件发送接口

- 表单组件：`src/components/contact/inquiry-form.tsx`
- 接口路由：`src/app/api/inquiry/route.ts`（已预留 Resend / Nodemailer 两种集成方式，见文件内注释）
- 环境变量示例：`.env.example`（复制为 `.env.local` 后填写）

## 响应式

全站基于 Tailwind 断点适配桌面端、平板（`sm` / `md`）与手机（`lg` 及以下折叠导航 / 栅格重排），移动端导航使用 Sheet 抽屉。
