/**
 * 「关于我们」页面内容数据。
 */

export const about = {
  intro: {
    heading: "专注高端制造，与客户共同成长",
    paragraphs: [
      "华域精工装备股份有限公司成立于 2006 年，是一家集高端数控装备、工业自动化与精密零部件研发、制造、销售与服务于一体的国家高新技术企业。二十年来，我们始终聚焦智能制造领域，以可靠的工程能力与制造底蕴，服务全球 8000 余家客户。",
      "公司总部位于深圳，拥有两大智能制造基地与省级企业技术中心，产品广泛应用于汽车制造、航空航天、新能源、3C 电子、医疗器械与工程机械等行业，是众多行业标杆企业信赖的长期合作伙伴。",
    ],
  },

  milestones: [
    { year: "2006", title: "公司创立", description: "华域精工成立，聚焦精密零部件加工起步。" },
    { year: "2010", title: "精密制造基地建成", description: "首期精密加工基地投产，奠定规模化制造基础。" },
    { year: "2014", title: "五轴装备实现突破", description: "首台五轴联动加工中心下线，进军高端数控装备。" },
    { year: "2018", title: "布局新能源赛道", description: "进入动力电池装备领域，服务多家头部新能源企业。" },
    { year: "2021", title: "二期基地动工", description: "二期智能制造基地启动建设，布局数字化工厂。" },
    { year: "2026", title: "智能制造基地投产", description: "二期基地正式投产，产能提升 40%，迈向智能制造新阶段。" },
  ],

  values: [
    {
      icon: "target",
      title: "客户至上",
      description: "以客户需求为出发点，提供超越预期的产品与服务。",
    },
    {
      icon: "precision",
      title: "精益求精",
      description: "对每一个尺寸、每一道工序都追求极致的精度与品质。",
    },
    {
      icon: "innovation",
      title: "创新驱动",
      description: "持续投入研发，以技术创新引领制造升级。",
    },
    {
      icon: "integrity",
      title: "诚信担当",
      description: "重合同、守信用，与伙伴和员工共同成长。",
    },
  ],

  factory: [
    { value: "120,000", unit: "㎡", label: "两大基地厂房面积" },
    { value: "300", unit: "+", label: "高精度加工与检测设备" },
    { value: "180", unit: "+", label: "研发与工艺工程师" },
    { value: "120", unit: "+", label: "授权技术专利" },
  ],
} as const;
