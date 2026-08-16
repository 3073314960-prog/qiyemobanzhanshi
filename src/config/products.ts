import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "five-axis-cnc",
    name: "五轴联动数控加工中心",
    enName: "5-Axis CNC Machining Center",
    category: "数控机床",
    summary: "高刚性、高精度五轴联动加工，一次装夹完成复杂曲面零件加工。",
    description:
      "面向航空航天、模具与精密零部件行业的高端五轴加工中心，具备出色的动态性能与热稳定性，显著提升复杂零件的加工效率与精度。",
    tags: ["五轴联动", "高速铣削", "热补偿"],
    featured: true,
    specs: [
      { label: "工作行程 (X/Y/Z)", value: "800 / 650 / 500 mm" },
      { label: "摆动/回转轴", value: "A -120°~+30° / C 360°" },
      { label: "主轴转速", value: "18,000 rpm" },
      { label: "定位精度", value: "±0.004 mm" },
      { label: "重复定位精度", value: "±0.002 mm" },
      { label: "数控系统", value: "西门子 / 海德汉可选" },
    ],
    features: [
      {
        title: "高刚性整体床身",
        description: "米汉纳铸铁床身配合有限元优化，抑制切削振动，保证长期精度稳定。",
      },
      {
        title: "直驱回转工作台",
        description: "力矩电机直驱，零背隙、响应快，满足复杂曲面轮廓加工需求。",
      },
      {
        title: "智能热补偿",
        description: "多点温度传感与实时补偿算法，长时间加工下精度漂移控制在微米级。",
      },
    ],
    body: [
      { type: "paragraph", text: "华域精工五轴联动数控加工中心专为复杂曲面、异形结构件的高效精密加工而设计，广泛应用于航空航天结构件、精密模具、医疗器械等领域。设备采用整体式龙门结构与高精度直驱转台，实现一次装夹、五面加工，显著减少装夹次数与人为误差。" },
      { type: "heading", text: "核心优势" },
      { type: "list", items: ["一次装夹完成多面加工，减少流转与装夹误差", "高动态响应与高刚性兼顾，兼顾粗精加工", "开放的数控系统生态，易于接入 MES 与数字化工厂"] },
      { type: "specs", rows: [["冷却方式", "主轴油冷 + 床身恒温"], ["刀库容量", "32 / 60 把可选"], ["整机重量", "约 12,500 kg"]] },
    ],
  },
  {
    slug: "industrial-robot",
    name: "六轴工业机器人",
    enName: "6-Axis Industrial Robot",
    category: "工业机器人",
    summary: "高负载、高精度的六轴关节机器人，适配焊接、搬运、上下料等场景。",
    description:
      "覆盖 6kg 至 210kg 负载的六轴工业机器人系列，重复定位精度高、节拍快，是自动化产线升级的核心执行单元。",
    tags: ["六轴关节", "弧焊搬运", "离线编程"],
    featured: true,
    specs: [
      { label: "有效负载", value: "6 / 20 / 60 / 210 kg" },
      { label: "工作半径", value: "900 ~ 3100 mm" },
      { label: "重复定位精度", value: "±0.02 ~ ±0.06 mm" },
      { label: "防护等级", value: "IP54 / IP67 可选" },
      { label: "安装方式", value: "地面 / 倒装 / 壁挂" },
      { label: "控制柜", value: "新一代紧凑型控制柜" },
    ],
    features: [
      {
        title: "轻量化本体设计",
        description: "高比刚度结构件与紧凑腕部设计，提升负载自重比，节省占地与能耗。",
      },
      {
        title: "友好编程体验",
        description: "图形化示教 + 离线编程软件，支持拖拽示教与虚拟仿真，降低调试门槛。",
      },
      {
        title: "安全协作可选",
        description: "提供协作型与工业型两条产品线，满足人机共融与高速节拍的不同需求。",
      },
    ],
    body: [
      { type: "paragraph", text: "华域精工六轴工业机器人系列采用自研高精度减速器匹配与运动控制算法，具备高刚性、高速度与高一致性，可稳定运行于焊接、打磨、搬运、上下料、装配等典型工业场景，帮助客户实现「机器换人」与提质增效。" },
      { type: "heading", text: "典型应用" },
      { type: "list", items: ["弧焊 / 点焊工作站", "CNC 机床自动上下料", "压铸件去毛刺与打磨", "码垛与物流搬运"] },
    ],
  },
  {
    slug: "assembly-line",
    name: "自动化装配产线",
    enName: "Automated Assembly Line",
    category: "自动化产线",
    summary: "非标定制化整线方案，覆盖上料、装配、检测、包装全流程。",
    description:
      "根据客户产品工艺量身定制的自动化装配线，集成机器人、视觉检测、压装拧紧与追溯系统，实现高柔性与高节拍量产。",
    tags: ["非标定制", "视觉检测", "MES 追溯"],
    featured: true,
    specs: [
      { label: "产线节拍", value: "按产品工艺定制" },
      { label: "工位数量", value: "4 ~ 40 站" },
      { label: "定位精度", value: "±0.02 mm" },
      { label: "检测项", value: "视觉 / 气密 / 扭矩 / 尺寸" },
      { label: "追溯系统", value: "全流程条码 / RFID" },
      { label: "交付周期", value: "90 ~ 180 天" },
    ],
    features: [
      {
        title: "整线集成能力",
        description: "自主完成机械、电气、软件一体化设计与集成，交付即可量产。",
      },
      {
        title: "视觉与力控工艺",
        description: "集成 2D/3D 视觉引导与力位混合控制，应对柔性装配与高精度压装。",
      },
      {
        title: "数字化追溯",
        description: "对接 MES/ERP，实现工艺参数、物料与质量数据的全流程可追溯。",
      },
    ],
    body: [
      { type: "paragraph", text: "针对汽车零部件、新能源、3C 电子等行业的大批量装配需求，华域精工提供从工艺规划、方案设计、整线制造到调试交付的一站式自动化装配产线服务，帮助客户稳定节拍、降低人工依赖并提升产品一致性。" },
      { type: "heading", text: "服务范围" },
      { type: "list", items: ["工艺规划与节拍分析", "机械设计与仿真验证", "电控与软件系统开发", "安装调试与陪产验收"] },
    ],
  },
  {
    slug: "precision-components",
    name: "精密零部件制造",
    enName: "Precision Components",
    category: "精密制造",
    summary: "微米级精度的精密零部件 OEM/ODM 加工，覆盖多材料与复杂工艺。",
    description:
      "提供从图纸评审、工艺设计到精密加工、表面处理与检测交付的全流程精密零部件制造服务，公差可达 ±0.005mm。",
    tags: ["OEM/ODM", "多轴加工", "表面处理"],
    specs: [
      { label: "加工精度", value: "最高 ±0.005 mm" },
      { label: "表面粗糙度", value: "Ra0.2 ~ Ra0.8" },
      { label: "材料范围", value: "铝合金 / 钛合金 / 不锈钢 / 工程塑料" },
      { label: "加工能力", value: "车铣复合 / 五轴 / 慢走丝 / 电火花" },
      { label: "检测设备", value: "三坐标 / 影像仪 / 粗糙度仪" },
      { label: "批量范围", value: "单件打样 ~ 百万级量产" },
    ],
    features: [
      {
        title: "全工艺覆盖",
        description: "机加、热处理、表面处理、精密检测一站式完成，减少多供应商协调成本。",
      },
      {
        title: "严苛质量管控",
        description: "APQP 流程 + SPC 统计过程控制，关键尺寸全检，批次可追溯。",
      },
      {
        title: "快速打样响应",
        description: "48 小时报价、7 天快速打样，助力客户缩短产品开发周期。",
      },
    ],
    body: [
      { type: "paragraph", text: "华域精工精密零部件事业部拥有数百台高精度加工与检测设备，建立了完善的车铣复合、五轴联动、慢走丝、电火花等加工能力，长期为国内外知名企业提供高精度结构件、功能件与样件制造服务。" },
      { type: "heading", text: "品质保障" },
      { type: "list", items: ["ISO 9001 / IATF 16949 质量体系", "全尺寸三坐标检测报告随货交付", "材料与热处理工艺可追溯"] },
    ],
  },
  {
    slug: "laser-cutting",
    name: "数控激光切割设备",
    enName: "CNC Laser Cutting Machine",
    category: "激光设备",
    summary: "高功率光纤激光切割，覆盖薄板与厚板的高效、高精度加工。",
    description:
      "高性能光纤激光切割机系列，配备自动调焦切割头与智能排料系统，广泛用于钣金加工、结构件下料与异形切割。",
    tags: ["光纤激光", "自动调焦", "智能排料"],
    specs: [
      { label: "激光功率", value: "3kW / 6kW / 12kW 可选" },
      { label: "加工幅面", value: "3000×1500 / 6000×2000 mm" },
      { label: "定位精度", value: "±0.03 mm/m" },
      { label: "最大速度", value: "120 m/min" },
      { label: "切割厚度", value: "碳钢 ≤25mm / 不锈钢 ≤20mm" },
      { label: "控制系统", value: "自主激光数控系统" },
    ],
    features: [
      {
        title: "高功率切割头",
        description: "自动对焦与气压自动调节，长时间稳定切割，断面光洁。",
      },
      {
        title: "智能排料算法",
        description: "套料软件自动优化排版，材料利用率提升 5%~15%。",
      },
      {
        title: "环保除尘设计",
        description: "分区抽风除尘结构，改善车间环境，满足环保要求。",
      },
    ],
    body: [
      { type: "paragraph", text: "华域精工数控激光切割设备采用高功率光纤激光器与自主运动控制平台，具备切割速度快、切口质量好、运行成本低等优势，可满足钣金加工、工程机械、厨具、广告标识等行业的多样化切割需求。" },
      { type: "heading", text: "可选配置" },
      { type: "list", items: ["自动上下料单元", "管材切割旋转轴", "交换工作台", "视觉定位寻边"] },
    ],
  },
  {
    slug: "smart-warehouse",
    name: "智能仓储物流系统",
    enName: "Smart Warehouse System",
    category: "智能物流",
    summary: "AGV、立体库与 WMS/WCS 一体化集成的智能仓储物流解决方案。",
    description:
      "集成堆垛机立体库、AGV/AMR 与输送分拣系统，通过 WMS/WCS 软件实现库存、路径与任务的智能调度，助力工厂物流无人化。",
    tags: ["立体库", "AGV/AMR", "WMS/WCS"],
    specs: [
      { label: "货位容量", value: "按需定制" },
      { label: "堆垛机高度", value: "≤ 24 m" },
      { label: "AGV 导航", value: "SLAM / 二维码 / 磁条" },
      { label: "输送速度", value: "0.5 ~ 2.0 m/s" },
      { label: "软件系统", value: "WMS + WCS + RCS" },
      { label: "对接系统", value: "ERP / MES" },
    ],
    features: [
      {
        title: "柔性智能调度",
        description: "多 AGV 协同调度算法，动态避障与路径优化，提升搬运效率。",
      },
      {
        title: "高密度存储",
        description: "立体库与四向穿梭车组合，单位面积存储密度提升 3~5 倍。",
      },
      {
        title: "数据可视化",
        description: "实时库存看板与设备状态监控，仓储运营一目了然。",
      },
    ],
    body: [
      { type: "paragraph", text: "华域精工智能仓储物流系统面向制造、电商、医药等行业，提供从需求分析、方案规划、设备制造到软件集成的整体解决方案，实现仓储作业的自动化、数字化与可视化，显著提升物流效率并降低人力成本。" },
      { type: "heading", text: "解决方案构成" },
      { type: "list", items: ["自动化立体仓库 (AS/RS)", "AGV / AMR 移动机器人", "输送分拣与提升系统", "WMS/WCS 仓储调度软件"] },
    ],
  },
];

export const productCategories = Array.from(
  new Set(products.map((p) => p.category)),
);

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
