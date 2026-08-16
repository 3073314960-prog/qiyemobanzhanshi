import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "automotive-powertrain-line",
    title: "某头部新能源车企动力电池模组产线",
    client: "华南某新能源整车企业",
    industry: "新能源",
    location: "广东 · 深圳",
    date: "2025-11-20",
    summary:
      "为某新能源车企交付 8 条动力电池模组自动化装配线，节拍稳定、良率行业领先。",
    featured: true,
    highlights: [
      { value: "12s", label: "单模组节拍" },
      { value: "99.6%", label: "一次合格率" },
      { value: "8", label: "交付产线条数" },
    ],
    challenge:
      "客户新车型上市在即，要求产线在 90 天内完成设计交付，同时兼顾多款电芯规格的柔性切换与全过程质量追溯。",
    solution:
      "采用模块化工作站 + 快速换型设计，集成 3D 视觉定位、力矩拧紧与气密检测，并打通 MES 实现全流程数据追溯。",
    results: [
      "提前 10 天完成整线交付与量产爬坡",
      "一次合格率稳定在 99.6% 以上",
      "换型时间由 4 小时缩短至 40 分钟",
    ],
    body: [
      { type: "paragraph", text: "本项目覆盖电芯上料、绝缘检测、模组堆叠、极耳焊接、汇流排装配、EOL 测试等全工序。华域精工在方案阶段即与客户工艺团队深度协同，通过虚拟仿真提前验证节拍与布局，确保一次性通过率。" },
      { type: "heading", text: "交付价值" },
      { type: "stats", items: [{ label: "综合效率提升", value: "38%" }, { label: "人工减少", value: "65%" }, { label: "项目周期", value: "80 天" }] },
    ],
  },
  {
    slug: "aero-blisk-machining",
    title: "航空发动机整体叶盘五轴加工方案",
    client: "某航空发动机制造企业",
    industry: "航空航天",
    location: "四川 · 成都",
    date: "2025-08-15",
    summary:
      "以五轴加工中心 + 在线测量为核心，攻克钛合金整体叶盘的高效精密加工难题。",
    featured: true,
    highlights: [
      { value: "±0.01mm", label: "型面轮廓精度" },
      { value: "40%", label: "加工效率提升" },
      { value: "0.4μm", label: "表面粗糙度 Ra" },
    ],
    challenge:
      "钛合金整体叶盘材料难加工、型面复杂、精度要求极高，传统工艺多次装夹导致效率低且一致性差。",
    solution:
      "部署华域五轴加工中心，配合专用夹具与在线测量补偿，实现叶盘型面与榫槽的一次装夹完整加工。",
    results: [
      "型面轮廓精度稳定控制在 ±0.01mm",
      "加工效率较原工艺提升 40%",
      "表面粗糙度达到 Ra0.4μm，满足设计要求",
    ],
    body: [
      { type: "paragraph", text: "整体叶盘是航空发动机的关键零件，其加工水平直接决定发动机性能。华域精工针对难加工材料特性，优化刀具路径与切削参数，并引入在线测量闭环补偿，为客户建立了稳定可控的批量加工工艺。" },
      { type: "heading", text: "关键技术" },
      { type: "list", items: ["五轴联动侧刃铣削", "刀具寿命在线监控", "在线测量闭环补偿"] },
    ],
  },
  {
    slug: "3c-stamping-automation",
    title: "3C 精密结构件冲压自动化改造",
    client: "某消费电子结构件供应商",
    industry: "3C 电子",
    location: "江苏 · 苏州",
    date: "2025-05-28",
    summary:
      "以机器人上下料替代人工，实现冲压产线 24 小时连续生产与良率跃升。",
    highlights: [
      { value: "24h", label: "连续生产" },
      { value: "98.9%", label: "产品良率" },
      { value: "3→1", label: "人均看机台数" },
    ],
    challenge:
      "客户冲压车间人工上下料劳动强度大、安全隐患多、节拍不稳定，亟需自动化改造且不能影响既有产能。",
    solution:
      "部署六轴工业机器人与快换抓手，配合冲床联机控制与安全光栅，实现多台冲床的柔性自动上下料。",
    results: [
      "人均看机台数由 3 台提升至 1 人管 6 台",
      "产品良率提升至 98.9%",
      "实现 24 小时无人化连续生产",
    ],
    body: [
      { type: "paragraph", text: "本项目采用边生产边改造的滚动实施方式，最大限度降低对客户交付的影响。改造完成后，冲压车间产能提升 45%，同时大幅降低人工成本与工伤风险。" },
      { type: "heading", text: "改造亮点" },
      { type: "list", items: ["不停产滚动改造", "快换抓手适配多产品", "与既有 MES 数据打通"] },
    ],
  },
  {
    slug: "medical-implant-machining",
    title: "骨科植入物精密加工产线",
    client: "某上市医疗器械企业",
    industry: "医疗器械",
    location: "浙江 · 杭州",
    date: "2025-03-10",
    summary:
      "为骨科植入物提供高洁净度精密加工与全流程追溯，满足三类医疗器械合规要求。",
    highlights: [
      { value: "±0.005mm", label: "关键尺寸公差" },
      { value: "100%", label: "批次可追溯" },
      { value: "GMP", label: "洁净生产环境" },
    ],
    challenge:
      "植入物尺寸微小、材料特殊、表面质量要求极高，且需满足医疗器械全流程追溯与洁净生产规范。",
    solution:
      "建立专用洁净加工单元，采用车铣复合与在线测量，结合条码/RFID 实现从材料到成品的全流程追溯。",
    results: [
      "关键尺寸公差稳定达到 ±0.005mm",
      "表面粗糙度满足植入级要求",
      "通过客户与监管机构双重审核",
    ],
    body: [
      { type: "paragraph", text: "华域精工以医疗器械专用管理体系组织生产，从人员、环境、设备、物料到工艺文件均按 GMP 要求管理，为客户的骨科植入物批量上市提供了可靠的制造保障。" },
      { type: "heading", text: "合规保障" },
      { type: "list", items: ["洁净车间分区管理", "全流程批次追溯", "关键工序双重确认"] },
    ],
  },
  {
    slug: "machinery-welding-cells",
    title: "工程机械结构件机器人焊接工作站",
    client: "某工程机械主机厂",
    industry: "工程机械",
    location: "湖南 · 长沙",
    date: "2024-12-18",
    summary:
      "以机器人焊接工作站替代人工焊，焊接质量稳定，效率与一致性显著提升。",
    highlights: [
      { value: "2.5×", label: "焊接效率提升" },
      { value: "98%+", label: "焊缝一次合格率" },
      { value: "6", label: "交付工作站数" },
    ],
    challenge:
      "结构件焊缝复杂、品种多、批量波动大，人工焊接质量依赖焊工水平，一致性难以保证。",
    solution:
      "采用双机器人协同焊接工作站 + 变位机联动，配合离线编程与焊缝跟踪，适应多品种柔性生产。",
    results: [
      "焊接效率提升 2.5 倍",
      "焊缝一次合格率提升至 98% 以上",
      "焊接飞溅减少，打磨量降低 60%",
    ],
    body: [
      { type: "paragraph", text: "华域精工针对工程机械结构件的特点，优化焊接工艺参数与工装定位，通过双机器人协同与变位机联动实现全位置焊接，显著提升了焊接质量与产能。" },
      { type: "heading", text: "技术要点" },
      { type: "list", items: ["双机器人协同控制", "激光焊缝跟踪", "离线编程仿真"] },
    ],
  },
  {
    slug: "warehouse-agv-upgrade",
    title: "电子厂智能仓储 AGV 物流改造",
    client: "某电子制造企业",
    industry: "3C 电子",
    location: "广东 · 东莞",
    date: "2024-09-22",
    summary:
      "以 AGV + 智能调度系统替代人工搬运，实现物料配送准时化与库存可视化。",
    highlights: [
      { value: "20+", label: "部署 AGV 台数" },
      { value: "70%", label: "人工搬运减少" },
      { value: "100%", label: "配送准时率" },
    ],
    challenge:
      "厂区物料搬运依赖人工叉车，效率低、易出错，且库存数据滞后，难以支撑柔性排产。",
    solution:
      "部署 SLAM 导航 AGV 与 RCS 调度系统，对接 WMS/MES，实现按工单自动叫料与精准配送。",
    results: [
      "人工搬运量减少 70%",
      "物料配送准时率达到 100%",
      "库存准确率提升至 99.8%",
    ],
    body: [
      { type: "paragraph", text: "本项目覆盖原材料上线、半成品转运与成品入库等场景。通过 AGV 与调度系统的无缝集成，客户实现了物流信息的实时透明与生产物料的准时配送，为柔性制造打下基础。" },
      { type: "heading", text: "系统构成" },
      { type: "list", items: ["SLAM 激光导航 AGV", "RCS 机器人调度系统", "WMS 仓储管理系统", "MES 生产执行对接"] },
    ],
  },
];

export const caseIndustries = Array.from(
  new Set(caseStudies.map((c) => c.industry)),
);

export function getCaseBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
