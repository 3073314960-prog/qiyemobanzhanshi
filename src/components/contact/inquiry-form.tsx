"use client";

import * as React from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Status = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      company: data.get("company"),
      phone: data.get("phone"),
      email: data.get("email"),
      type: data.get("type"),
      message: data.get("message"),
    };

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (res.ok && result.ok) {
        setStatus("success");
        setMessage(result.message ?? "提交成功。");
        form.reset();
      } else {
        setStatus("error");
        setMessage(result.message ?? "提交失败，请稍后重试。");
      }
    } catch {
      setStatus("error");
      setMessage("网络异常，请稍后重试或直接致电联系我们。");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate={false}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">
            姓名 <span className="text-accent">*</span>
          </Label>
          <Input id="name" name="name" placeholder="您的姓名" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">公司名称</Label>
          <Input id="company" name="company" placeholder="公司或单位名称" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">联系电话</Label>
          <Input id="phone" name="phone" type="tel" placeholder="手机或座机" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">电子邮箱</Label>
          <Input id="email" name="email" type="email" placeholder="name@company.com" />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="type">需求类型</Label>
          <Select name="type" defaultValue="产品咨询">
            <SelectTrigger id="type" className="w-full">
              <SelectValue placeholder="请选择需求类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="产品咨询">产品咨询</SelectItem>
              <SelectItem value="方案定制">方案定制</SelectItem>
              <SelectItem value="技术问题">技术问题</SelectItem>
              <SelectItem value="售后支持">售后支持</SelectItem>
              <SelectItem value="其他">其他</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="message">
            需求描述 <span className="text-accent">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="请简要描述您的需求，例如：产品型号、应用场景、预计用量等"
            rows={5}
            required
          />
        </div>
      </div>

      <label className="flex items-start gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="agree"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-input accent-primary"
        />
        <span>
          我已阅读并同意《隐私政策》，同意贵司为跟进需求而与我联系。
        </span>
      </label>

      {status === "error" || status === "success" ? (
        <div
          role="status"
          className={cn(
            "flex items-start gap-2 rounded-md border px-3 py-2.5 text-sm",
            status === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-destructive/30 bg-destructive/5 text-destructive",
          )}
        >
          {status === "success" ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          ) : (
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
          )}
          <span>{message}</span>
        </div>
      ) : null}

      <Button
        type="submit"
        variant="accent"
        size="xl"
        className="w-full sm:w-fit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" />
            正在提交…
          </>
        ) : (
          <>
            <Send />
            提交询盘
          </>
        )}
      </Button>
    </form>
  );
}
