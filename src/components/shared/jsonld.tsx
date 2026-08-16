/**
 * 输出 JSON-LD 结构化数据（SEO）。
 * 数据传入任意符合 schema.org 的对象即可。
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
