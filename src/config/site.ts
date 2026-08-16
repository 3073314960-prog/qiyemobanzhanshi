/**
 * 站点全局配置 —— SaaS 建站模板的「唯一真相来源」。
 *
 * 换一家企业客户时，通常只需要修改本文件 + content 目录下的数据文件，
 * 即可完成品牌、导航、联系方式、SEO 默认值、底部备案信息等替换。
 */

export interface NavItem {
  title: string;
  href: string;
  /** 需要高亮时匹配的路径前缀，例如 /products */
  match?: string;
}

export const siteConfig = {
  /* ------------------------------- 品牌信息 ------------------------------- */
  name: "华域精工",
  nameEn: "HUAYU PRECISION",
  legalName: "华域精工装备股份有限公司",
  shortName: "华域",
  slogan: "高端工业装备 · 智能制造解决方案",
  // 一句话品牌主张（首页首屏主标题）
  brandClaim: "以精密制造，驱动工业未来",
  brandSubtitle:
    "专注高端数控装备、工业自动化与精密零部件制造，为汽车、航空航天、新能源与 3C 电子等行业提供可信赖的智能制造解决方案。",

  /* ------------------------------- SEO 默认值 ------------------------------ */
  // 站点域名：可在构建时通过 NEXT_PUBLIC_SITE_URL 覆盖（例如 GitHub Pages 子路径部署）。
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.huayu-precision.com",
  locale: "zh_CN",
  description:
    "华域精工是一家高端工业装备与智能制造解决方案提供商，主营五轴数控加工中心、工业机器人、自动化产线及精密零部件，服务汽车、航空航天、新能源、3C 电子等行业的标杆客户。",
  keywords: [
    "工业装备",
    "智能制造",
    "数控加工中心",
    "工业机器人",
    "自动化产线",
    "精密零部件",
    "非标自动化",
  ],

  /* ------------------------------- 联系方式 ------------------------------- */
  contact: {
    hotline: "400-888-6666",
    tel: "0755-8888-6666",
    email: "sales@huayu-precision.com",
    address: "广东省深圳市宝安区智能制造产业园 8 栋",
    addressPostal: "518100",
    workingHours: "周一至周六 8:30 - 18:00",
    fax: "0755-8888-6667",
    qrHint: "扫码添加销售工程师微信，获取选型报价",
  },

  /* ------------------------------- 主导航 ------------------------------- */
  nav: [
    { title: "首页", href: "/", match: "/" },
    { title: "关于我们", href: "/about", match: "/about" },
    { title: "产品中心", href: "/products", match: "/products" },
    { title: "案例中心", href: "/cases", match: "/cases" },
    { title: "新闻动态", href: "/news", match: "/news" },
    { title: "联系我们", href: "/contact", match: "/contact" },
  ] as NavItem[],

  /* ------------------------------- 企业实力数据 --------------------------- */
  stats: [
    { value: "20", suffix: "+", label: "年行业深耕" },
    { value: "500", suffix: "+", label: "员工与工程师" },
    { value: "120", suffix: "+", label: "技术专利" },
    { value: "8000", suffix: "+", label: "服务客户企业" },
  ],

  /* ------------------------------- 认证与资质 ---------------------------- */
  certifications: [
    "ISO 9001 质量管理体系",
    "ISO 14001 环境管理体系",
    "IATF 16949 汽车行业认证",
    "CE 欧盟安全认证",
    "国家高新技术企业",
  ],

  /* ------------------------------- 底部备案 ------------------------------- */
  icp: "粤ICP备2026XXXXXX号",
  police: "粤公网安备 4403XXXXXXXX号",
  copyrightYearStart: 2006,

  /* ------------------------------- 社交媒体 ------------------------------- */
  social: {
    wechat: "#",
    linkedin: "#",
    douyin: "#",
  },
};

export type SiteConfig = typeof siteConfig;

/** 当前年份，用于底部版权 */
export const currentYear = new Date().getFullYear();
