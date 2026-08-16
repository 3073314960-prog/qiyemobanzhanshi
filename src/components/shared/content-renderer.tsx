import * as React from "react";

import type { ContentBlock } from "@/config/types";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

/**
 * 将 config 中的富文本块渲染为语义化 HTML。
 * 支持 paragraph / heading / list / quote / specs / stats。
 */
export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="leading-7 text-foreground/80">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h3
                key={i}
                className="pt-2 text-xl font-bold tracking-tight text-foreground"
              >
                {block.text}
              </h3>
            );
          case "list":
            return block.ordered ? (
              <ol key={i} className="list-decimal space-y-2 pl-5 text-foreground/80 marker:text-primary">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-7 pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-2.5 leading-7 text-foreground/80">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-primary bg-secondary/50 py-4 pr-4 pl-5 text-foreground/90"
              >
                <p className="leading-7">{block.text}</p>
                {block.author ? (
                  <footer className="mt-2 text-sm text-muted-foreground">
                    —— {block.author}
                  </footer>
                ) : null}
              </blockquote>
            );
          case "specs":
            return (
              <Table key={i} className="not-prose">
                <TableBody>
                  {block.rows.map(([label, value], j) => (
                    <TableRow key={j} className="border-border">
                      <TableCell className="w-1/3 bg-secondary/50 font-medium text-foreground">
                        {label}
                      </TableCell>
                      <TableCell className="text-foreground/80">{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            );
          case "stats":
            return (
              <div
                key={i}
                className="grid grid-cols-2 gap-4 rounded-xl border bg-secondary/40 p-6 sm:grid-cols-3"
              >
                {block.items.map((item, j) => (
                  <div key={j}>
                    <div className="text-2xl font-bold text-primary">{item.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
