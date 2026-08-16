import { NextResponse } from "next/server";

/**
 * 询盘表单提交接口 —— 邮件发送预留点。
 *
 * 当前为「占位实现」：仅做基础校验并记录日志，始终返回成功。
 * 接入真实邮件服务时，请按下方说明完成：
 *
 * 方案 A：Resend（推荐，需在环境变量配置 RESEND_API_KEY 与 RESEND_FROM）
 *   1. 安装依赖：npm i resend
 *   2. 取消注释下方 resend 代码块
 *   3. 在 .env.local 配置：
 *        RESEND_API_KEY=re_xxxxxx
 *        RESEND_FROM=华域精工 <noreply@你的域名.com>
 *        INQUIRY_TO=sales@你的域名.com
 *
 * 方案 B：Nodemailer + 企业邮箱 SMTP
 *   1. 安装依赖：npm i nodemailer
 *   2. 取消注释下方 nodemailer 代码块
 *   3. 在 .env.local 配置 SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / INQUIRY_TO
 */

interface InquiryPayload {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  type?: string;
  message?: string;
}

const INQUIRY_TYPES = ["产品咨询", "方案定制", "技术问题", "售后支持", "其他"];

function validate(body: InquiryPayload) {
  const errors: Record<string, string> = {};
  if (!body.name?.trim()) errors.name = "请填写姓名";
  if (!body.phone?.trim() && !body.email?.trim())
    errors.contact = "请至少填写电话或邮箱";
  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    errors.email = "邮箱格式不正确";
  if (!body.message?.trim()) errors.message = "请填写需求描述";
  if (body.type && !INQUIRY_TYPES.includes(body.type))
    errors.type = "无效的需求类型";
  return errors;
}

export async function POST(request: Request) {
  let body: InquiryPayload;
  try {
    body = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "请求格式错误，请稍后重试。" },
      { status: 400 },
    );
  }

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "请检查表单填写内容。", errors },
      { status: 422 },
    );
  }

  // ----------------------------------------------------------------------
  // 【邮件发送集成点】在此处将询盘内容发送到销售邮箱。
  // ----------------------------------------------------------------------
  // // 方案 A：Resend
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: process.env.RESEND_FROM!,
  //   to: [process.env.INQUIRY_TO!],
  //   subject: `【询盘】${body.type ?? "客户咨询"} - ${body.name}`,
  //   text: JSON.stringify(body, null, 2),
  // });
  //
  // // 方案 B：Nodemailer
  // import nodemailer from "nodemailer";
  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: Number(process.env.SMTP_PORT),
  //   secure: Number(process.env.SMTP_PORT) === 465,
  //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  // });
  // await transporter.sendMail({
  //   from: process.env.SMTP_USER,
  //   to: process.env.INQUIRY_TO,
  //   subject: `【询盘】${body.type ?? "客户咨询"} - ${body.name}`,
  //   text: JSON.stringify(body, null, 2),
  // });
  // ----------------------------------------------------------------------

  // 占位实现：记录询盘日志，便于上线前联调验证。
  console.log("[inquiry] 收到询盘：", JSON.stringify(body, null, 2));

  return NextResponse.json(
    {
      ok: true,
      message: "提交成功，我们的工程师将在 1 个工作日内与您联系。",
    },
    { status: 200 },
  );
}
