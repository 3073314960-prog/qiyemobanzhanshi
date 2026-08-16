import type { NewsArticle } from "./types";

export const newsArticles: NewsArticle[] = [
  {
    slug: "new-plant-put-into-use",
    title: "华域精工二期智能制造基地正式投产",
    category: "公司新闻",
    date: "2026-01-18",
    author: "品牌市场部",
    summary:
      "二期基地新增数字化机加工车间与智能仓储中心，年产能提升 40%，标志着公司智能制造能力再上新台阶。",
    featured: true,
    tags: ["智能制造", "产能升级"],
    body: [
      { type: "paragraph", text: "2026 年 1 月，华域精工二期智能制造基地正式投产。该基地占地 4.2 万平方米，新建数字化机加工车间、自动化装配车间与智能立体仓库，引入百余台高精度加工设备与柔性产线。" },
      { type: "paragraph", text: "基地全面应用 MES 与数字孪生技术，实现从订单、排产到加工、质检的全流程数字化管理，整体产能较一期提升 40%，交付周期缩短 25%。" },
      { type: "heading", text: "投产意义" },
      { type: "list", items: ["强化高端装备与精密零部件的规模化交付能力", "深化数字化工厂实践，树立行业标杆", "为华东、华南区域客户提供更快速响应"] },
    ],
  },
  {
    slug: "national-high-tech-recertified",
    title: "连续八年通过国家高新技术企业认定",
    category: "公司新闻",
    date: "2025-12-05",
    author: "技术中心",
    summary:
      "公司凭借持续的研发投入与自主创新能力，再次通过国家高新技术企业认定。",
    tags: ["资质荣誉", "技术创新"],
    body: [
      { type: "paragraph", text: "近日，华域精工顺利通过新一轮国家高新技术企业认定，这是公司连续第八年获得该项资质，充分体现了公司在高端装备制造领域的研发实力与持续创新能力。" },
      { type: "paragraph", text: "截至目前，公司累计获得授权专利 120 余项，其中发明专利 30 余项，并建有省级企业技术中心与博士后创新实践基地。" },
    ],
  },
  {
    slug: "exhibition-2025-ciif",
    title: "华域精工亮相 2025 中国国际工业博览会",
    category: "展会活动",
    date: "2025-09-20",
    author: "市场中心",
    summary:
      "公司携五轴加工中心、六轴机器人与智能仓储三大产品线亮相工博会，现场达成多项合作意向。",
    tags: ["工博会", "新品发布"],
    body: [
      { type: "paragraph", text: "2025 中国国际工业博览会期间，华域精工以「智造·精密·可信」为主题，集中展示了五轴联动加工中心、新一代六轴工业机器人与智能仓储物流系统等核心产品，吸引了众多行业客户与合作伙伴驻足交流。" },
      { type: "heading", text: "展会成果" },
      { type: "list", items: ["现场达成合作意向 30 余项", "接待专业观众超 2000 人次", "与多家集成商签署战略合作协议"] },
    ],
  },
  {
    slug: "rnd-center-new-patent",
    title: "公司新获多项智能制造核心专利授权",
    category: "技术动态",
    date: "2025-07-08",
    author: "技术中心",
    summary:
      "围绕五轴联动控制与机器人柔顺控制，公司近期新增 6 项发明专利授权。",
    tags: ["专利", "研发"],
    body: [
      { type: "paragraph", text: "近期，华域精工在五轴联动插补控制、机器人柔顺控制与激光切割智能排料等方向新获 6 项发明专利授权，进一步夯实了公司在高端装备核心算法领域的技术壁垒。" },
      { type: "paragraph", text: "这些专利已逐步在产品中落地应用，帮助客户在复杂曲面加工、精密装配与材料利用率等方面获得可量化的效益提升。" },
    ],
  },
  {
    slug: "industry-report-manufacturing",
    title: "工业自动化行业观察：柔性制造成为新常态",
    category: "行业动态",
    date: "2025-04-16",
    author: "行业研究院",
    summary:
      "多品种小批量订单成为主流，柔性化、数字化、智能化的产线能力正成为制造企业核心竞争力。",
    tags: ["行业趋势", "柔性制造"],
    body: [
      { type: "paragraph", text: "随着下游需求日趋个性化，多品种、小批量、快交付成为制造行业的新常态。传统刚性产线难以适应频繁换型，而具备柔性化与数字化能力的智能产线正加速普及。" },
      { type: "heading", text: "趋势解读" },
      { type: "list", items: ["模块化与快速换型成为产线设计关键", "数据驱动成为质量与效率提升的新引擎", "机器人与视觉技术的融合进一步深入"] },
    ],
  },
  {
    slug: "customer-service-commitment",
    title: "华域精工发布全新客户服务体系「全程无忧」",
    category: "公司新闻",
    date: "2025-02-12",
    author: "客户服务部",
    summary:
      "覆盖售前、售中、售后的全生命周期服务体系，承诺 4 小时响应、24 小时到场。",
    tags: ["客户服务", "品牌"],
    body: [
      { type: "paragraph", text: "为持续提升客户体验，华域精工发布全新客户服务体系「全程无忧」，整合售前方案咨询、售中项目交付与售后运维支持，为客户提供覆盖设备全生命周期的标准化服务。" },
      { type: "heading", text: "服务承诺" },
      { type: "list", items: ["4 小时远程响应，24 小时工程师到场", "全国主要工业城市设立服务网点", "终身技术支持与备件保障"] },
    ],
  },
];

export const newsCategories = Array.from(
  new Set(newsArticles.map((n) => n.category)),
);

export function getNewsBySlug(slug: string) {
  return newsArticles.find((n) => n.slug === slug);
}
